import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import AiSearchContent from "./components/AiSearchContent";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = "https://nine.codes";

const personNames =
  "Natthanarong Tiangjit, ณัฏฐณรงค์ เที่ยงจิตต์, Nine, ไนน์, Nine Natthanarong, ไนน์ ณัฏฐณรงค์, Natthanarong";

const description =
  "Natthanarong Tiangjit (ณัฏฐณรงค์ เที่ยงจิตต์) — also known as Nine (ไนน์) — is an AI Software Developer in Bangkok, Thailand. Award-winning innovator (Super AI Engineer SS5) specializing in LLM & RAG, Full-Stack Web, and Robotics. Bangkok University, Tech Talent full scholarship.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Nine (Natthanarong) — AI Software Developer | ณัฏฐณรงค์ เที่ยงจิตต์",
    template: "%s | Nine — Natthanarong Tiangjit",
  },
  description,
  applicationName: "Nine — Natthanarong Tiangjit Portfolio",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  keywords: [
    "Natthanarong",
    "Natthanarong Tiangjit",
    "Nine Natthanarong",
    "ณัฏฐณรงค์",
    "ณัฏฐณรงค์ เที่ยงจิตต์",
    "ไนน์",
    "ไนน์ ณัฏฐณรงค์",
    "Nine",
    "nine.codes",
    "AI Developer",
    "AI Software Developer",
    "Full-Stack Developer",
    "LLM Optimization",
    "RAG Chatbot",
    "Machine Learning",
    "Robotics Engineer",
    "Python Developer",
    "Bangkok University",
    "Super AI Engineer",
    "นักพัฒนาซอฟต์แวร์ AI",
    "Web Developer Thailand",
    "AI Engineer Bangkok",
    "Data Science",
  ],
  authors: [
    { name: "Natthanarong Tiangjit (ณัฏฐณรงค์ เที่ยงจิตต์)", url: siteUrl },
  ],
  creator: "Natthanarong Tiangjit (Nine / ณัฏฐณรงค์ เที่ยงจิตต์)",
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
    type: "profile",
    firstName: "Natthanarong",
    lastName: "Tiangjit",
    username: "n_nine.e",
    locale: "en_US",
    alternateLocale: "th_TH",
    url: siteUrl,
    siteName: "Nine — Natthanarong Tiangjit (ณัฏฐณรงค์ เที่ยงจิตต์)",
    title:
      "Nine (Natthanarong Tiangjit / ณัฏฐณรงค์ เที่ยงจิตต์) — AI Software Developer",
    description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Natthanarong Tiangjit (Nine / ณัฏฐณรงค์ เที่ยงจิตต์) — AI Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nine (Natthanarong Tiangjit / ณัฏฐณรงค์ เที่ยงจิตต์) — AI Software Developer",
    description,
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "th-TH": "/",
      "x-default": "/",
    },
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "person-name": personNames,
  },
};

export const viewport: Viewport = {
  themeColor: [{ color: "#1c1813" }],
  colorScheme: "dark",
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
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
      </head>
      <body className="antialiased">
        <JsonLd />
        <AiSearchContent />
        {children}
      </body>
    </html>
  );
}
