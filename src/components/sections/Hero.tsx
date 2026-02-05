import Link from "next/link";
import { copy } from "@/lib/copy";

// Pull copy from central source
const c = copy.homepage.hero;

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] md:h-[85vh] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Video with blur for softer, less distracting background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/video/herovideo-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-top blur-[2px] scale-105"
        >
          <source src="/video/herovideo-optimized.mp4" type="video/mp4" />
        </video>
        {/* Base overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient - dark bottom for section transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Acceptance Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/80">
              {c.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {c.headline}
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {c.subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 px-4 sm:px-0">
            <Link href="/apply" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">
              {c.ctaPrimary}
            </Link>
            <a
              href="#how-it-works"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
            >
              {c.ctaSecondary}
            </a>
          </div>

          {/* Social Proof Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/50">
            <span>30+ Years Research</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>13K+ Satisfied Clients</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span>0 Complaints</span>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
