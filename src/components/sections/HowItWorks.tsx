"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { copy } from "@/lib/copy";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const c = copy.homepage.howItWorks;

// Icons for each compatibility marker
const markerIcons = [
  // Magnetism - magnet/attraction
  <svg key="magnetism" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Connection - people connected
  <svg key="connection" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
  // Comfort - heart/warmth
  <svg key="comfort" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>,
  // Perception - eye/insight
  <svg key="perception" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Objectives - target/goal
  <svg key="objectives" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
  </svg>,
  // Timing - clock
  <svg key="timing" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

const stepImages = [
  {
    src: "/images/gallery/process-phone.png",
    alt: "AILO App - Science-based compatibility assessment for meaningful relationships",
  },
  {
    src: "/images/gallery/needs.png",
    alt: "AILO Needs Analysis - Discover your core relationship needs and values",
  },
  {
    src: "/images/gallery/compatibility.png",
    alt: "AILO Compatibility Match - See how your core needs align with potential partners",
  },
];

const STEP_DURATION = 5000;

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const markersRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: markersRef,
    offset: ["start end", "start center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  useEffect(() => {
    fetch("/animations/dna-helix.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

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

  return (
    <section id="how-it-works" className="relative py-12 sm:py-20 md:py-32 bg-[#111]">
      <div className="container-custom">
        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Compatibility Isn&apos;t a Feeling.<br />It&apos;s a Pattern.
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            {c.subhead}
          </p>
        </div>

        {/* Part 1: The 6 Markers - Solution Zone */}
        <motion.div
          ref={markersRef}
          className="relative mb-16 sm:mb-24 py-10 sm:py-16 px-4 sm:px-8 rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ scale, opacity }}
        >
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.03] rounded-2xl sm:rounded-3xl" />

          {/* DNA Animation Background */}
          {animationData && (
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none min-h-[500px] sm:min-h-0">
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-full h-full max-w-4xl"
              />
            </div>
          )}

          <div className="relative z-10">
            <p className="text-center text-sm sm:text-base uppercase tracking-[0.2em] text-white/40 font-medium mb-10">
              {c.markersLabel}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
              {c.markers.map((marker, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-5 rounded-xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {markerIcons[index]}
                    </span>
                    <div>
                      <h3 className="text-white/90 font-semibold text-sm sm:text-base mb-1">
                        {marker.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {marker.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Part 2: The Process with iPhone */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center max-w-6xl mx-auto mb-12 sm:mb-20">
          {/* Left: Steps */}
          <div>
            <p className="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-8">
              {c.processLabel}
            </p>
            <div
              className="space-y-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {c.steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div
                    key={index}
                    className="flex gap-6 cursor-pointer"
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex-shrink-0">
                      <span className={`block text-4xl md:text-5xl font-bold transition-colors duration-300 ${isActive ? 'text-[var(--color-accent)]/40' : 'text-white/10'}`}>
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isActive ? 'text-[var(--color-accent)]' : 'text-white'}`}>
                        {step.title}
                      </h3>
                      <p className={`leading-relaxed transition-colors duration-300 ${isActive ? 'text-white/70' : 'text-white/50'}`}>
                        {step.description}
                      </p>
                      {/* App badges for first step */}
                      {index === 0 && (
                        <div className="flex items-center gap-3 mt-4">
                          <span className="text-xs text-white/30 uppercase tracking-wide">App Only</span>
                          <div className="flex items-center gap-2">
                            {/* iOS icon */}
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                              <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                              </svg>
                            </div>
                            {/* Android icon */}
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                              <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.523 15.341c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m-11.046 0c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91m11.4-6.12l1.99-3.45c.11-.19.04-.43-.15-.54-.19-.11-.43-.04-.54.15l-2.02 3.5C15.47 8.08 13.8 7.58 12 7.58s-3.47.5-5.15 1.31l-2.02-3.5c-.11-.19-.35-.26-.54-.15-.19.11-.26.35-.15.54l1.99 3.45C3.26 10.74 1.5 13.5 1.5 16.64h21c0-3.14-1.76-5.9-4.63-7.42"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: App Screenshot with Arrows */}
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
              <div className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[3/4.5]">
                {stepImages.map((img, index) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                    className={`object-contain object-center drop-shadow-2xl transition-opacity duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
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

        {/* Reveal statement */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-2xl md:text-3xl text-white/40 mb-2">
            {c.reveal}
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-white mb-8 sm:mb-12">
            {c.revealAccent}
          </p>

          {/* CTA */}
          <Link href="/apply" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
