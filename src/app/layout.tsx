import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khizerhayat.dev"),
  title: {
    default: "Khizer Hayat | Full-Stack & AI/ML Engineer",
    template: "%s | Khizer Hayat",
  },
  description:
    "Full-Stack & AI/ML Engineer with 4+ years of experience building production systems at scale. Expertise in React, Next.js, TypeScript, Python, PyTorch, LLMs, RAG systems, and MLOps.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Python",
    "PyTorch",
    "TensorFlow",
    "LLM",
    "RAG",
    "MLOps",
    "AWS",
    "Kubernetes",
    "Software Engineer",
  ],
  authors: [{ name: "Khizer Hayat" }],
  creator: "Khizer Hayat",
  publisher: "Khizer Hayat",
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
    url: "https://khizerhayat.dev",
    siteName: "Khizer Hayat Portfolio",
    title: "Khizer Hayat | Full-Stack & AI/ML Engineer",
    description:
      "Engineering Scalable Systems. Building Intelligent Products. Full-Stack & AI/ML Engineer with expertise in React, Next.js, LLMs, and MLOps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khizer Hayat - Full-Stack & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khizer Hayat | Full-Stack & AI/ML Engineer",
    description:
      "Engineering Scalable Systems. Building Intelligent Products.",
    images: ["/og-image.png"],
    creator: "@khizerhayat",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://khizerhayat.dev",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
    { media: "(prefers-color-scheme: light)", color: "#030712" },
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased noise-overlay">{children}</body>
    </html>
  );
}
