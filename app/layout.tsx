import type { Metadata } from "next";
import { Newsreader, Space_Grotesk, Space_Mono, Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const blackMango = localFont({
  src: "./fonts/BlackMango-Regular.otf",
  variable: "--font-mango",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-eyebrow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Licosash™ — Influencer & Celebrity Marketing",
  description:
    "Human-first influencer & celebrity marketing that turns reach into trust — and trust into business.",
  icons: {
    icon: [
      { url: "/logo_nav.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/logo_nav.png",
    apple: "/logo_nav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${blackMango.variable} ${newsreader.variable} ${grotesk.variable} ${mono.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
