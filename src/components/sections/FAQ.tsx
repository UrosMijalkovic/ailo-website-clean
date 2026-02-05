"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const faqs = [
  {
    question: "How much does AILO cost?",
    answer: "Traditional matchmakers charge $10,000–$50,000+ with no guarantees. AILO is a one-time membership at a fraction of that cost. We'll discuss pricing on your call based on your situation — and once you're in, you keep access for life.",
  },
  {
    question: "How is this different from dating apps?",
    answer: "Dating apps show you everyone nearby and let you swipe based on photos. AILO only shows you people you're 70%+ compatible with based on behavioral science. No swiping, no endless options — just people who actually fit.",
  },
  {
    question: "How does the matching actually work?",
    answer: "You take a 7-minute assessment based on 30 years of behavioral research. We measure 6 compatibility markers — how you communicate under stress, your core needs, conflict tolerance, decision-making style, energy levels, and worldview. Then we match you with people whose patterns complement yours.",
  },
  {
    question: "What if I don't get any matches?",
    answer: "Our member base is growing every month in South Florida. If you're in an area with fewer members, we'll be transparent about that on your call. We'd rather tell you to wait than waste your time.",
  },
  {
    question: "Is AILO only in South Florida?",
    answer: "Currently, yes. We're focused on building a quality community in South Florida (Palm Beach, Broward, Miami-Dade) before expanding. Join the waitlist if you're outside this area — you'll get priority access when we launch in your city.",
  },
  {
    question: "How long until I get my first match?",
    answer: "We don't rush matches. Dating apps trained people to expect instant results — that's exactly why they fail. We wait until there's a genuine 70%+ compatibility fit. It might take time. That's the point. We'd rather you wait for the right person than waste time on the wrong ones.",
  },
  {
    question: "Is my data private?",
    answer: "Yes. Your assessment results and personal information are never shared publicly. Match insights are only visible to you and your matched members. We don't sell data, ever.",
  },
  {
    question: "What is AILO Duo?",
    answer: (<>AILO Duo works two ways. <strong className="text-white">For singles:</strong> test compatibility with someone you&apos;re curious about — send them a code, both take the assessment, see your match. <strong className="text-white">For couples:</strong> understand your relationship dynamics, where you connect, where you clash, and how to grow together. Think of it as relationship intelligence — whether you&apos;re just starting out or years in.</>),
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create staggered transforms for each FAQ item
  const faqTransforms = faqs.map((_, index) => {
    const start = index * 0.03;
    const end = start + 0.15;
    return {
      opacity: useTransform(scrollYProgress, [start, end, 0.7, 0.85], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [start, end, 0.7, 0.85], [60, 0, 0, -30])
    };
  });

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50">
              Everything you need to know before applying.
            </p>
          </div>

          {/* FAQ Items */}
          <div ref={containerRef} className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                style={{
                  opacity: faqTransforms[index].opacity,
                  y: faqTransforms[index].y
                }}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white/5 hover:bg-white/8 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-white/60 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
