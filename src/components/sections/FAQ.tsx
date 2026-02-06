"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const INITIAL_VISIBLE = 8;

const faqs: { question: string; answer: React.ReactNode }[] = [
  // --- Codebase originals (kept as-is) ---
  {
    question: "What is AILO?",
    answer: "AILO is a dating and relationship compatibility app for people who value privacy, authenticity, and a deeper connection. It's built on authentic intelligence and uses research-backed scientific methodology to match users through compatibility scores, not swipes.",
  },
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
  // --- Show more boundary (8 above) ---
  {
    question: "What is AILO Duo?",
    answer: (<>AILO Duo works two ways. <strong className="text-white">For singles:</strong> test compatibility with someone you&apos;re curious about — send them a code, both take the assessment, see your match. <strong className="text-white">For couples:</strong> understand your relationship dynamics, where you connect, where you clash, and how to grow together. Think of it as relationship intelligence — whether you&apos;re just starting out or years in.</>),
  },
  {
    question: "Why do I need to arrange a call?",
    answer: "Because we want real people. Everyone deserves to be loved and to love — but that only works if the community is genuine. The call lets us vet every member personally. No fake profiles. No AI bots. Just real humans looking for real connection.",
  },
  // --- Unique from live site ---
  {
    question: "Is AILO an AI dating app?",
    answer: "AILO is not just another AI dating app. It combines authentic intelligence — our proprietary, science-based assessment of human nature — with advanced AI tools to create personalized profile previews and compatibility scores. Rather than relying on swipes or algorithms that track your digital behavior, AILO focuses on six fundamental criteria that forecast the potential for a meaningful bond: Magnetism, Connection, Comfort, Perspective, Objectives, and Timing.",
  },
  {
    question: "How does AI intersect with AILO's Authentic Intelligence?",
    answer: "AILO is powered by a proprietary, patented assessment built on over 20 years of research and relationship science. The assessment uncovers essential aspects of human nature, including innate dispositions, personal polarity, tolerance for lifestyle preferences, energy levels, and communication styles. AILO's authentic intelligence model interprets these results and quantifies what those traits require in a relationship for compatibility. AI then enhances this process by personalizing and generating your profile preview.",
  },
  {
    question: "Does AILO guarantee compatibility?",
    answer: "AILO's matching system is based on natural alignment and energetic resonance. While it offers powerful insights, it cannot guarantee romantic compatibility, mutual attraction, emotional connection, or specific outcomes. Relationships are shaped by timing, free will, and individual choices. By engaging with other members, you take full responsibility for your own interactions and experiences.",
  },
  {
    question: "What if I don't like any of my matches?",
    answer: "AILO uses a proprietary matching system based on principles of physics and natural law, rather than traditional methods that rely on algorithms or self-reported likes and dislikes. Because of this, matches may not always align with your conscious \"type.\" Your profile is only shown to people who meet a minimum 70% compatibility threshold. Every introduction is designed to highlight genuine potential.",
  },
  {
    question: "Will my match know if I blocked them?",
    answer: "No. AILO does not notify your match if you block them. Once blocked, you and that person are removed from each other's Match Lounge and will not be rematched in the future.",
  },
  {
    question: "Why do some matches reappear in my Lounge?",
    answer: "Matches may reappear after 30 days if you still share a 70% or higher compatibility score. This feature is intentional — because timing matters, and sometimes a connection that didn't feel right before may feel different later. By resurfacing strong matches, AILO gives you another opportunity to decide whether you'd like to reconnect.",
  },
  {
    question: "How many matches does it take to meet \"the one\"?",
    answer: "There isn't a set number of matches that guarantees success — because love depends on more than just compatibility scores. Life circumstances, such as grieving a loss, career changes, or relocating, can affect someone's availability for a relationship. AILO's assessment is designed for individuals who are healthy, stable, and ready for partnership. When both people are in that space, meaningful connections tend to happen sooner rather than later.",
  },
  {
    question: "Can I edit my profile myself?",
    answer: "Your profile preview is auto-generated from your AILO assessment, so it can't be manually edited. If you feel your preview doesn't fully reflect you, you have the option to regenerate it. You can also restart the assessment at any time if you'd like a refreshed profile that better describes your nature and needs.",
  },
  {
    question: "How often do I need to retake the assessment?",
    answer: "The AILO assessment is designed to reflect your natural dispositions, which don't change often. We recommend retaking it only if you've experienced a big shift in your life or circumstances and feel your profile preview no longer represents you accurately. Otherwise, your original results remain valid.",
  },
  {
    question: "Why can't I screenshot the profile of my match?",
    answer: "To protect the privacy of our members, AILO does not allow screenshots of other people's profiles. Every profile contains personal details and compatibility insights that are meant to stay within the app. However, you can screenshot your own profile and the compatibility breakdown of your matches for your personal reference.",
  },
  {
    question: "How do I know which match is better for me?",
    answer: "Start by looking at the matches with the highest compatibility percentage. This score is an average across six key areas shown in your compatibility screen. Each area highlights a different part of your alignment, giving you a fuller picture of the connection. Together, they reflect where the strongest potential lies for a meaningful relationship.",
  },
  {
    question: "How long does it take to complete the AILO assessment?",
    answer: "The AILO assessment takes about 7–10 minutes to complete. It's important to answer as honestly as you can. We're not matching you based on any single response — each answer is distilled and weighed as part of a larger pattern, giving you a meaningful and accurate picture of compatibility.",
  },
  {
    question: "How do I unmatch with someone?",
    answer: "In your Match Lounge, scroll to the bottom of the profile and tap Unmatch. Once you unmatch, that person will no longer appear in your active matches. However, if your compatibility score remains 70% or higher, they may reappear in your Feed after 30 days, giving you the option to reconnect if the timing feels right.",
  },
  {
    question: "Why are some of the matches not \"my type\"?",
    answer: "Attraction is multi-layered. What you notice at first glance is only one piece of who someone is. AILO encourages you to look beyond surface \"types\" to discover deeper qualities — like energy, values, lifestyle, and communication. Sparks are important, but lasting love often comes from compatibility that goes further than first impressions.",
  },
];

