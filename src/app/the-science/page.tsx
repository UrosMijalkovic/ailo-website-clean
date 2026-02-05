import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "The Science",
  description:
    "30 years of behavioral research. One breakthrough methodology. US Patent #8556630B2.",
};

const compatibilityMarkers = [
  {
    name: "Physical Traits",
    description: "Your natural traits that determine how you show up in the world",
    examples: "Regal, Energetic, Absorptive, Perceptive, Effervescent",
  },
  {
    name: "Motivators",
    description: "What drives you — what must be fed and honored for you to thrive",
    examples: "Perseverance, Aesthetic Sensibility, Achievement",
  },
  {
    name: "Tolerance",
    description: "Your boundaries — what you can and can't tolerate in a partner",
    examples: "High, Medium, Low tolerance profiles",
  },
  {
    name: "Communication",
    description: "How you relate, connect, and process information",
    examples: "Intellectual, Moving, Emotional, Instinctual",
  },
  {
    name: "Perception",
    description: "Whether you see what's working or not working first",
    examples: "Optimistic, Realistic, Critical",
  },
  {
    name: "Energy Level",
    description: "How much physical and emotional energy you bring to relationships",
    examples: "High, Medium, Steady",
  },
];

const assessmentDimensions = [
  {
    name: "Perception",
    description: "How you see yourself",
  },
  {
    name: "Reality",
    description: "How you actually show up",
  },
  {
    name: "Expression",
    description: "How others experience you",
  },
];

export default function TheSciencePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-hero section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              {/* Patent Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <svg
                  className="w-4 h-4 text-[var(--color-accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-white/80">
                  US Patent #8556630B2
                </span>
              </div>

              <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                The Science Behind Compatibility
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                30 years of behavioral research. One breakthrough methodology.
              </p>
            </div>
          </div>
        </section>

        {/* The Research */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)] mb-6">
                    The Research
                  </h2>
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    Dr. Zannah Hackett spent 30 years studying human nature and
                    relationship dynamics. Her work, &ldquo;The Natural Mathematics of
                    Man,&rdquo; became the foundation for AILO.
                  </p>
                  <p className="text-[var(--color-primary)] font-medium italic">
                    &ldquo;Compatibility isn&apos;t about shared interests. It&apos;s about how
                    two people&apos;s natural traits interact.&rdquo;
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-40 h-40 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <svg className="w-20 h-20 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Compatibility Markers */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)] mb-4">
                  The 6 Compatibility Markers
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Based on decades of behavioral research
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {compatibilityMarkers.map((marker, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                  >
                    <div className="text-3xl mb-4">{index + 1}</div>
                    <h3 className="font-semibold text-[var(--color-primary-dark)] mb-2">
                      {marker.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                      {marker.description}
                    </p>
                    <p className="text-xs text-[var(--color-accent)] font-medium">
                      Examples: {marker.examples}
                    </p>
                  </div>
                ))}
              </div>

              {/* Emotional Hook - What This Means */}
              <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-2xl p-6 md:p-8 mt-10 text-center">
                <h3 className="font-[var(--font-playfair)] text-xl md:text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                  What This Means For You
                </h3>
                <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                  Instead of discovering incompatibilities after 6 months of dating,
                  AILO reveals them <span className="font-semibold text-[var(--color-primary)]">before your first conversation</span>.
                  No more wasted time. No more &ldquo;it just didn&apos;t work out.&rdquo;
                </p>
              </div>

              {/* Science-Backed Testimonial */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 mt-6 text-center shadow-sm">
                <p className="text-[var(--color-text-secondary)] italic mb-3">
                  &ldquo;The compatibility breakdown predicted exactly what happened in our relationship —
                  8 months later, we&apos;re still together and it all makes sense.&rdquo;
                </p>
                <p className="text-[var(--color-accent)] text-sm font-medium">— Jennifer L., AILO Member</p>
              </div>
            </div>
          </div>
        </section>

        {/* How the Assessment Works */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)] mb-4">
                  How the Assessment Works
                </h2>
                <p className="text-lg text-[var(--color-text-secondary)]">
                  The AILO Discovery Assessment measures three dimensions:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {assessmentDimensions.map((dimension, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-[var(--color-surface)] rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center mx-auto mb-4 font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-[var(--color-primary-dark)] mb-1">
                      {dimension.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {dimension.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-center text-[var(--color-primary)] font-medium">
                In 7 minutes, we capture what takes years to discover through
                dating.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Credentials */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)]">
                  The Team Behind the Science
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Dr. Zannah */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                    <Image
                      src="/images/gallery/drzannah.jpg"
                      alt="Dr. Zannah Hackett"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-[var(--color-primary-dark)] text-center mb-2">
                    Dr. Zannah Hackett
                  </h3>
                  <p className="text-[var(--color-muted)] text-center mb-4">
                    Chief Science Officer
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">•</span>
                      30 years researching human nature
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">•</span>
                      Creator of The Natural Mathematics of Man
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">•</span>
                      Founder of Y.O.U. Institute
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">•</span>
                      CA Board of Behavioral Sciences approved
                    </li>
                  </ul>
                </div>

                {/* Haleh */}
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                    <Image
                      src="/images/gallery/haleh.jpg"
                      alt="Haleh Gianni"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-[var(--color-primary-dark)] text-center mb-2">
                    Haleh Gianni
                  </h3>
                  <p className="text-[var(--color-muted)] text-center mb-4">
                    CEO & Founder
                  </p>
                  <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">•</span>
                      15 years as relationship coach
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">•</span>
                      Trained in the Y.O.U. methodology
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">•</span>
                      10+ years in systems engineering
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">•</span>
                      Built the dating service she wished existed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to discover your compatibility profile?
              </h2>
              <Link href="/apply" className="btn-primary text-lg">
                See If You Qualify
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
