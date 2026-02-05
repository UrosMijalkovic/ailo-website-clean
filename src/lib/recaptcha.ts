/**
 * Server-side reCAPTCHA v3 verification
 */

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.3; // Lenient to avoid blocking VPN users

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  "error-codes"?: string[];
}

export interface RecaptchaResult {
  success: boolean;
  score?: number;
  error?: string;
}

/**
 * Verify a reCAPTCHA v3 token
 */
export async function verifyRecaptcha(token: string): Promise<RecaptchaResult> {
  // Skip verification if not configured (development)
  if (!RECAPTCHA_SECRET_KEY) {
    console.warn("reCAPTCHA secret key not configured, skipping verification");
    return { success: true };
  }

  if (!token) {
    return { success: false, error: "No reCAPTCHA token provided" };
  }

  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `reCAPTCHA API returned ${response.status}`
      };
    }

    const data: RecaptchaResponse = await response.json();

    if (!data.success) {
      return {
        success: false,
        error: `Verification failed: ${data["error-codes"]?.join(", ") || "unknown"}`
      };
    }

    if (data.score < MIN_SCORE) {
      return {
        success: false,
        score: data.score,
        error: "Suspicious activity detected"
      };
    }

    return { success: true, score: data.score };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return {
      success: false,
      error: "Failed to verify reCAPTCHA"
    };
  }
}
