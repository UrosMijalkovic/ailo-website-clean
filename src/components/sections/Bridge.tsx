"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Bridge() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to opacity and y position
  // Each line has slightly different timing for staggered effect
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);

  const opacity2 = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.95], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.95], [40, 0, 0, -40]);

  const opacity3 = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [40, 0, 0, -40]);

  return (
    <section ref={containerRef} className="relative pt-12 sm:pt-16 md:pt-28 pb-10 sm:pb-14 md:pb-20 bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Positioning */}
          <motion.p
            style={{ opacity: opacity1, y: y1 }}
            className="text-lg md:text-xl text-[var(--color-accent)] font-medium mb-4"
          >
            AILO is the first science-based matchmaking app.
          </motion.p>

          {/* Punch line */}
          <motion.p
            style={{ opacity: opacity2, y: y2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
          >
            No swiping. No guessing. No wasted time.
          </motion.p>

          {/* Value statement */}
          <motion.p
            style={{ opacity: opacity3, y: y3 }}
            className="text-lg md:text-xl text-white/60"
          >
            We don&apos;t show you everyone. We show you who naturally fits.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
