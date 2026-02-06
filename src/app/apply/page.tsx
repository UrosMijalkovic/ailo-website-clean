import type { Metadata } from "next";
import { QuizContainer } from "./QuizContainer";
import { Header } from "@/components/layout";

export const metadata: Metadata = {
  title: "Apply for AILO Membership",
  description:
    "Complete a brief pre-assessment to see if AILO premium matchmaking is right for you. Science-backed compatibility matching in South Florida.",
  openGraph: {
    title: "Apply for AILO Membership",
    description:
      "Complete a brief pre-assessment to see if AILO premium matchmaking is right for you.",
    images: ["/video/herovideo-poster.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply for AILO Membership",
    description:
      "Complete a brief pre-assessment to see if AILO premium matchmaking is right for you.",
    images: ["/video/herovideo-poster.jpg"],
  },
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden">
        {/* Background layers for warmth/depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D3A40] via-[#1E1E1E] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,111,115,0.15),transparent)]" />

        {/* Content */}
        <div className="relative container-custom pt-28 sm:pt-32 pb-12 min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full">
            <QuizContainer />
          </div>
        </div>
      </main>
    </>
  );
}
