"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { copy } from "@/lib/copy";

const founderImages: Record<string, string> = {
  "Dr. Zannah Hackett": "/images/gallery/drzannah.jpg",
  "Haleh Gianni": "/images/gallery/haleh1.jpg",
};

const c = copy.homepage.proof;

function AnimatedBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.6"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

export function Proof() {
  // Double the testimonials for seamless loop
  const doubledTestimonials = [...c.testimonials, ...c.testimonials];

  return (
    <section className="relative py-12 sm:py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container-custom">
        {/* Headline */}
        <AnimatedBlock className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {c.headline}
          </h2>
          <p className="text-lg text-white/50">
            {c.subhead}
          </p>
        </AnimatedBlock>

        {/* Stats Row */}
        <AnimatedBlock className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 mb-8">
          {c.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </AnimatedBlock>

        {/* Patent Badge */}
        <div className="flex justify-center mb-12 sm:mb-20 px-4">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs bg-white/5 border border-white/10 text-white/40 text-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Patented Assessment Methodology
          </span>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-20">
          {c.founders.map((founder, index) => (
            <AnimatedBlock
              key={index}
              className="flex flex-row rounded-2xl bg-white/5 border border-white/8 overflow-hidden"
            >
              {/* Founder Photo - Vertical Banner */}
              <div className="relative w-40 sm:w-48 flex-shrink-0 aspect-[3/4]">
                <Image
                  src={founderImages[founder.name] || "/images/gallery/haleh.jpg"}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 640px) 160px, 192px"
                  className="object-cover object-top scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-5 sm:p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {founder.name}
                </h3>
                <p className="text-[var(--color-accent)] text-sm mb-4">
                  {founder.title}
                </p>
                <ul className="space-y-1">
                  {founder.credentials.map((cred, i) => (
                    <li key={i} className="text-white/40 text-sm flex items-start gap-2">
                      <span className="text-[var(--color-primary)] mt-1">•</span>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>
          ))}
        </div>

        {/* Testimonials Marquee */}
        <div>
          <p className="text-center text-sm uppercase tracking-widest text-white/30 mb-8">
            {c.testimonialLabel}
          </p>

          {/* Marquee container */}
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-marquee hover:pause-animation">
                {doubledTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[280px] sm:w-[350px] bg-white/5 border border-white/8 rounded-2xl p-4 sm:p-6 hover:border-[var(--color-accent)]/20"
                  >
                    {/* Quote - fixed height */}
                    <p className="text-white/70 leading-relaxed h-[80px] sm:h-[90px] overflow-hidden">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Attribution with photo - fixed margin from quote */}
                    <div className="flex items-center gap-3 mt-4">
                      {testimonial.image && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-white font-medium text-sm">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
