import { NextRequest, NextResponse } from "next/server";
import { sendBookingConfirmation } from "@/lib/email";

interface BookingConfirmationBody {
  email: string;
  name?: string;
}

export async function POST(request: NextRequest) {
  let body: BookingConfirmationBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json", message: "Invalid request body" },
      { status: 400 }
    );
  }

  // Validate email
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json(
      { error: "validation_error", message: "Valid email is required" },
      { status: 400 }
    );
  }

  try {
    await sendBookingConfirmation({
      email: body.email,
      name: body.name,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send booking confirmation:", error);
    return NextResponse.json(
      { error: "email_failed", message: "Failed to send confirmation email" },
      { status: 500 }
    );
  }
}
