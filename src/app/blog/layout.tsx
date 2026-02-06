import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dating Insights Blog | AILO",
  description:
    "Science-backed dating advice, relationship research, and compatibility insights from AILO. Tips for modern dating grounded in 30 years of behavioral science.",
  keywords: [
    "dating advice",
    "relationship tips",
    "compatibility insights",
    "science-based dating",
    "modern dating blog",
    "AILO blog",
  ],
  openGraph: {
    title: "Dating Insights Blog | AILO",
    description:
      "Science-backed dating advice and compatibility insights grounded in 30 years of behavioral research.",
    type: "website",
    images: ["/images/gallery/problem-bg.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dating Insights Blog | AILO",
    description:
      "Science-backed dating advice and compatibility insights grounded in 30 years of behavioral research.",
    images: ["/images/gallery/problem-bg.jpg"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
