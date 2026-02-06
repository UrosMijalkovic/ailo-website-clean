"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { copy } from "@/lib/copy";
import { blogPosts } from "@/lib/blog-data";

const c = copy.theScience;

/* ─── Reusable scroll-reveal block (matches Proof.tsx pattern) ─── */
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

/* ─── Dimension card icons ─── */
const dimensionIcons = [
  // Styles - sparkle/star
  <svg key="styles" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
  </svg>,
  // Features - puzzle
  <svg key="features" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
  </svg>,
  // Alchemy - scale/balance
  <svg key="alchemy" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </svg>,
  // Energy Centers - chat bubbles
  <svg key="energy-centers" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>,
  // Polarity - bolt
  <svg key="polarity" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Energy Pool - battery/signal
  <svg key="energy-pool" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
  </svg>,
];

/* ─── Assessment dimension icons ─── */
const assessmentIcons = [
  // Perception — eye
  <svg key="perception" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Reality — fingerprint
  <svg key="reality" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a48.667 48.667 0 00-1.488 8.01M4.935 16.178A48.148 48.148 0 015.19 12a7.5 7.5 0 0113.267-4.818M14.5 10.5a2.5 2.5 0 10-5 0 48.891 48.891 0 00-1.229 8.208M9.5 10.5a48.276 48.276 0 00-1.316 8.595" />
  </svg>,
  // Expression — signal/broadcast
  <svg key="expression" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>,
];

