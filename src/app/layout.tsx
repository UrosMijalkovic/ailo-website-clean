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
    siteName: "AILO",
    title: "AILO - Premium Matchmaking Powered by Science",
    description:
      "The dating app for people who hate dating apps. Premium matchmaking powered by 30 years of behavioral science.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AILO - Premium Matchmaking Powered by Science",
    description:
      "The dating app for people who hate dating apps. Premium matchmaking powered by 30 years of behavioral science.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <GrayscaleToggle />
        {children}
      </body>
    </html>
  );
}
