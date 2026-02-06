import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Science Behind AILO | 30 Years of Compatibility Research",
  description:
    "30 years of behavioral research. One breakthrough methodology. US Patent #8556630B2. Discover the 6 dimensions of compatibility that power AILO's matchmaking engine.",
  keywords: [
    "compatibility science",
    "relationship research",
    "behavioral science dating",
    "compatibility assessment",
    "natural mathematics of man",
    "AILO science",
    "patented matchmaking",
  ],
  openGraph: {
    title: "The Science Behind AILO",
    description:
      "30 years of behavioral research. One breakthrough methodology. Discover the science that powers compatibility.",
    type: "website",
    images: ["/images/gallery/problem-bg.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Science Behind AILO",
    description:
      "30 years of behavioral research. One breakthrough methodology. Discover the science that powers compatibility.",
    images: ["/images/gallery/problem-bg.jpg"],
  },
};

export default function TheScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
