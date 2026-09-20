import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laveena-ai.dev"),
  title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.title}`,
  description: `${PORTFOLIO_DATA.personal.tagline} CGPA 3.9/4.0 from SZABIST, Karachi, Pakistan (2024–2028). Specializing in LangGraph, multi-agent swarms, RAG systems, and Post-Quantum Cryptography.`,
  keywords: [
    "AI Engineer",
    "LLM Engineer",
    "Agentic AI",
    "LangGraph",
    "Multi-Agent Systems",
    "RAG",
    "Laveena",
    "SZABIST",
    "Post-Quantum Cryptography",
    "Python",
    "FastAPI"
  ],
  authors: [{ name: PORTFOLIO_DATA.personal.name, url: PORTFOLIO_DATA.personal.github }],
  creator: PORTFOLIO_DATA.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laveena-ai.dev",
    title: `${PORTFOLIO_DATA.personal.name} — AI Engineer & Multi-Agent Architect`,
    description: PORTFOLIO_DATA.personal.tagline,
    siteName: `${PORTFOLIO_DATA.personal.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PORTFOLIO_DATA.personal.name} - AI Engineer Portfolio`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personal.name} | AI Engineer`,
    description: PORTFOLIO_DATA.personal.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0d1f1f] text-slate-100 antialiased relative selection:bg-teal-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
