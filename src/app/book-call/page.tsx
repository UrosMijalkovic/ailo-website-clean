import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Book Your Strategy Call | AILO",
  description:
    "Schedule your personal consultation with AILO. Discover how science-backed matching can transform your dating life.",
};

export default function BookCallPage() {
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

        {/* Two Column Layout */}
        <div className="container-custom py-12 md:py-16">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Left Column - Calendly (Primary Focus) */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Calendly Header */}
                <div className="bg-[var(--color-primary-dark)] px-6 py-4 flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-white">
                      Schedule Your Call
                    </h2>
                    <p className="text-white/60 text-sm">
                      20 minutes • Video or Phone
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white/70">
                      8 slots this week
                    </span>
                  </div>
                </div>

                {/* Calendly Embed Area */}
                <div className="p-2">
                  <div className="aspect-[4/3] md:aspect-[3/2] bg-gray-50 rounded-lg flex items-center justify-center">
                    {/* Replace this div with actual Calendly embed */}
                    <div className="text-center p-8">
                      <svg
                        className="w-16 h-16 mx-auto text-[var(--color-primary)]/20 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-[var(--color-primary)] font-medium mb-1">
                        Calendly Widget
                      </p>
                      <p className="text-gray-400 text-sm">
                        Integration ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Bar - Below Calendly */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>20 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Video or phone</span>
                </div>
              </div>
            </div>

            {/* Right Column - Trust & Info */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">

              {/* Meet Your Strategist */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/gallery/haleh.jpg"
                      alt="Haleh Gianni"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Haleh Gianni
                    </h3>
                    <p className="text-[var(--color-accent)] text-sm">
                      Founder & Matchmaking Strategist
                    </p>
                  </div>
                </div>
                <p className="text-white/70 text-sm">
                  15 years helping people find lasting love. I&apos;ll personally review your situation and show you exactly how AILO can help.
                </p>
              </div>

              {/* What We'll Cover */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-4">
                  On Your Call
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[var(--color-accent)] text-xs font-bold">1</span>
                    </div>
                    <span className="text-white/80 text-sm">
                      Your dating goals and what hasn&apos;t worked
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[var(--color-accent)] text-xs font-bold">2</span>
                    </div>
                    <span className="text-white/80 text-sm">
                      How AILO&apos;s science-based matching works
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[var(--color-accent)] text-xs font-bold">3</span>
                    </div>
                    <span className="text-white/80 text-sm">
                      Whether AILO is right for your situation
                    </span>
                  </li>
                </ul>
              </div>

              {/* Investment Preview */}
              <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent border border-[var(--color-accent)]/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">
                    Membership
                  </h3>
                  <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded">
                    One-time
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-bold text-white">$999</span>
                  <span className="text-white/50">–</span>
                  <span className="text-2xl font-bold text-white">$1,499</span>
                </div>
                <p className="text-white/60 text-sm mb-4">
                  vs. $15,000–50,000 traditional matchmakers
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-white/10 text-white/70 px-2 py-1 rounded">
                    Lifetime access
                  </span>
                  <span className="bg-white/10 text-white/70 px-2 py-1 rounded">
                    90-day guarantee
                  </span>
                  <span className="bg-white/10 text-white/70 px-2 py-1 rounded">
                    No subscriptions
                  </span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center py-4">
                <p className="text-white/40 text-sm mb-3">
                  Join 200+ members finding better matches
                </p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white/60 text-sm ml-2">4.9/5</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 mt-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
              <p>
                Questions? Email{" "}
                <a href="mailto:hello@ailoapp.com" className="text-[var(--color-accent)] hover:underline">
                  hello@ailoapp.com
                </a>
              </p>
              <div className="flex items-center gap-6">
                <Link href="/the-science" className="hover:text-white transition-colors">
                  The Science
                </Link>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
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
