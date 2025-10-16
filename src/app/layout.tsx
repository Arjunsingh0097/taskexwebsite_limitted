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
  description: "Taskex provides comprehensive business solutions including software development, data analytics, digital marketing, business process services, and end-to-end outsourcing. Trusted worldwide for driving innovation and growth.",
  keywords: "business solutions, software development, data analytics, digital marketing, outsourcing, business process, technology consulting",
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
    description: "Taskex provides comprehensive business solutions including software development, data analytics, digital marketing, business process services, and end-to-end outsourcing. Trusted worldwide for driving innovation and growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taskex Logo - Complete Business Solutions Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@taskex",
    creator: "@taskex",
    title: "Taskex - Complete Business Solutions Partner",
    description: "Taskex provides comprehensive business solutions including software development, data analytics, digital marketing, business process services, and end-to-end outsourcing.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/taskeximage-removebg-preview.png",
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#1acb97",
    "msapplication-config": "/browserconfig.xml",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