export default function TheSciencePage() {
  // Refs for scroll animations
  const introBridgeRef = useRef<HTMLDivElement>(null);
  const problemBannerRef = useRef<HTMLDivElement>(null);
  const problemCloserRef = useRef<HTMLDivElement>(null);
  const assessmentRef = useRef<HTMLDivElement>(null);
  const midBannerRef = useRef<HTMLDivElement>(null);
  const ctaBannerRef = useRef<HTMLDivElement>(null);

  // Intro bridge scroll animation (staggered text - same as home Bridge)
  const { scrollYProgress: introBridgeProgress } = useScroll({
    target: introBridgeRef,
    offset: ["start end", "end start"],
  });
  const introOpacity1 = useTransform(introBridgeProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const introY1 = useTransform(introBridgeProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);
  const introOpacity2 = useTransform(introBridgeProgress, [0.05, 0.35, 0.65, 0.95], [0, 1, 1, 0]);
  const introY2 = useTransform(introBridgeProgress, [0.05, 0.35, 0.65, 0.95], [40, 0, 0, -40]);
  const introOpacity3 = useTransform(introBridgeProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const introY3 = useTransform(introBridgeProgress, [0.1, 0.4, 0.6, 0.9], [40, 0, 0, -40]);

  // Problem banner scroll animation (scale + opacity)
  const { scrollYProgress: problemBannerProgress } = useScroll({
    target: problemBannerRef,
    offset: ["start end", "start center"],
  });
  const problemBannerScale = useTransform(problemBannerProgress, [0, 1], [0.85, 1]);
  const problemBannerOpacity = useTransform(problemBannerProgress, [0, 0.5], [0.6, 1]);

  // Mid banner scroll animation (same as problem banner)
  const { scrollYProgress: midBannerProgress } = useScroll({
    target: midBannerRef,
    offset: ["start end", "start center"],
  });
  const midBannerScale = useTransform(midBannerProgress, [0, 1], [0.85, 1]);
  const midBannerOpacity = useTransform(midBannerProgress, [0, 0.5], [0.6, 1]);

  // Problem closer scroll animation
  const { scrollYProgress: problemCloserProgress } = useScroll({
    target: problemCloserRef,
    offset: ["start end", "end start"],
  });
  const problemCloserOpacity = useTransform(problemCloserProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const problemCloserY = useTransform(problemCloserProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);


  // Assessment cards scroll (staggered)
  const { scrollYProgress: assessProgress } = useScroll({
    target: assessmentRef,
    offset: ["start end", "start 0.3"],
  });
  const aCardOpacity0 = useTransform(assessProgress, [0, 0.4], [0, 1]);
  const aCardY0 = useTransform(assessProgress, [0, 0.4], [60, 0]);
  const aCardScale0 = useTransform(assessProgress, [0, 0.4], [0.9, 1]);
  const aCardOpacity1 = useTransform(assessProgress, [0.1, 0.5], [0, 1]);
  const aCardY1 = useTransform(assessProgress, [0.1, 0.5], [60, 0]);
  const aCardScale1 = useTransform(assessProgress, [0.1, 0.5], [0.9, 1]);
  const aCardOpacity2 = useTransform(assessProgress, [0.2, 0.6], [0, 1]);
  const aCardY2 = useTransform(assessProgress, [0.2, 0.6], [60, 0]);
  const aCardScale2 = useTransform(assessProgress, [0.2, 0.6], [0.9, 1]);

  const assessOpacities = [aCardOpacity0, aCardOpacity1, aCardOpacity2];
  const assessYs = [aCardY0, aCardY1, aCardY2];
  const assessScales = [aCardScale0, aCardScale1, aCardScale2];

  // CTA banner scroll animation (scale + opacity)
  const { scrollYProgress: ctaBannerProgress } = useScroll({
    target: ctaBannerRef,
    offset: ["start end", "start center"],
  });
  const ctaBannerScale = useTransform(ctaBannerProgress, [0, 1], [0.85, 1]);
  const ctaBannerOpacity = useTransform(ctaBannerProgress, [0, 0.5], [0.6, 1]);

  return (
    <>
      <Header />
      <main className="bg-black">
        {/* ═══════════════════════════════════════════
            SECTION 1: HERO (Video Background)
        ═══════════════════════════════════════════ */}
        <section className="relative h-[100svh] min-h-[560px] md:h-[85vh] md:min-h-[600px] flex items-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="The Science behind AILO - Compatibility methodology"
              className="absolute inset-0 w-full h-full object-cover object-center blur-[2px] scale-105"
            >
              <source src="/video/science-hero.mp4" type="video/mp4" />
            </video>
            {/* Base overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Gradient - dark bottom for section transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
          </div>

          <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-3xl mx-auto text-center">
              {/* Patent Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm text-white/80">{c.hero.badge}</span>
              </div>

              <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {c.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-white/60">
                {c.hero.subhead}
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2: INTRO BRIDGE (Staggered Text)
        ═══════════════════════════════════════════ */}
        <section ref={introBridgeRef} className="relative pt-12 sm:pt-16 md:pt-28 pb-10 sm:pb-14 md:pb-20 bg-[#0a0a0a]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              {/* Positioning */}
              <motion.p
                style={{ opacity: introOpacity1, y: introY1 }}
                className="text-lg md:text-xl text-[var(--color-accent)] font-medium mb-4"
              >
                This is the science AILO is built on.
              </motion.p>

              {/* Punch line */}
              <motion.p
                style={{ opacity: introOpacity2, y: introY2 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
              >
                The patterns that predict compatibility are measurable.
              </motion.p>

              {/* Value statement */}
              <motion.p
                style={{ opacity: introOpacity3, y: introY3 }}
                className="text-lg md:text-xl text-white/60"
              >
                We found them. We patented them. Now they work for you.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3: THE PROBLEM (Image Banner + Marquee Cards)
        ═══════════════════════════════════════════ */}
        <section className="pt-8 sm:pt-12 md:pt-16 bg-[#0a0a0a]">
          <div className="container-custom" ref={problemBannerRef}>
            {/* Animated image banner */}
            <motion.div
              className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[2431/900]"
              style={{
                scale: problemBannerScale,
                opacity: problemBannerOpacity,
              }}
            >
              {/* Background Image */}
              <Image
                src="/images/science/problem-science.jpg"
                alt="The problem with traditional matchmaking"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                className="object-cover"
                priority
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content positioned at top */}
              <div className="absolute inset-0 flex items-start justify-center pt-8 sm:pt-12 md:pt-16">
                <div className="max-w-3xl mx-auto text-center px-6">
                  {/* Label */}
                  <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
                    The Problem
                  </p>
                  {/* Headline */}
                  <h2 className="font-[var(--font-playfair)] text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    Modern Dating Wasn&apos;t Designed to Work
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Static Stats Cards - 1/3 on banner, 2/3 below with liquid glass effect */}
          <div className="relative -mt-20 sm:-mt-24 md:-mt-28 z-10">
            <div className="container-custom">
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-5 max-w-[63rem] mx-auto px-2 sm:px-4">
                {c.problem.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="relative group rounded-xl p-4 sm:p-5 overflow-hidden
                      backdrop-blur-2xl
                      bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.01]
                      border border-white/[0.10]
                      shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]
                      hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
                      hover:border-white/[0.18]
                      transition-all duration-500"
                  >
                    {/* Subtle glass shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-60 pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="relative z-10">
                      <div className="text-xl sm:text-2xl font-bold text-[var(--color-accent)] mb-1.5">
                        {stat.value}
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-white/70 mb-1.5">
                        {stat.description}
                      </p>
                      <p className="text-[9px] sm:text-[11px] text-white/35 uppercase tracking-wider">
                        {stat.source}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closer with gradient transition */}
          <div ref={problemCloserRef} className="relative mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
            <div className="container-custom">
              <div className="text-center">
                <motion.p
                  style={{ opacity: problemCloserOpacity, y: problemCloserY }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[var(--font-playfair)] text-[var(--color-accent)] font-medium"
                >
                  {c.problem.closing}
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4: THE METHODOLOGY
        ═══════════════════════════════════════════ */}
        <section className="relative py-12 sm:py-20 md:py-32 bg-[#111]">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
              {/* Left: Text */}
              <AnimatedBlock>
                <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {c.methodology.headline}
                </h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  {c.methodology.body}
                </p>
              </AnimatedBlock>

              {/* Right: Principle card */}
              <AnimatedBlock>
                <div className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] border-l-4 border-l-[var(--color-accent)]">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {c.methodology.principleTitle}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {c.methodology.principleBody}
                  </p>
                </div>
              </AnimatedBlock>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 5: THE 6 DIMENSIONS
        ═══════════════════════════════════════════ */}
        <section className="relative py-12 sm:py-20 md:py-32 bg-[#111]">
          <div className="container-custom">
            <AnimatedBlock className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {c.dimensions.headline}
              </h2>
              <p className="text-lg text-white/50">
                {c.dimensions.subhead}
              </p>
            </AnimatedBlock>

            {/* Dimension cards grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
              {c.dimensions.items.map((dim, index) => (
                <AnimatedBlock
                  key={index}
                  className="group p-5 sm:p-6 rounded-xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] group-hover:text-[var(--color-accent)]/80 transition-colors duration-300">
                      {dimensionIcons[index]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white/90 font-semibold text-base mb-1">
                        {dim.name}
                      </h3>
                      <p className="text-[var(--color-accent)] text-xs uppercase tracking-wide mb-2">
                        {dim.subtitle}
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed mb-2">
                        {dim.description}
                      </p>
                      <p className="text-white/30 text-xs leading-relaxed mb-3">
                        {dim.detail}
                      </p>
                      {/* Type pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {dim.pills.map((pill, pi) => (
                          <span
                            key={pi}
                            className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.06] border border-white/10 text-white/40"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedBlock>
              ))}
            </div>

            {/* CTA */}
            <AnimatedBlock className="text-center mt-12 sm:mt-16">
              <Link href="/apply" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Apply for Access
              </Link>
            </AnimatedBlock>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 6: THE ASSESSMENT
        ═══════════════════════════════════════════ */}
        {/* Gradient: #111 → #0a0a0a */}
        <div className="h-16 sm:h-24 bg-gradient-to-b from-[#111] to-[#0a0a0a]" />

        <section className="relative py-12 sm:py-20 md:py-32 bg-[#0a0a0a]">
          <div className="container-custom">
            <AnimatedBlock className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {c.assessment.headline}
              </h2>
              <p className="text-lg text-white/50">
                {c.assessment.subhead}
              </p>
            </AnimatedBlock>

            {/* 3 Dimension Cards (staggered) */}
            <div ref={assessmentRef} className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
              {c.assessment.dimensions.map((dim, index) => (
                <motion.div
                  key={index}
                  style={{
                    opacity: assessOpacities[index],
                    y: assessYs[index],
                    scale: assessScales[index],
                  }}
                  className="text-center p-6 sm:p-8 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center mx-auto mb-5">
                    {assessmentIcons[index]}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {dim.name}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {dim.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Reveal statement */}
            <AnimatedBlock className="max-w-3xl mx-auto text-center">
              <p className="text-lg sm:text-2xl md:text-3xl text-white/40 mb-2">
                {c.assessment.reveal}
              </p>
              <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-white mb-8 sm:mb-12">
                {c.assessment.revealAccent}
              </p>
              <Link href="/duo" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Try Duo
              </Link>
            </AnimatedBlock>
          </div>
        </section>

        {/* ── Mid banner image ── */}
        <section className="pt-8 sm:pt-12 md:pt-16 bg-[#0a0a0a]">
          <div className="container-custom" ref={midBannerRef}>
            <motion.div
              className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[2431/900]"
              style={{
                scale: midBannerScale,
                opacity: midBannerOpacity,
              }}
            >
              <Image
                src="/images/science/mid.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Gradient: #0a0a0a → #111 */}
        <div className="h-16 sm:h-24 bg-gradient-to-b from-[#0a0a0a] to-[#111]" />

        {/* ═══════════════════════════════════════════
            SECTION 7: RESEARCH & CREDIBILITY
        ═══════════════════════════════════════════ */}
        <section className="relative py-12 sm:py-20 md:py-32 bg-[#111]">
          <div className="container-custom">
            <AnimatedBlock className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                {c.credibility.headline}
              </h2>
            </AnimatedBlock>

            {/* Stats Row */}
            <AnimatedBlock className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 mb-8">
              {c.credibility.stats.map((stat, index) => (
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
                {c.credibility.patent}
              </span>
            </div>

            {/* Institutional Approvals */}
            <AnimatedBlock className="mb-12 sm:mb-16">
              <p className="text-center text-sm uppercase tracking-[0.2em] text-white/30 font-medium mb-8">
                Institutional Approvals
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
                {c.credibility.institutions.map((inst, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-white/15 transition-all duration-300 text-center"
                  >
                    <h4 className="text-white/80 font-medium text-sm mb-1">
                      {inst.name}
                    </h4>
                    <p className="text-white/30 text-xs">
                      {inst.detail}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedBlock>

          </div>
        </section>

        {/* Gradient: #111 → #0a0a0a */}
        <div className="h-12 sm:h-16 bg-gradient-to-b from-[#111] to-[#0a0a0a]" />

        {/* ═══════════════════════════════════════════
            SECTION 8: CTA (Image Banner)
        ═══════════════════════════════════════════ */}
        <section className="pt-4 sm:pt-6 md:pt-8 bg-[#0a0a0a]">
          <div className="container-custom" ref={ctaBannerRef}>
            {/* Animated image banner */}
            <motion.div
              className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[2431/900]"
              style={{
                scale: ctaBannerScale,
                opacity: ctaBannerOpacity,
              }}
            >
              {/* Background Image */}
              <Image
                src="/images/science/cta-science.jpg"
                alt="Begin your compatibility journey"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                className="object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content centered over image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-3xl mx-auto text-center px-6">
                  {/* Label */}
                  <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
                    Take The Next Step
                  </p>
                  {/* Headline */}
                  <h2 className="font-[var(--font-playfair)] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    {c.cta.headline}
                  </h2>
                  {/* CTA Button */}
                  <Link href="/apply" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    {c.cta.button}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

        </section>

        {/* ═══════════════════════════════════════════
            SECTION 9: FURTHER READING (Blog Cards)
        ═══════════════════════════════════════════ */}
        <section className="py-12 sm:py-20 md:py-32 bg-[#0a0a0a]">
          <div className="container-custom">
            <AnimatedBlock className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <p className="text-sm uppercase tracking-widest text-white/40 font-medium mb-3">
                From the Journal
              </p>
              <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Further Reading
              </h2>
            </AnimatedBlock>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
              {blogPosts.slice(0, 3).map((post) => (
                <AnimatedBlock key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group h-full"
                  >
                    <div className="h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      <div className="p-5 sm:p-6">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-white/[0.06] text-white/40 border border-white/[0.06] mb-3">
                          {post.category}
                        </span>
                        <h3 className="font-semibold text-white text-sm sm:text-base mb-2 group-hover:text-white/80 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-white/35 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-white/25">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-white/15" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedBlock>
              ))}
            </div>
          </div>

        </section>

        {/* Gradient transition to footer */}
        <div className="h-16 sm:h-20 md:h-24 bg-gradient-to-b from-[#0a0a0a] to-black" />
      </main>
      <Footer />
    </>
  );
}
