import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AILO Events - Exclusive Member Events in South Florida",
  description:
    "Join exclusive AILO community events in South Florida. Meet like-minded singles in person. No pressure, just real connections.",
  keywords: [
    "AILO events",
    "singles events South Florida",
    "dating events Miami",
    "matchmaking events",
    "exclusive singles events",
  ],
  openGraph: {
    title: "AILO Events - Where Connections Begin",
    description:
      "Exclusive events for AILO members in South Florida. Meet the community.",
    images: ["/images/events/Soft launch party.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AILO Events - Where Connections Begin",
    description:
      "Exclusive events for AILO members in South Florida. Meet the community.",
    images: ["/images/events/Soft launch party.jpg"],
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
