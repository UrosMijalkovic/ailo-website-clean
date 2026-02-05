"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { copy } from "@/lib/copy";

const c = copy.homepage.problem;

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const closerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for banner animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"]
  });

  // Track scroll progress for closer text
  const { scrollYProgress: closerScrollProgress } = useScroll({
    target: closerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to scale (0.85 -> 1)
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  // Closer text scroll-linked animation
  const closerOpacity = useTransform(closerScrollProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const closerY = useTransform(closerScrollProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);

  // Double the pain points for seamless loop
  const doubledPainPoints = [...c.painPoints, ...c.painPoints];

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 bg-[#0a0a0a]">
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
            src="/images/gallery/problem-bg.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content centered over image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center px-6">
              {/* Headline */}
              <h2 className="font-[var(--font-playfair)] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                {c.headline}
              </h2>

              {/* Headline Accent */}
              <p className="text-base sm:text-xl md:text-2xl text-white/40 mb-3 sm:mb-4 font-light">
                {c.headlineAccent}
              </p>

              {/* Subhead */}
              <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto">
                {c.subhead}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pain Points Marquee - Full width, overlapping banner */}
      <div className="relative -mt-8 sm:-mt-12 md:-mt-16 z-10">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-64 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-64 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-marquee-slow hover:pause-animation">
            {doubledPainPoints.map((point, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] rounded-xl p-4 sm:p-5 border backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-white/10 border-white/20"
              >
                <h3 className="text-sm sm:text-base font-semibold mb-1.5 leading-snug text-white/90">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/50">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closer with gradient transition */}
      <div ref={closerRef} className="relative mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="container-custom">
          <div className="text-center">
            <motion.p
              style={{ opacity: closerOpacity, y: closerY }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[var(--font-playfair)] text-[var(--color-accent)] font-medium"
            >
              {c.closer}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Marquee animation styles */}
      <style jsx>{`
        @keyframes marquee-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-slow {
          animation: marquee-slow 60s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