// JSON-LD structured data for all FAQs (plain text only, no JSX)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: typeof faq.answer === "string" ? faq.answer : faq.question === "What is AILO Duo?" ? "AILO Duo works two ways. For singles: test compatibility with someone you're curious about — send them a code, both take the assessment, see your match. For couples: understand your relationship dynamics, where you connect, where you clash, and how to grow together. Think of it as relationship intelligence — whether you're just starting out or years in." : "",
    },
  })),
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_VISIBLE);

  // Track scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create staggered transforms for initial visible items
  const faqTransforms = faqs.slice(0, INITIAL_VISIBLE).map((_, index) => {
    const start = index * 0.03;
    const end = start + 0.15;
    return {
      opacity: useTransform(scrollYProgress, [start, end, 0.7, 0.85], [0, 1, 1, 0]),
      y: useTransform(scrollYProgress, [start, end, 0.7, 0.85], [60, 0, 0, -30])
    };
  });

  return (
    <section className="relative py-12 sm:py-20 md:py-32 bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
            {visibleFaqs.map((faq, index) => {
              const isInitial = index < INITIAL_VISIBLE;
              const Wrapper = isInitial ? motion.div : "div" as unknown as typeof motion.div;
              const motionProps = isInitial
                ? { style: { opacity: faqTransforms[index].opacity, y: faqTransforms[index].y } }
                : {};

              return (
                <Wrapper
                  key={index}
                  {...motionProps}
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
                </Wrapper>
              );
            })}
          </div>

          {/* Show More / Show Less */}
          {!showAll && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-colors"
              >
                Show all {faqs.length} questions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
          {showAll && (
            <div className="text-center mt-8">
              <button
                onClick={() => {
                  setShowAll(false);
                  setOpenIndex(null);
                }}
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-colors"
              >
                Show less
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
