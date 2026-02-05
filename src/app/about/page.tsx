import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "About AILO",
  description:
    "Meet the team behind AILO. We built the dating service we wished existed.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-hero section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                We Built the Dating Service We Wished Existed
              </h1>
            </div>
          </div>
        </section>

        {/* Haleh's Story */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/gallery/haleh.jpg"
                      alt="Haleh Gianni"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
                    Haleh&apos;s Story
                  </h2>
                  <div className="space-y-4 text-[var(--color-text-secondary)]">
                    <p>
                      &ldquo;I spent years on dating apps, meeting people who looked
                      great on paper but never felt right. I knew there had to be
                      a better way.&rdquo;
                    </p>
                    <p>
                      &ldquo;Then I met Dr. Zannah and learned about her 30 years of
                      research on human compatibility. Everything clicked.&rdquo;
                    </p>
                    <p>
                      &ldquo;I didn&apos;t build another dating app. I built the one I wish
                      existed — one that shows you who actually fits, not just
                      who&apos;s nearby.&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-[var(--color-surface)] rounded-xl">
                    <h4 className="font-semibold text-[var(--color-primary-dark)] mb-2">
                      Background
                    </h4>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                      <li>• 15 years as relationship coach</li>
                      <li>• Trained in the Y.O.U. methodology</li>
                      <li>• 10+ years as Senior Systems Quality Engineer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Zannah's Story */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 md:order-1">
                  <h2 className="font-[var(--font-playfair)] text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
                    Dr. Zannah&apos;s Story
                  </h2>
                  <div className="space-y-4 text-[var(--color-text-secondary)]">
                    <p>
                      &ldquo;For 30 years, I&apos;ve studied what makes people compatible.
                      Not what they think they want — what actually works.&rdquo;
                    </p>
                    <p>
                      &ldquo;The methodology behind AILO comes from decades of research
                      at Y.O.U. Institute, approved by the California Board of
                      Behavioral Sciences.&rdquo;
                    </p>
                    <p>
                      &ldquo;When Haleh came to me with the vision for AILO, I knew this
                      was the opportunity to bring this science to people who
                      needed it most.&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-xl">
                    <h4 className="font-semibold text-[var(--color-primary-dark)] mb-2">
                      Credentials
                    </h4>
                    <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                      <li>• 30 years researching human nature</li>
                      <li>• Creator of &ldquo;The Natural Mathematics of Man&rdquo;</li>
                      <li>• Founder of Y.O.U. Institute</li>
                      <li>• Curriculum approved by CA Board of Behavioral Sciences</li>
                      <li>• Author, Behaviorist, Educator</li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-1 md:order-2 flex justify-center">
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/gallery/drzannah.jpg"
                      alt="Dr. Zannah Hackett"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="py-8 bg-[var(--color-primary-dark)]">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">200+</p>
                <p className="text-sm text-white/60">Active Members</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">47</p>
                <p className="text-sm text-white/60">Couples Matched</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">30+</p>
                <p className="text-sm text-white/60">Years Research</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-white">12</p>
                <p className="text-sm text-white/60">Events Hosted</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission - Personal Version */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-primary-dark)] mb-6">
                Why We Do This
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-4">
                Every week, we get messages from people who&apos;ve been hurt by dating apps.
                People who&apos;ve wasted years on bad matches. People who are ready to give up.
              </p>
              <p className="text-lg text-[var(--color-primary)] font-medium">
                We built AILO because everyone deserves to find someone who actually fits.
              </p>
            </div>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="section bg-[var(--color-surface)]">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Our Community
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                Real connections happen at our exclusive member events in South Florida.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/images/about/DSCF8088-web.jpg" alt="AILO event" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/images/about/DSCF8098-web.jpg" alt="AILO event" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/images/about/DSCF8520-web.jpg" alt="AILO event" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image src="/images/about/DSCF8529-web.jpg" alt="AILO event" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden md:col-span-2">
                <Image src="/images/events/LEN04364-web.jpg" alt="AILO mixer event" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden md:col-span-2">
                <Image src="/images/events/DSCF8438-web.jpg" alt="AILO signature event" fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to experience the difference?
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
