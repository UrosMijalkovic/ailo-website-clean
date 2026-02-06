import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GrayscaleToggle } from "@/components/GrayscaleToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ailoapp.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "AILO - Premium Matchmaking Powered by Science",
    template: "%s | AILO",
  },
  description:
    "The dating app for people who hate dating apps. Premium matchmaking powered by 30 years of behavioral science. Only 70%+ compatible matches.",
  keywords: [
    "matchmaking",
    "dating",
    "compatibility",
    "relationship",
    "science-based dating",
    "premium dating",
    "South Florida dating",
  ],
  authors: [{ name: "AILO" }],
  creator: "AILO",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ailoapp.com",
    siteName: "AILO",
    title: "AILO - Premium Matchmaking Powered by Science",
    description:
      "The dating app for people who hate dating apps. Premium matchmaking powered by 30 years of behavioral science.",
    images: [
      {
        url: "/video/herovideo-poster.jpg",
        width: 1200,
        height: 630,
        alt: "AILO - Premium Matchmaking Powered by Science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AILO - Premium Matchmaking Powered by Science",
    description:
      "The dating app for people who hate dating apps. Premium matchmaking powered by 30 years of behavioral science.",
    images: ["/video/herovideo-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AILO",
  url: "https://ailoapp.com",
  logo: "https://ailoapp.com/images/ailo-logo.png",
  description:
    "Premium matchmaking powered by 30 years of behavioral science. AILO uses a patented compatibility methodology (US Patent #8556630B2) to match singles based on 6 scientifically validated compatibility markers.",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Haleh Gianni",
      jobTitle: "Founder & CEO",
    },
  ],
  areaServed: {
    "@type": "Place",
    name: "South Florida",
    geo: {
      "@type": "GeoShape",
      addressCountry: "US",
      addressRegion: ["Palm Beach County", "Broward County", "Miami-Dade County"],
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@ailoapp.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.instagram.com/ailoapp",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <GrayscaleToggle />
        {children}
      </body>
    </html>
  );
}
