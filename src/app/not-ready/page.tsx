import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Timing is Everything",
  description:
    "Finding love requires the right mindset. Here's how to get ready for AILO.",
};

export default function NotReadyPage() {
  return (
    <main className="min-h-screen bg-gradient-hero">
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

      <div className="container-custom pt-24 pb-12 min-h-screen flex flex-col justify-center">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-accent)]/20 mb-6">
            <svg
              className="w-8 h-8 text-[var(--color-accent)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Headline - Softer Framing */}
          <h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Not the Right Time? That&apos;s Okay.
          </h1>

          {/* Subhead */}
          <p className="text-lg text-white/80 mb-10">
            Finding the right person requires the right mindset. Here&apos;s how to get ready.
          </p>

          {/* Options */}
          <div className="space-y-4">
            {/* Option 1 - Stay Connected */}
            <div className="bg-white/5 border border-white/10 text-white rounded-2xl p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-semibold text-xl">Get Ready for Love</h3>
              </div>
              <p className="text-white/70 mb-2">
                Join 3,000+ people getting weekly insights:
              </p>
              <ul className="text-white/60 text-sm mb-4 space-y-1 text-left max-w-xs mx-auto">
                <li>• How to know when you&apos;re emotionally ready</li>
                <li>• Communication patterns that predict success</li>
                <li>• Red flags vs. preferences: knowing the difference</li>
              </ul>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[var(--color-accent)]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 rounded-xl text-[var(--color-primary-dark)] font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Personal Note from Haleh */}
            <div className="bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-xl p-4">
              <p className="text-white/80 text-sm italic">
                &ldquo;I&apos;ve been where you are. Taking time to prepare is a sign of maturity,
                not failure. When you&apos;re ready, we&apos;ll be here.&rdquo;
                <span className="text-[var(--color-accent)] not-italic font-medium"> — Haleh</span>
              </p>
            </div>

            {/* Option 3 - Check Back Later */}
            <Link
              href="/waitlist"
              className="block bg-white/5 border border-white/10 text-white rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-semibold text-xl">Check Back Later</h3>
              </div>
              <p className="text-white/70">
                When you&apos;re ready, we&apos;ll be here. Join the waitlist.
              </p>
            </Link>
          </div>

          {/* Reassurance */}
          <p className="text-white/50 text-sm mt-10">
            There&apos;s no rush. The right match is worth waiting for.
          </p>

          {/* Back Link */}
          <div className="mt-6">
            <Link
              href="/"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              ← Return to homepage
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
