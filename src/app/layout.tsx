// app/layout.tsx (or app/RootLayout.tsx)
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// IMPORTANT: Put these files in /public before deploying:
// /public/favicon.ico
// /public/favicon-16x16.png   (16x16 PNG, white background)
// /public/favicon-32x32.png   (32x32 PNG, white background)
// /public/apple-touch-icon.png (180x180 PNG, white background)
// /public/images/og-image-1200x630.png (your share image)

export const metadata: Metadata = {
  metadataBase: new URL("https://taskex.in"), // use your live domain
  title: "Taskex - Complete Business Solutions Partner",
  description:
    "Taskex provides comprehensive business solutions including software development, data analytics, digital marketing, business process services, and end-to-end outsourcing. Trusted worldwide for driving innovation and growth.",
  keywords:
    "business solutions, software development, data analytics, digital marketing, outsourcing, business process, technology consulting",
  authors: [{ name: "Taskex" }],
  creator: "Taskex",
  publisher: "Taskex",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskex.in",
    siteName: "Taskex",
    title: "Taskex - Complete Business Solutions Partner",
    description:
      "Taskex provides comprehensive business solutions including software development, data analytics, digital marketing, business process services, and end-to-end outsourcing. Trusted worldwide for driving innovation and growth.",
    images: [
      {
        url: "/images/og-image-1200x630.png", // resolved via metadataBase
        width: 1200,
        height: 630,
        alt: "Taskex Logo - Complete Business Solutions Partner",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@taskex",
    creator: "@taskex",
    title: "Taskex - Complete Business Solutions Partner",
    description:
      "Taskex provides comprehensive business solutions including software development, data analytics, digital marketing, business process services, and end-to-end outsourcing.",
    images: ["/images/og-image-1200x630.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    // iOS homescreen icon (must be a PNG, usually 180x180)
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1acb97" }, // optional
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#1acb97",
    "msapplication-config": "/browserconfig.xml",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1acb97",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Redundant fallbacks (harmless, improves compatibility) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1acb97" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}