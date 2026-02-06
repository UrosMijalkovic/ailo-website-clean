import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";

import { BookCallClient } from "./BookCallClient";

export const metadata: Metadata = {
  title: "Book Your Strategy Call | AILO",
  description:
    "Schedule your personal consultation with AILO. Discover how science-backed matching can transform your dating life.",
  openGraph: {
    title: "Book Your Strategy Call | AILO",
    description:
      "Schedule your personal consultation with AILO. Discover how science-backed matching can transform your dating life.",
    images: ["/images/gallery/ailo-call.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Your Strategy Call | AILO",
    description:
      "Schedule your personal consultation with AILO. Discover how science-backed matching can transform your dating life.",
    images: ["/images/gallery/ailo-call.jpg"],
  },
};

export default async function BookCallPage() {
  // Read HTTP-only cookies server-side
  const cookieStore = await cookies();
  const bookingId = cookieStore.get("booking_id")?.value || "";
  const leadId = cookieStore.get("lead_id")?.value || "";

  return (
    <main className="min-h-screen bg-[var(--color-primary-dark)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary-dark)]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/app/Logo.png"
                alt="AILO"
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Banner - Compact */}
        <div className="bg-gradient-to-b from-[var(--color-accent)]/10 to-transparent py-8 md:py-12 border-b border-white/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              {/* Success Badge */}
              <div className="inline-flex items-center gap-2 bg-[var(--color-accent)] px-4 py-2 rounded-full mb-6">
                <svg
                  className="w-5 h-5 text-[var(--color-primary-dark)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-semibold text-[var(--color-primary-dark)]">
                  You Qualified
                </span>
              </div>

              <h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                You&apos;re Exactly Who We Built AILO For
              </h1>
              <p className="text-lg text-white/70 max-w-xl mx-auto">
                Book your complimentary strategy call below
              </p>
            </div>
          </div>
        </div>

        {/* Client Component with Calendly and dynamic content */}
        <BookCallClient bookingId={bookingId} leadId={leadId} />

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 mt-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
              <p>
                Questions? Email{" "}
                <a
                  href="mailto:hello@ailoapp.com"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  hello@ailoapp.com
                </a>
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/the-science"
                  className="hover:text-white transition-colors"
                >
                  The Science
                </Link>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
