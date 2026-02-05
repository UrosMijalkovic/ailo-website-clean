import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "AILO Duo - Test Your Compatibility",
  description:
    "Already dating someone? See if you're truly compatible. AILO Duo reveals the science behind your connection.",
};

const features = [
  {
    title: "Two Assessments",
    description: "Both of you complete AILO's compatibility assessment",
  },
  {
    title: "Compatibility Report",
    description: "See your compatibility score and detailed breakdown",
  },
  {
    title: "Communication Insights",
    description: "Learn how you naturally connect and where you might clash",
  },
  {
    title: "Relationship Roadmap",
    description: "Understand your strengths and growth areas as a couple",
  },
];

const useCases = [
  {
    title: "New Relationships",
    description: "Know if you're truly compatible before you invest more time",
  },
  {
    title: "Serious Dating",
    description: "Discover what makes your connection work — and what to watch for",
  },
  {
    title: "Committed Couples",
    description: "Deepen your understanding and strengthen your bond",
  },
  {
    title: "Considering Marriage",
    description: "Get clarity before making a lifetime commitment",
  },
];

export default function DuoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="tag-gold mb-4">
                For Couples
              </span>
              <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                Are You Actually Compatible?
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Take AILO's compatibility assessment together. Understand your relationship dynamics —
                why you connect, where you might clash, and how to grow stronger.
              </p>
              <a href="#download" className="btn-primary text-lg inline-block">
                Get AILO Duo
              </a>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                What's Included
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="card-teal p-6 text-center">
                  <div className="gold-circle gold-circle-md mx-auto mb-4">
                    <span className="text-[var(--color-text-inverse)] font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section bg-[var(--color-background)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Perfect For Every Stage
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Whether you&apos;re just starting out or years into your relationship
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="card-muted p-6">
                  <h3 className="font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-white/70 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                  How It Works
                </h2>
              </div>
              <div className="space-y-6">
                <div className="card-teal-horizontal p-6 flex items-center gap-6">
                  <div className="gold-circle gold-circle-lg flex-shrink-0">
                    <span className="text-[var(--color-text-inverse)] font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">You Take the Assessment</h3>
                    <p className="text-white/70">Complete AILO's compatibility assessment (7 minutes)</p>
                  </div>
                </div>
                <div className="card-teal-horizontal p-6 flex items-center gap-6">
                  <div className="gold-circle gold-circle-lg flex-shrink-0">
                    <span className="text-[var(--color-text-inverse)] font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Invite Your Partner</h3>
                    <p className="text-white/70">Share a link with the person you want to compare with</p>
                  </div>
                </div>
                <div className="card-teal-horizontal p-6 flex items-center gap-6">
                  <div className="gold-circle gold-circle-lg flex-shrink-0">
                    <span className="text-[var(--color-text-inverse)] font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Get Your Report</h3>
                    <p className="text-white/70">Once both complete, receive your detailed compatibility analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="section bg-[var(--color-background)]">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center">
                <svg className="w-8 h-8 text-[var(--color-accent)]/40 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-white/90 text-lg italic mb-4">
                  &ldquo;We&apos;d been dating for 6 months and everything felt right, but I wanted to be sure.
                  AILO Duo showed us exactly why we work — and the few things to watch for. Best decision we made.&rdquo;
                </p>
                <p className="text-[var(--color-accent)] font-medium">— Rachel & James, Together 2 Years</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="download" className="section bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Test Your Compatibility?
              </h2>
              <p className="text-white/80 mb-8">
                Two assessments. One compatibility report. Zero guesswork.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white text-[var(--color-primary-dark)] font-semibold px-6 py-4 rounded-xl hover:bg-white/90 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
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
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="text-lg font-semibold -mt-1">Google Play</div>
                  </div>
                </a>
              </div>

              <p className="text-white/50 text-sm mt-6">
                Already an AILO member? Duo is included free with your membership.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
