"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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
];

export default function EventsPage() {
  const headerRef = useRef<HTMLDivElement>(null);

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
                {/* Landscape - spans 2 cols */}
                <div className="col-span-2 group relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[1].src}
                    alt={eventPhotos[1].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                {/* Portrait */}
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[0].src}
                    alt={eventPhotos[0].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                {/* Portrait */}
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[2].src}
                    alt={eventPhotos[2].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>

              {/* Row 2: 4 portraits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[3].src}
                    alt={eventPhotos[3].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[4].src}
                    alt={eventPhotos[4].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[5].src}
                    alt={eventPhotos[5].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[6].src}
                    alt={eventPhotos[6].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>

              {/* Row 3: 2 portraits + Landscape wide */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {/* Portrait */}
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[7].src}
                    alt={eventPhotos[7].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                {/* Portrait */}
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[9].src}
                    alt={eventPhotos[9].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                {/* Landscape - spans 2 cols */}
                <div className="col-span-2 group relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[8].src}
                    alt={eventPhotos[8].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>

              {/* Row 4: 2 portraits centered */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="md:col-start-2 group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[10].src}
                    alt={eventPhotos[10].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={eventPhotos[11].src}
                    alt={eventPhotos[11].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SECTION 3: CTA (Join Community)
        ============================================ */}
        <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#000]">
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
    </>
  );
}
