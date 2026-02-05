"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const promises = [
  {
    title: "Your time back.",
    description: "No more hours wasted on dead-end dates.",
  },
  {
    title: "Fewer dates. Better odds.",
    description: "Meet people who actually fit — not just anyone nearby.",
  },
  {
    title: "Clarity over confusion.",
    description: "Know why you'd work together before you meet.",
  },
  {
    title: "A foundation, not a gamble.",
    description: "Start relationships with understanding, not hope.",
  },
];

export function FounderLetter() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for card animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Staggered transforms for each card
  const cardOpacity1 = useTransform(scrollYProgress, [0, 0.15, 0.7, 0.85], [0, 1, 1, 0]);
  const cardY1 = useTransform(scrollYProgress, [0, 0.15, 0.7, 0.85], [60, 0, 0, -30]);

  const cardOpacity2 = useTransform(scrollYProgress, [0.05, 0.2, 0.7, 0.85], [0, 1, 1, 0]);
  const cardY2 = useTransform(scrollYProgress, [0.05, 0.2, 0.7, 0.85], [60, 0, 0, -30]);

  const cardOpacity3 = useTransform(scrollYProgress, [0.1, 0.25, 0.7, 0.85], [0, 1, 1, 0]);
  const cardY3 = useTransform(scrollYProgress, [0.1, 0.25, 0.7, 0.85], [60, 0, 0, -30]);

  const cardOpacity4 = useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [0, 1, 1, 0]);
  const cardY4 = useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [60, 0, 0, -30]);

  const cardTransforms = [
    { opacity: cardOpacity1, y: cardY1 },
    { opacity: cardOpacity2, y: cardY2 },
    { opacity: cardOpacity3, y: cardY3 },
    { opacity: cardOpacity4, y: cardY4 },
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <p className="text-center text-sm uppercase tracking-widest text-[var(--color-accent)] mb-6">
            Our Promise to You by AILO Founder Haleh Gianni
          </p>

          <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-10 sm:mb-16 leading-tight">
            &ldquo;I Built the Dating Service I Wished Existed.&rdquo;
          </h2>

          {/* Two column: Video + Promises - aligned heights */}
          <div ref={containerRef} className="grid lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 lg:gap-10 items-stretch mb-16 sm:mb-20">
            {/* Left: Video */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer">
              {/* Background Image */}
              <Image
                src="/images/gallery/haleh-video-placeholder.jpg"
                alt="Haleh Gianni - Founder of AILO"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/80 text-sm font-medium">Video coming soon</p>
              </div>
            </div>

            {/* Right: Promises with scroll animation */}
            <div className="flex flex-col gap-2">
              {promises.map((promise, index) => (
                <motion.div
                  key={index}
                  style={{
                    opacity: cardTransforms[index].opacity,
                    y: cardTransforms[index].y
                  }}
                  className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/25 transition-colors"
                >
                  {/* Check icon */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary)]/15 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-[var(--color-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-semibold text-white leading-tight">
                      {promise.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-tight">
                      {promise.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8" style={{ marginTop: '40px' }}>
            <Link href="/apply" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              Apply for Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
