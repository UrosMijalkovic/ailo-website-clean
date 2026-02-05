import type { Metadata } from "next";
import { QuizContainer } from "./QuizContainer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Complete a brief pre-assessment to see if AILO premium matchmaking is right for you.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-primary-dark)]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/app/Logo.png"
                alt="AILO"
                width={100}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>
          </nav>
        </div>
      </header>

      {/* Pre-Assessment Content */}
      <div className="container-custom pt-24 pb-12 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full">
          <QuizContainer />
        </div>
      </div>
    </main>
  );
}
