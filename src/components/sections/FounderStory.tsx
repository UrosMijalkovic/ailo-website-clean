import Link from "next/link";
import Image from "next/image";

const journeySteps = [
  {
    label: "The Problem",
    text: "3 years on apps, nothing to show",
  },
  {
    label: "The Discovery",
    text: "Found Dr. Zannah's 30-year research",
  },
  {
    label: "The Insight",
    text: "Science solves what swiping can't",
  },
  {
    label: "The Solution",
    text: "Built the app I needed",
  },
];

export function FounderStory() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="tag-gold mb-4">Meet the Founder</span>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mt-4">
              Why I Built This
            </h2>
          </div>

          {/* Video Placeholder - More prominent */}
          <div className="aspect-video rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden group cursor-pointer">
            {/* Background Image */}
            <Image
              src="/images/gallery/haleh-video-placeholder.jpg"
              alt="Haleh Gianni - Founder of AILO"
              fill
              className="object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-[var(--color-primary)] ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-white font-medium mb-1">
                Watch Haleh&apos;s 3-Minute Story
              </p>
              <p className="text-white/60 text-sm">
                Meet the founder before your call
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center mb-10">
            <p className="text-xl md:text-2xl font-[var(--font-playfair)] text-[var(--color-text-primary)] italic">
              &ldquo;I spent 3 years on dating apps. Zero relationships.
              <br />Then I found the science that actually predicts compatibility.&rdquo;
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="gold-circle gold-circle-sm mx-auto mb-3">
                  <span className="text-xs font-bold text-[var(--color-text-inverse)]">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[var(--color-accent)] mb-1">
                  {step.label}
                </p>
                <p className="text-sm text-white/70">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          {/* Credentials Box */}
          <div className="card-teal p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Haleh Photo */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/gallery/haleh.jpg"
                  alt="Haleh Gianni"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-1">
                  Haleh Gianni
                </h3>
                <p className="text-[var(--color-accent)] text-sm mb-3">
                  CEO & Founder
                </p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• 15 years as relationship coach</li>
                  <li>• Trained in the Y.O.U. methodology</li>
                  <li>• 10+ years in systems engineering</li>
                  <li>• Built the dating service she wished existed</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:text-white transition-colors"
            >
              Apply for Access
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
