import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AILO Duo - See How You Connect | Compatibility Assessment for Couples",
  description:
    "Take AILO's compatibility assessment together. Whether you're just getting started or years into your relationship — understand what makes you work together. Get your compatibility score, discover where you click, and build a stronger bond.",
  keywords: [
    "couples compatibility test",
    "relationship assessment",
    "compatibility score",
    "relationship compatibility",
    "couples quiz",
    "relationship test",
    "AILO Duo",
  ],
  openGraph: {
    title: "AILO Duo - See How You Connect",
    description:
      "Take AILO's compatibility assessment together. Understand what makes you work as a couple.",
    images: ["/video/duo-hero-poster.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AILO Duo - See How You Connect",
    description:
      "Take AILO's compatibility assessment together. Understand what makes you work as a couple.",
    images: ["/video/duo-hero-poster.jpg"],
  },
};

export default function DuoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
