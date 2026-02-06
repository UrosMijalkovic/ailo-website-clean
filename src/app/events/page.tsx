"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { copy } from "@/lib/copy";

const c = copy.events;

// Event photos with orientation info - SEO optimized alt text
const eventPhotos = [
  { src: "/images/events/Soft launch party.jpg", alt: "AILO soft launch party - exclusive singles event in South Florida", orientation: "portrait" },
  { src: "/images/events/Soft launch party people.jpg", alt: "AILO members socializing at exclusive matchmaking event", orientation: "landscape" },
  { src: "/images/events/IMG_0023.jpg", alt: "AILO community gathering - premium dating event Miami", orientation: "portrait" },
  { src: "/images/events/IMG_0027.jpg", alt: "Singles networking at AILO exclusive member event", orientation: "portrait" },
  { src: "/images/events/IMG_0028.jpg", alt: "AILO matchmaking event - meeting like-minded singles", orientation: "portrait" },
  { src: "/images/events/IMG_0040.jpg", alt: "AILO members connecting at South Florida singles event", orientation: "portrait" },
  { src: "/images/events/IMG_0041.jpg", alt: "Exclusive AILO dating event for professionals", orientation: "portrait" },
  { src: "/images/events/IMG_0047.jpg", alt: "AILO community mixer - real connections in person", orientation: "portrait" },
  { src: "/images/events/IMG_0056.jpg", alt: "AILO members at premium matchmaking gathering", orientation: "landscape" },
  { src: "/images/events/IMG_0058.jpg", alt: "Singles event hosted by AILO in South Florida", orientation: "portrait" },
  { src: "/images/events/IMG_0068.jpg", alt: "AILO exclusive member event - quality singles networking", orientation: "portrait" },
  { src: "/images/events/IMG_0069.jpg", alt: "AILO community celebration - where connections begin", orientation: "portrait" },
  { src: "/images/events/IMG_0039.JPG", alt: "AILO members having meaningful conversations at singles event", orientation: "portrait" },
];

function AnimatedPhoto({
  photo,
  index,
  openGallery,
  className = "",
  sizes,
  priority = false,
}: {
  photo: (typeof eventPhotos)[number];
  index: number;
  openGallery: (i: number) => void;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.65"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      onClick={() => openGallery(index)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes={sizes}
        priority={priority}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </motion.div>
  );
}

export default function EventsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gallery navigation
  const openGallery = (index: number) => setSelectedImage(index);
  const closeGallery = () => setSelectedImage(null);
  const nextImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % eventPhotos.length);
    }
  }, [selectedImage]);
  const prevImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + eventPhotos.length) % eventPhotos.length);
    }
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, nextImage, prevImage]);

  // Prevent body scroll when gallery is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedImage]);

  // Header scroll animation
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });

  const headerOpacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const headerY1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);
  const headerOpacity2 = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.95], [0, 1, 1, 0]);
  const headerY2 = useTransform(scrollYProgress, [0.05, 0.35, 0.65, 0.95], [40, 0, 0, -40]);
  const headerOpacity3 = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
  const headerY3 = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [40, 0, 0, -40]);

  return (
    <>
      <Header />
      <main>
        {/* ============================================
            SECTION 1: HEADER (Brief, Powerful)
        ============================================ */}
        <section
          ref={headerRef}
          className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 bg-[#0a0a0a]"
        >
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              {/* Label */}
              <motion.p
                style={{ opacity: headerOpacity1, y: headerY1 }}
                className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium mb-4"
              >
                {c.header.label}
              </motion.p>

              {/* Headline */}
              <motion.h1
                style={{ opacity: headerOpacity2, y: headerY2 }}
                className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                {c.header.headline}
              </motion.h1>

              {/* Subhead */}
              <motion.p
                style={{ opacity: headerOpacity3, y: headerY3 }}
                className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
              >
                {c.header.subhead}
              </motion.p>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 2: PHOTO GALLERY (Custom Bento Grid)
        ============================================ */}
        <section className="py-8 sm:py-12 md:py-16 bg-[#0a0a0a]">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {/* Row 1: Landscape wide + 2 portraits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <AnimatedPhoto photo={eventPhotos[1]} index={1} openGallery={openGallery} className="col-span-2 aspect-[3/2]" sizes="(max-width: 768px) 100vw, 50vw" priority />
                <AnimatedPhoto photo={eventPhotos[0]} index={0} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
                <AnimatedPhoto photo={eventPhotos[2]} index={2} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>

              {/* Row 2: 4 portraits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <AnimatedPhoto photo={eventPhotos[3]} index={3} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
                <AnimatedPhoto photo={eventPhotos[4]} index={4} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
                <AnimatedPhoto photo={eventPhotos[5]} index={5} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
                <AnimatedPhoto photo={eventPhotos[6]} index={6} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>

              {/* Row 3: 2 portraits + Landscape wide */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <AnimatedPhoto photo={eventPhotos[7]} index={7} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
                <AnimatedPhoto photo={eventPhotos[9]} index={9} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
                <AnimatedPhoto photo={eventPhotos[8]} index={8} openGallery={openGallery} className="col-span-2 aspect-[3/2]" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>

              {/* Row 4: 2 portraits + 1 landscape */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <AnimatedPhoto photo={eventPhotos[10]} index={10} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
                <AnimatedPhoto photo={eventPhotos[11]} index={11} openGallery={openGallery} className="aspect-[3/4]" sizes="(max-width: 768px) 50vw, 25vw" />
                <AnimatedPhoto photo={eventPhotos[12]} index={12} openGallery={openGallery} className="col-span-2 aspect-[3/2]" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3: CTA (Join Community)
        ============================================ */}
        <section className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#000]">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {c.cta.headline}
              </h2>
              <p className="text-lg text-white/60 mb-10">{c.cta.subhead}</p>

              <Link
                href="/apply"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                {c.cta.button}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Gallery */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            onClick={closeGallery}
          >
            {/* Backdrop with heavy blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

            {/* Close button - floating top right */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={closeGallery}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Image counter - floating top left */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1 }}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white/50 text-xs tracking-wide"
            >
              {selectedImage + 1} / {eventPhotos.length}
            </motion.div>

            {/* Navigation arrows - floating on sides */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-3 sm:left-6 z-10 w-11 h-11 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-3 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 hover:border-white/25 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Image container */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl mx-12 sm:mx-20"
              style={{ height: "78vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
                <Image
                  src={eventPhotos[selectedImage].src}
                  alt={eventPhotos[selectedImage].alt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 95vw, 900px"
                  priority
                />
              </div>
            </motion.div>

            {/* Bottom dot indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.08]"
            >
              {eventPhotos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(i); }}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === selectedImage
                      ? "w-6 h-1.5 bg-white/80"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
