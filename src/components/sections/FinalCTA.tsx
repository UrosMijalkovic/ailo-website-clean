"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { copy } from "@/lib/copy";

const c = copy.homepage.finalCta;

export function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"]
  });

  // Transform scroll progress to scale (0.85 -> 1)
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container-custom" ref={containerRef}>
        {/* Animated image container */}
        <motion.div
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden"
          style={{
            aspectRatio: '2431 / 900',
            scale,
            opacity
          }}
        >
          {/* Background Image */}
          <Image
            src="/images/dating.avif"
            alt=""
            fill
            className="object-cover"
            priority={false}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content centered over image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-2xl mx-auto text-center px-6">
              {/* Headline */}
              <h2 className="font-[var(--font-playfair)] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
                {c.headline}
              </h2>

              <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8">
                {c.subhead}
              </p>

              {/* Primary CTA */}
              <Link href="/apply" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 inline-block">
                {c.ctaPrimary}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Secondary CTA below image */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-white/50 mb-2 text-sm">{c.secondaryText}</p>
          <Link
            href="/waitlist"
            className="text-[var(--color-accent)] hover:text-[var(--color-accent-light)] font-medium transition-colors text-sm"
          >
            {c.ctaSecondary} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
