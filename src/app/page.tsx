import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Bridge,
  Problem,
  HowItWorks,
  Proof,
  FounderLetter,
  ExperienceAilo,
  FinalCTA,
  FAQ,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HERO - Hook */}
        <Hero />

        {/* 2. BRIDGE - What is AILO */}
        <Bridge />

        {/* 3. PROBLEM - Pain */}
        <Problem />

        {/* 4. HOW IT WORKS - The Mechanism */}
        <HowItWorks />

        {/* 5. PROOF - Social Proof + Founders */}
        <Proof />

        {/* 6. FOUNDER LETTER - Personal Promise */}
        <FounderLetter />

        {/* 7. EXPERIENCE AILO - Multiple Entry Points */}
        <ExperienceAilo />

        {/* 8. FINAL CTA - Close */}
        <FinalCTA />

        {/* 9. FAQ - SEO + Objections */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
