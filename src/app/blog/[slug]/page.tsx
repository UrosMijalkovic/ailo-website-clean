"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  type BlogSection,
  type BlogFAQ,
} from "@/lib/blog-data";

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.75"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [30, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
}

function FAQItem({ faq }: { faq: BlogFAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
      >
        <span className="text-white/80 font-medium text-sm sm:text-base pr-4">
          {faq.question}
        </span>
        <svg
          className={`w-4 h-4 text-white/30 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-white/40 text-sm leading-relaxed pb-4">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
}

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="font-[var(--font-playfair)] text-xl sm:text-2xl font-bold text-white mt-10 mb-4"
        >
          {section.content}
        </h2>
      );
    case "subheading":
      return (
        <h3
          key={index}
          className="text-lg font-semibold text-white/90 mt-6 mb-3"
        >
          {section.content}
        </h3>
      );
    case "paragraph":
      return (
        <p
          key={index}
          className="text-white/50 text-base leading-[1.8] mb-4"
        >
          {section.content}
        </p>
      );
    case "list":
      return (
        <ul
          key={index}
          className="space-y-2 mb-5 ml-1"
        >
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2.5" />
              <span className="text-white/50 text-base leading-[1.8]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-32 pb-20 bg-[#0a0a0a] min-h-screen">
          <div className="container-custom text-center">
            <h1 className="font-[var(--font-playfair)] text-3xl font-bold text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-white/50 mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="text-white/60 hover:text-white transition-colors text-sm"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: { "@type": "Person", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "AILO",
              url: "https://ailoapp.com",
            },
            datePublished: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://ailoapp.com/blog/${post.slug}`,
            },
          }),
        }}
      />
      <main>
        {/* ============================================
            HERO IMAGE
        ============================================ */}
        <div
          ref={heroRef}
          className="relative h-[50vh] sm:h-[60vh] overflow-hidden"
        >
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </div>

        {/* ============================================
            ARTICLE HEADER
        ============================================ */}
        <article className="relative bg-[#0a0a0a]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto -mt-16 sm:-mt-20 relative z-10">
              {/* Back link */}
              <Link
                href="/blog"
                className="flex items-center gap-1.5 text-white/30 hover:text-white/60 transition-colors text-sm mb-6 w-fit"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>

              {/* Category */}
              <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-white/[0.06] text-white/40 border border-white/[0.06] mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-3 text-sm text-white/30 pb-8 border-b border-white/[0.06]">
                <span>{post.author}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{post.readTime}</span>
              </div>

              {/* ============================================
                  ARTICLE CONTENT
              ============================================ */}
              <div className="py-8 sm:py-12">
                {post.sections.map((section, index) => (
                  <AnimatedSection key={index}>
                    {renderSection(section, index)}
                  </AnimatedSection>
                ))}
              </div>

            </div>
          </div>
        </article>

        {/* ============================================
            RELATED POSTS
        ============================================ */}
        <section className="py-12 sm:py-20 bg-[#0a0a0a]">
          <div className="container-custom">
            <h2 className="font-[var(--font-playfair)] text-xl sm:text-2xl font-bold text-white mb-8 text-center">
              More Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {relatedPosts.map((related) => (
                <AnimatedSection key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="block group h-full"
                  >
                    <div className="h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      <div className="p-5">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium bg-white/[0.06] text-white/40 border border-white/[0.06] mb-2">
                          {related.category}
                        </span>
                        <h3 className="font-semibold text-white text-sm group-hover:text-white/80 transition-colors line-clamp-2 leading-snug">
                          {related.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            FINAL CTA
        ============================================ */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#000]">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to find your match?
              </h2>
              <div className="mb-8" />
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
