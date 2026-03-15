import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import FloatingParticles from "./components/FloatingParticles";
import InteractiveBackground from "./components/InteractiveBackground";
import JsonLd from "./components/JsonLd";
import AiSearchContent from "./components/AiSearchContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nine.codes";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nine (Natthanarong) | AI Software Developer",
    template: "%s | Nine - AI Developer",
  },
  description: "Nine (Natthanarong Tiangjit) - AI Developer specializing in LLM, Full-Stack Web, and Robotics. Award winner from Bangkok University.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon.ico" },
    ],
  },
  keywords: [
    "AI Developer",
    "Software Developer",
    "Full-Stack Developer",
    "LLM Optimization",
    "Machine Learning",
    "Robotics Engineer",
    "Python Developer",
    "Bangkok University",
    "Natthanarong Tiangjit",
    "ณัฏฐณรงค์ เที่ยงจิตต์",
    "Nine",
    "ไนน์",
    "นักพัฒนาซอฟต์แวร์ AI",
    "Web Developer Thailand",
    "AI Engineer",
    "Data Science",
    "RAG Chatbot",
    "Super AI Engineer",
  ],
  authors: [{ name: "Natthanarong Tiangjit (ณัฏฐณรงค์ เที่ยงจิตต์)", url: siteUrl }],
  creator: "Natthanarong Tiangjit (ณัฏฐณรงค์ เที่ยงจิตต์)",
  publisher: "Natthanarong Tiangjit (ณัฏฐณรงค์ เที่ยงจิตต์)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "th_TH",
    url: siteUrl,
    siteName: "Nine - AI Software Developer Portfolio",
    title: "Nine (Natthanarong) | AI Software Developer",
    description: "Nine (Natthanarong Tiangjit) - AI Developer specializing in LLM, Full-Stack Web, and Robotics. Award winner from Bangkok University.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Natthanarong (Nine) - AI Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nine (Natthanarong) | AI Software Developer",
    description: "Nine (Natthanarong Tiangjit) - AI Software Developer specializing in LLM Optimization, Full-Stack Web Development, and Robotics.",
    images: ["/images/og-image.png"],
    creator: "@nine_codes",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  classification: "Portfolio",
  bookmarks: [siteUrl],
  assets: ["/images/og-image.png"],
  appLinks: {
    web: {
      url: siteUrl,
      should_fallback: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a1a2e" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <AiSearchContent />
        <InteractiveBackground />
        <CustomCursor />
        <FloatingParticles />
        {children}
      </body>
    </html>
  );
}
