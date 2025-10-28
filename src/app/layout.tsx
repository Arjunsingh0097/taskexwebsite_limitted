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

export const metadata: Metadata = {
  title: "Taskex - Complete Business Solutions Partner",
  description:
    "Taskex provides comprehensive business solutions including software development, data analytics, digital marketing, business process services, and end-to-end outsourcing. Trusted worldwide for driving innovation and growth.",
  keywords:
    "business solutions, software development, data analytics, digital marketing, outsourcing, business process, technology consulting",
  authors: [{ name: "Taskex" }],
  creator: "Taskex",
  publisher: "Taskex",
  robots: "index, follow",
  metadataBase: new URL("https://taskex.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskex.com",
    siteName: "Taskex",
    title: "Taskex - Complete Business Solutions Partner",
    description:
      "Taskex provides comprehensive business solutions including software development, data analytics, digital marketing, business process services, and end-to-end outsourcing. Trusted worldwide for driving innovation and growth.",
    images: [
      {
        url: "https://taskex.com/images/og-image-1200x630.png",
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
    images: ["https://taskex.com/images/og-image-1200x630.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
      { url: "/images/taskeximage-removebg-preview.png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1acb97",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#1acb97",
    "msapplication-config": "/browserconfig.xml",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:secure_url": "https://taskex.com/images/og-image-1200x630.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1acb97",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional manual fallbacks (optional) */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}