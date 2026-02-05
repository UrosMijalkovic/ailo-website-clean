/**
 * Email utilities using Resend
 */

import { Resend } from "resend";

// Lazy initialization to avoid build-time errors when API key is missing
let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not set");
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "AILO <onboarding@resend.dev>";

/**
 * Email styling - matches AILO brand
 */
const emailStyles = {
  container: `
    background-color: #1a2328;
    padding: 40px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `,
  card: `
    background-color: #2d3a40;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 32px;
    max-width: 560px;
    margin: 0 auto;
  `,
  heading: `
    color: #e1b98f;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 16px 0;
  `,
  text: `
    color: #ebebeb;
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 16px 0;
  `,
  mutedText: `
    color: rgba(235,235,235,0.7);
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 12px 0;
  `,
  button: `
    display: inline-block;
    background: linear-gradient(180deg, #E1B98F 0%, #C4A07A 50%, #A87D55 100%);
    color: #262626;
    padding: 14px 28px;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
  `,
  listItem: `
    color: #ebebeb;
    font-size: 14px;
    margin: 8px 0;
    padding-left: 20px;
    position: relative;
  `,
  footer: `
    color: rgba(235,235,235,0.5);
    font-size: 12px;
    text-align: center;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid rgba(255,255,255,0.1);
  `,
};

/**
 * Send booking confirmation email after Calendly scheduling
 */
export async function sendBookingConfirmation({
  email,
  name,
}: {
  email: string;
  name?: string;
}) {
  const firstName = name?.split(" ")[0] || "there";

  const html = `
    <div style="${emailStyles.container}">
      <div style="${emailStyles.card}">
        <h1 style="${emailStyles.heading}">You're All Set, ${firstName}!</h1>

        <p style="${emailStyles.text}">
          Your discovery call is confirmed. We can't wait to learn more about you
          and show you how AILO can help you find meaningful connection.
        </p>

        <h2 style="color: #e1b98f; font-size: 18px; margin: 24px 0 12px 0;">
          Before your call:
        </h2>

        <ul style="padding-left: 0; list-style: none; margin: 0 0 24px 0;">
          <li style="${emailStyles.mutedText}">
            <span style="color: #e1b98f; margin-right: 8px;">•</span>
            Think about what qualities matter most in a partner
          </li>
          <li style="${emailStyles.mutedText}">
            <span style="color: #e1b98f; margin-right: 8px;">•</span>
            Consider your relationship goals
          </li>
          <li style="${emailStyles.mutedText}">
            <span style="color: #e1b98f; margin-right: 8px;">•</span>
            Prepare any questions about the AILO process
          </li>
        </ul>

        <p style="${emailStyles.text}">
          See you soon,<br/>
          <span style="color: #e1b98f;">The AILO Team</span>
        </p>

        <div style="${emailStyles.footer}">
          <p style="margin: 0;">
            AILO • Science-Backed Matchmaking<br/>
            South Florida
          </p>
        </div>
      </div>
    </div>
  `;

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Your AILO Call is Confirmed",
    html,
  });
}

/**
 * Send waitlist confirmation email
 */
export async function sendWaitlistConfirmation({
  email,
  city,
}: {
  email: string;
  city?: string;
}) {
  const locationNote = city ? ` in ${city}` : "";

  const html = `
    <div style="${emailStyles.container}">
      <div style="${emailStyles.card}">
        <h1 style="${emailStyles.heading}">You're on the List!</h1>

        <p style="${emailStyles.text}">
          Thanks for your interest in AILO${locationNote}. We're currently
          focused on South Florida, but we're growing fast.
        </p>

        <h2 style="color: #e1b98f; font-size: 18px; margin: 24px 0 12px 0;">
          What happens next:
        </h2>

        <ul style="padding-left: 0; list-style: none; margin: 0 0 24px 0;">
          <li style="${emailStyles.mutedText}">
            <span style="color: #e1b98f; margin-right: 8px;">•</span>
            We'll email you when we expand to your area
          </li>
          <li style="${emailStyles.mutedText}">
            <span style="color: #e1b98f; margin-right: 8px;">•</span>
            Waitlist members get priority access
          </li>
          <li style="${emailStyles.mutedText}">
            <span style="color: #e1b98f; margin-right: 8px;">•</span>
            No spam, just updates
          </li>
        </ul>

        <p style="${emailStyles.text}">
          We'll be in touch,<br/>
          <span style="color: #e1b98f;">The AILO Team</span>
        </p>

        <div style="${emailStyles.footer}">
          <p style="margin: 0;">
            AILO • Science-Backed Matchmaking<br/>
            Coming soon to more locations
          </p>
        </div>
      </div>
    </div>
  `;

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "You're on the AILO Waitlist",
    html,
  });
}

/**
 * Send weekly insights confirmation
 */
export async function sendWeeklyInsightsConfirmation({
  email,
}: {
  email: string;
}) {
  const html = `
    <div style="${emailStyles.container}">
      <div style="${emailStyles.card}">
        <h1 style="${emailStyles.heading}">Welcome to AILO Insights</h1>

        <p style="${emailStyles.text}">
          You've subscribed to our weekly relationship insights. Expect
          science-backed tips on finding and building meaningful connections.
        </p>

        <p style="${emailStyles.mutedText}">
          Your first issue arrives next week.
        </p>

        <div style="${emailStyles.footer}">
          <p style="margin: 0;">
            AILO • Science-Backed Matchmaking<br/>
            <a href="https://ailoapp.com" style="color: #e1b98f;">ailoapp.com</a>
          </p>
        </div>
      </div>
    </div>
  `;

  return getResend().emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Welcome to AILO Weekly Insights",
    html,
  });
}
