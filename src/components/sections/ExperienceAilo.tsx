import Link from "next/link";
import Image from "next/image";

export function ExperienceAilo() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-sm uppercase tracking-widest text-white/30 mb-4">
              Experience AILO
            </p>
            <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Still exploring? Here&apos;s how to start.
            </h2>
          </div>

          {/* 3 Paths */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Path 1: Book a Call */}
            <div className="group rounded-2xl bg-white/5 border border-white/8 hover:border-[var(--color-accent)]/20 transition-colors overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/gallery/ailo-call.jpg"
                  alt="AILO Call"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Book a Call
                </h3>
                <p className="text-white/50 text-sm mb-4 sm:mb-5 leading-relaxed">
                  Talk to our team. We vet every member to keep quality high — no fake accounts, no AI profiles.
                </p>
                <Link
                  href="/apply"
                  className="inline-flex items-center text-[var(--color-accent)] text-sm font-medium hover:underline"
                >
                  Schedule a Call
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Path 2: Join an Event */}
            <div className="group rounded-2xl bg-white/5 border border-white/8 hover:border-[var(--color-accent)]/20 transition-colors overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/gallery/events.jpg"
                  alt="AILO Events"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Join an Event
                </h3>
                <p className="text-white/50 text-sm mb-4 sm:mb-5 leading-relaxed">
                  Meet our community in person first. Exclusive events for AILO members in South Florida.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center text-[var(--color-accent)] text-sm font-medium hover:underline"
                >
                  View Events
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Path 3: Try the Science (AILO Duo) */}
            <div className="group rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/25 transition-colors overflow-hidden sm:col-span-2 md:col-span-1">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/gallery/duo.jpg"
                  alt="AILO Duo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  Try the Science
                </h3>
                <p className="text-white/50 text-sm mb-4 sm:mb-5 leading-relaxed">
                  Test compatibility with someone you&apos;re already seeing. Send a code, see your match. Fully private.
                </p>
                <Link
                  href="/duo"
                  className="inline-flex items-center text-white text-sm font-medium hover:underline"
                >
                  Learn About AILO Duo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
