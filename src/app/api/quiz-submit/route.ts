import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

import { checkRateLimit, getClientIP } from "@/lib/rate-limit";
import { verifyRecaptcha } from "@/lib/recaptcha";
import { calculateOutcome, QuizAnswers, QuizAnswer } from "@/lib/quiz-data";
import {
  formatAnswersForApi,
  getBackendLocation,
  mapOutcomeToBackend,
  AiloApiPayload,
  AiloApiResponse,
} from "@/lib/quiz-helpers";
import { sendWaitlistConfirmation } from "@/lib/email";

const AILO_API_URL = process.env.AILO_API_URL;
const AILO_API_KEY = process.env.AILO_API_KEY;

interface SubmissionBody {
  answers: QuizAnswers;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  recaptchaToken?: string;
}

/**
 * Validate the submission body
 */
function validateSubmission(body: SubmissionBody): { valid: boolean; error?: string } {
  const { answers, contact } = body;

  // Check required contact fields
  if (!contact?.name || contact.name.trim().length < 2) {
    return { valid: false, error: "Name is required (min 2 characters)" };
  }

  if (!contact?.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
    return { valid: false, error: "Valid email is required" };
  }

  if (!contact?.phone || contact.phone.replace(/\D/g, "").length < 10) {
    return { valid: false, error: "Valid phone number is required (min 10 digits)" };
  }

  // Check name format (letters, spaces, hyphens, apostrophes only)
  if (!/^[a-zA-Z\s'-]{2,100}$/.test(contact.name.trim())) {
    return { valid: false, error: "Name contains invalid characters" };
  }

  // Check answers
  const validAnswers: QuizAnswer[] = ["A", "B", "C", "D"];
  for (const key of ["q1", "q2", "q3", "q4", "q5"]) {
    const answer = answers[key as keyof QuizAnswers];
    if (!answer || !validAnswers.includes(answer)) {
      return { valid: false, error: `Invalid answer for ${key}` };
    }
  }

  return { valid: true };
}

/**
 * Send data to AILO backend API
 */
async function sendToAiloBackend(payload: AiloApiPayload): Promise<{
  success: boolean;
  leadId?: string;
  error?: string;
  isDuplicate?: boolean;
}> {
  if (!AILO_API_URL || !AILO_API_KEY) {
    console.warn("AILO API not configured, skipping backend sync");
    return { success: true };
  }

  try {
    console.log("Sending to AILO API:", AILO_API_URL);
    console.log("Payload:", JSON.stringify(payload, null, 2));

    const response = await fetch(AILO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "web-app-api-key": AILO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    console.log("AILO API response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AILO API error response:", errorText);

      // Only treat as duplicate if status is 409 OR error contains the specific Prisma unique constraint message
      // AND it specifically mentions email
      const isDuplicate =
        response.status === 409 ||
        (errorText.includes("Unique constraint failed") && errorText.toLowerCase().includes("email"));

      if (isDuplicate) {
        return { success: false, error: "Duplicate email", isDuplicate: true };
      }

      return { success: false, error: `API returned ${response.status}: ${errorText}` };
    }

    const data: AiloApiResponse = await response.json();
    console.log("AILO API success, lead_id:", data.id);
    return { success: true, leadId: String(data.id) };
  } catch (error) {
    console.error("AILO API request failed:", error);
    // Don't treat network errors as duplicates - just log and continue
    return { success: false, error: "Request failed" };
  }
}

export async function POST(request: NextRequest) {
  // 1. Rate limiting
  const ip = getClientIP(request);
  const rateLimitResult = checkRateLimit(ip);

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        error: "rate_limited",
        message: "Too many requests. Please try again later.",
        retryAfter: rateLimitResult.retryAfter,
      },
      { status: 429 }
    );
  }

  // 2. Parse and validate body
  let body: SubmissionBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json", message: "Invalid request body" },
      { status: 400 }
    );
  }

  const validation = validateSubmission(body);
  if (!validation.valid) {
    return NextResponse.json(
      { error: "validation_error", message: validation.error },
      { status: 400 }
    );
  }

  // 3. Verify reCAPTCHA (non-blocking — log failures but don't reject)
  const recaptchaResult = await verifyRecaptcha(body.recaptchaToken || "");
  if (!recaptchaResult.success) {
    console.warn("reCAPTCHA verification failed (non-blocking):", recaptchaResult.error);
  }

  // 4. Calculate quiz outcome
  const result = calculateOutcome(body.answers);

  // 5. Prepare AILO API payload
  const apiAnswers = formatAnswersForApi(body.answers);
  const ailoPayload: AiloApiPayload = {
    email: body.contact.email.toLowerCase().trim(),
    phone: body.contact.phone,
    fullName: body.contact.name.trim(),
    location: getBackendLocation(body.answers.q1!),
    quizOutcome: mapOutcomeToBackend(result.outcome),
    ...apiAnswers,
  };

  // 6. Send to AILO backend (non-blocking on failure)
  const ailoResult = await sendToAiloBackend(ailoPayload);

  // Handle duplicate email
  if (ailoResult.isDuplicate) {
    return NextResponse.json(
      { error: "already_applied", message: "You've already applied!" },
      { status: 409 }
    );
  }

  // 7. Generate booking UUID and set cookies
  const bookingUuid = randomUUID();
  const cookieStore = await cookies();

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 86400, // 24 hours
    path: "/",
  };

  cookieStore.set("booking_id", bookingUuid, cookieOptions);

  if (ailoResult.leadId) {
    cookieStore.set("lead_id", ailoResult.leadId, cookieOptions);
  }

  // 8. Send waitlist email if applicable
  if (result.outcome === "waitlist") {
    try {
      await sendWaitlistConfirmation({ email: body.contact.email });
    } catch (error) {
      console.error("Failed to send waitlist email:", error);
      // Don't fail the request
    }
  }

  // 9. Return success response
  return NextResponse.json({
    success: true,
    outcome: result.outcome,
    reason: result.reason,
    score: result.score,
  });
}
