"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { blogPosts } from "@/lib/blog-data";

const categories = ["All", "Dating Tips", "The Science"];

function AnimatedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.65"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const posts = filtered.slice(1);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroOpacity1 = useTransform(heroProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const heroY1 = useTransform(heroProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);
  const heroOpacity2 = useTransform(heroProgress, [0.05, 0.35, 0.65, 0.95], [0, 1, 1, 0]);
  const heroY2 = useTransform(heroProgress, [0.05, 0.35, 0.65, 0.95], [40, 0, 0, -40]);

  return (
    <>
      <Header />
      <main>
        {/* ============================================
            HERO
        ============================================ */}
        <section
          ref={heroRef}
          className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 bg-[#0a0a0a]"
        >
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p
                style={{ opacity: heroOpacity1, y: heroY1 }}
                className="text-sm uppercase tracking-widest text-white/40 font-medium mb-4"
              >
                Blog
              </motion.p>
              <motion.h1
                style={{ opacity: heroOpacity2, y: heroY2 }}
                className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Dating Insights
              </motion.h1>
              <motion.p
                style={{ opacity: heroOpacity1, y: heroY1 }}
                className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto"
              >
                Tips, research, and real talk about modern dating and
                compatibility.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ============================================
            CATEGORIES
        ============================================ */}
        <section className="py-4 border-b border-white/[0.06] bg-[#0a0a0a]">
          <div className="container-custom">
            <div className="flex gap-2 overflow-x-auto pb-1 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === category
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-white/40 hover:text-white/70 border border-transparent hover:border-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            FEATURED POST
        ============================================ */}
        {featured && (
        <section className="py-10 sm:py-16 bg-[#0a0a0a]">
          <div className="container-custom">
            <AnimatedCard key={featured.slug}>
              <Link
                href={`/blog/${featured.slug}`}
                className="block group"
              >
                <div className="relative rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Featured Image */}
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    {/* Content */}
                    <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-white/[0.08] text-white/50 border border-white/[0.08] w-fit mb-4">
                        {featured.category}
                      </span>
                      <h2 className="font-[var(--font-playfair)] text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-white/80 transition-colors leading-tight">
                        {featured.title}
                      </h2>
                      <p className="text-white/40 text-sm sm:text-base mb-5 leading-relaxed line-clamp-3">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-white/30">
                        <span>{featured.author}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{featured.date}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{featured.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          </div>
        </section>
        )}

        {/* ============================================
            ALL POSTS GRID
        ============================================ */}
        {posts.length > 0 && (
        <section className="py-8 sm:py-12 bg-[#0a0a0a]">
          <div className="container-custom">
            <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {posts.map((post) => (
                <AnimatedCard key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group h-full"
                  >
                    <div className="h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                      {/* Post Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      {/* Content */}
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
                </AnimatedCard>
              ))}
            </motion.div>
            </AnimatePresence>
          </div>
        </section>
        )}

        {/* ============================================
            CTA
        ============================================ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#000]">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to find your match?
              </h2>
              <p className="text-white/40 mb-8">
                Experience science-based compatibility matching.
              </p>
              <Link
                href="/apply"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Apply for Access
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
