"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { copy } from "@/lib/copy";

const c = copy.duo;

const stepImages = [
  {
    src: "/images/DUO/Duo 2.png",
    alt: "AILO Duo - Take the compatibility assessment",
  },
  {
    src: "/images/DUO/Duo 1.png",
    alt: "AILO Duo - Invite your partner",
  },
  {
    src: "/images/DUO/Duo 3.png",
    alt: "AILO Duo - Get your compatibility report",
  },
];

const STEP_DURATION = 5000;

export default function DuoPage() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const bridgeRef = useRef<HTMLDivElement>(null);
  const occasionsBannerRef = useRef<HTMLDivElement>(null);
  const whatYouGetBannerRef = useRef<HTMLDivElement>(null);
  const whatYouGetCardsRef = useRef<HTMLDivElement>(null);

  // Bridge scroll animation (staggered opacity + y)
  const { scrollYProgress: bridgeProgress } = useScroll({
    target: bridgeRef,
    offset: ["start end", "end start"],
  });
  const bridgeOpacity1 = useTransform(bridgeProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const bridgeY1 = useTransform(bridgeProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);
  const bridgeOpacity2 = useTransform(bridgeProgress, [0.05, 0.35, 0.65, 0.95], [0, 1, 1, 0]);
  const bridgeY2 = useTransform(bridgeProgress, [0.05, 0.35, 0.65, 0.95], [40, 0, 0, -40]);
  const bridgeOpacity3 = useTransform(bridgeProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const bridgeY3 = useTransform(bridgeProgress, [0.1, 0.4, 0.6, 0.9], [40, 0, 0, -40]);

  // Occasions banner scroll animation (scale + opacity)
  const { scrollYProgress: occasionsProgress } = useScroll({
    target: occasionsBannerRef,
    offset: ["start end", "start center"],
  });
  const occasionsScale = useTransform(occasionsProgress, [0, 1], [0.85, 1]);
  const occasionsOpacity = useTransform(occasionsProgress, [0, 0.5], [0.6, 1]);

  // WhatYouGet banner scroll animation (scale + opacity)
  const { scrollYProgress: whatYouGetProgress } = useScroll({
    target: whatYouGetBannerRef,
    offset: ["start end", "start center"],
  });
  const whatYouGetScale = useTransform(whatYouGetProgress, [0, 1], [0.85, 1]);
  const whatYouGetOpacity = useTransform(whatYouGetProgress, [0, 0.5], [0.6, 1]);

  // WhatYouGet cards scroll animation (staggered scale + opacity + y)
  const { scrollYProgress: cardsProgress } = useScroll({
    target: whatYouGetCardsRef,
    offset: ["start end", "start center"],
  });
  const cardOpacity0 = useTransform(cardsProgress, [0, 0.4], [0, 1]);
  const cardY0 = useTransform(cardsProgress, [0, 0.4], [60, 0]);
  const cardScale0 = useTransform(cardsProgress, [0, 0.4], [0.9, 1]);
  const cardOpacity1 = useTransform(cardsProgress, [0.1, 0.5], [0, 1]);
  const cardY1 = useTransform(cardsProgress, [0.1, 0.5], [60, 0]);
  const cardScale1 = useTransform(cardsProgress, [0.1, 0.5], [0.9, 1]);
  const cardOpacity2 = useTransform(cardsProgress, [0.2, 0.6], [0, 1]);
  const cardY2 = useTransform(cardsProgress, [0.2, 0.6], [60, 0]);
  const cardScale2 = useTransform(cardsProgress, [0.2, 0.6], [0.9, 1]);
  const cardOpacity3 = useTransform(cardsProgress, [0.3, 0.7], [0, 1]);
  const cardY3 = useTransform(cardsProgress, [0.3, 0.7], [60, 0]);
  const cardScale3 = useTransform(cardsProgress, [0.3, 0.7], [0.9, 1]);

  // Auto-advance steps
  useEffect(() => {
    if (isPaused) return;
    setAnimKey((k) => k + 1);
    const timeout = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % stepImages.length);
    }, STEP_DURATION);
    return () => clearTimeout(timeout);
  }, [activeStep, isPaused]);

  const handlePrev = useCallback(() => {
    setActiveStep((prev) => (prev === 0 ? stepImages.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveStep((prev) => (prev === stepImages.length - 1 ? 0 : prev + 1));
  }, []);

  // Double the occasions for marquee
  const doubledOccasions = [...c.occasions.items, ...c.occasions.items];

  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: HERO (Video Background)
        ============================================ */}
        <section className="relative h-[100svh] min-h-[560px] md:h-[85vh] md:min-h-[600px] flex items-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/video/duo-hero-poster.jpg"
              preload="metadata"
              aria-label="Couple enjoying time together - AILO Duo compatibility assessment"
              className="absolute inset-0 w-full h-full object-cover object-center blur-[2px] scale-105"
            >
              <source src="/video/duo-hero-optimized.mp4" type="video/mp4" />
            </video>
            {/* Base overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Gradient - dark bottom for section transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
          </div>

          <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <span className="text-sm text-white/80">{c.hero.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {c.hero.headline}
              </h1>

              {/* Subhead */}
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                {c.hero.subhead}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 px-4 sm:px-0">
                <a
                  href="#download"
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
                >
                  {c.hero.ctaPrimary}
                </a>
                <a
                  href="#how-it-works"
                  className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
                >
                  {c.hero.ctaSecondary}
                </a>
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

        {/* ============================================
            SECTION 2: BRIDGE (Staggered Text Animation)
        ============================================ */}
        <section ref={bridgeRef} className="relative pt-12 sm:pt-16 md:pt-28 pb-10 sm:pb-14 md:pb-20 bg-[#0a0a0a]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              {/* Line 1: Positioning */}
              <motion.p
                style={{ opacity: bridgeOpacity1, y: bridgeY1 }}
                className="text-lg md:text-xl text-[var(--color-accent)] font-medium mb-4"
              >
                {c.bridge.line1}
              </motion.p>

              {/* Line 2: Punch line */}
              <motion.p
                style={{ opacity: bridgeOpacity2, y: bridgeY2 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3"
              >
                {c.bridge.line2}
              </motion.p>

              {/* Line 3: Value statement */}
              <motion.p
                style={{ opacity: bridgeOpacity3, y: bridgeY3 }}
                className="text-lg md:text-xl text-white/60"
              >
                {c.bridge.line3}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3: OCCASIONS (Image Banner + Marquee Cards)
        ============================================ */}
        <section className="pt-8 sm:pt-12 md:pt-16 bg-[#0a0a0a]">
          <div className="container-custom" ref={occasionsBannerRef}>
            {/* Animated image banner */}
            <motion.div
              className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[2431/900]"
              style={{
                scale: occasionsScale,
                opacity: occasionsOpacity,
              }}
            >
              {/* Background Image */}
              <Image
                src="/images/DUO/duo-banner.jpg"
                alt="AILO Duo - Compatibility assessment for couples"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                className="object-cover"
                priority
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content centered over image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-3xl mx-auto text-center px-6">
                  {/* Label */}
                  <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-3">
                    {c.occasions.label}
                  </p>
                  {/* Headline */}
                  <h2 className="font-[var(--font-playfair)] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Use Duo At Any Stage
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Occasions Marquee - Overlapping banner */}
          <div className="relative -mt-8 sm:-mt-12 md:-mt-16 z-10">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-64 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-64 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            {/* Scrolling container */}
            <div className="overflow-hidden">
              <div className="flex gap-4 sm:gap-6 animate-marquee-slow hover:pause-animation">
                {doubledOccasions.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] rounded-xl p-4 sm:p-5 border backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-white/10 border-white/20"
                  >
                    <h3 className="text-sm sm:text-base font-semibold mb-1.5 leading-snug text-white/90">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient transition to next section */}
          <div className="h-12 sm:h-16 md:h-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]" />
        </section>

        {/* ============================================
            SECTION 4: HOW IT WORKS (Screenshot Carousel)
        ============================================ */}
        <section id="how-it-works" className="relative py-12 sm:py-20 md:py-32 bg-[#111]">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-4">
                {c.howItWorks.label}
              </p>
              <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Three Simple Steps
              </h2>
            </div>

            {/* Two Column: Steps + Screenshots */}
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center max-w-6xl mx-auto">
              {/* Left: Steps */}
              <div>
                <div
                  className="space-y-8"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {c.howItWorks.steps.map((step, index) => {
                    const isActive = activeStep === index;
                    return (
                      <div
                        key={index}
                        className="flex gap-6 cursor-pointer"
                        onMouseEnter={() => setActiveStep(index)}
                        onClick={() => setActiveStep(index)}
                      >
                        <div className="flex-shrink-0">
                          <span
                            className={`block text-4xl md:text-5xl font-bold transition-colors duration-300 ${
                              isActive ? "text-[var(--color-accent)]/40" : "text-white/10"
                            }`}
                          >
                            {step.number}
                          </span>
                        </div>
                        <div className="pt-2">
                          <h3
                            className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                              isActive ? "text-[var(--color-accent)]" : "text-white"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={`leading-relaxed transition-colors duration-300 ${
                              isActive ? "text-white/70" : "text-white/50"
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Screenshot with Arrows */}
              <div className="flex items-center justify-center lg:justify-end gap-4 mb-8 lg:mb-0">
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors flex-shrink-0"
                  aria-label="Previous screenshot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Image Container + Progress */}
                <div>
                  <div className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/16]">
                    {stepImages.map((img, index) => (
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                        className={`object-contain object-center drop-shadow-2xl transition-opacity duration-300 ${
                          activeStep === index ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  ))}
                  </div>
                  <div className="mt-4 h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div
                      key={animKey}
                      className="h-full bg-[var(--color-accent)]/40 rounded-full"
                      style={{
                        animation: `progressFill ${STEP_DURATION}ms linear forwards`,
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    />
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors flex-shrink-0"
                  aria-label="Next screenshot"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 5: WHAT YOU GET (Image Banner + Cards)
        ============================================ */}
        <section className="pt-8 sm:pt-12 md:pt-16 bg-[#111]">
          <div className="container-custom" ref={whatYouGetBannerRef}>
            {/* Animated image banner */}
            <motion.div
              className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[2431/900]"
              style={{
                scale: whatYouGetScale,
                opacity: whatYouGetOpacity,
              }}
            >
              {/* Background Image */}
              <Image
                src="/images/DUO/duo-cta.jpg"
                alt="AILO Duo - Understand your relationship"
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
                    {c.whatYouGet.label}
                  </p>
                  {/* Headline */}
                  <h2 className="font-[var(--font-playfair)] text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Clarity for Your Relationship
                  </h2>
                </div>
              </div>
            </motion.div>
          </div>

          {/* What You Get Cards - Overlapping banner */}
          <div ref={whatYouGetCardsRef} className="relative -mt-8 sm:-mt-12 md:-mt-16 z-10">
            <div className="container-custom">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {c.whatYouGet.items.map((item, index) => {
                  const opacities = [cardOpacity0, cardOpacity1, cardOpacity2, cardOpacity3];
                  const ys = [cardY0, cardY1, cardY2, cardY3];
                  const scales = [cardScale0, cardScale1, cardScale2, cardScale3];
                  return (
                    <motion.div
                      key={index}
                      style={{
                        opacity: opacities[index],
                        y: ys[index],
                        scale: scales[index],
                      }}
                      className="flex items-start gap-4 p-5 sm:p-6 rounded-xl border backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-white/10 border-white/20 hover:border-white/30 transition-colors"
                    >
                      {/* Check Icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
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
                        <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Gradient transition to next section */}
          <div className="h-12 sm:h-16 md:h-20 bg-gradient-to-b from-[#111] to-[#0a0a0a]" />
        </section>

        {/* ============================================
            SECTION 6: PRIVACY BANNER
        ============================================ */}
        <section className="py-8 sm:py-10 bg-[#0a0a0a]">
          <div className="container-custom">
            <div className="flex justify-center px-4">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs bg-white/5 border border-white/10 text-white/40 text-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                Duo users are never shown in the matchmaking pool · Your relationship stays private
              </span>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 7: CTA (App Download)
        ============================================ */}
        <section id="download" className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#000]">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {c.cta.headline}
              </h2>
              <p className="text-lg text-white/60 mb-10">{c.cta.subhead}</p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-[var(--color-primary-dark)] font-semibold px-6 py-4 rounded-xl hover:bg-white/90 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Download on the</div>
                    <div className="text-lg font-semibold -mt-1">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-[var(--color-primary-dark)] font-semibold px-6 py-4 rounded-xl hover:bg-white/90 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="text-lg font-semibold -mt-1">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

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
    </>
  );
}
