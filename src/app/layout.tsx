import type { Metadata, Viewport } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "PalmPrint - India's Largest Tax & Financial Services Platform",
  description: "File ITR, GST returns, and manage your taxes with India's leading tax platform",
  robots: "index, follow",
  keywords: [
    "ITR filing",
    "GST",
    "tax",
    "income tax",
    "e-filing",
    "TDS",
    "investment",
    "financial services",
  ],
  authors: [{ name: "PalmPrint" }],
  applicationName: "PalmPrint",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PalmPrint - India's Largest Tax & Financial Services Platform",
    description: "File ITR, GST returns, and manage your taxes with India's leading tax platform.",
    type: "website",
    url: "/",
    siteName: "PalmPrint",
    locale: "en_IN",
    images: [
      {
        url: "/assest/LOGO.jpeg",
        width: 1200,
        height: 630,
        alt: "PalmPrint",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PalmPrint - India's Largest Tax & Financial Services Platform",
    description: "File ITR, GST returns, and manage your taxes with India's leading tax platform.",
    images: [
      {
        url: "/assest/LOGO.jpeg",
        alt: "PalmPrint",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1877F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen">
        <ErrorReporter />
        <FloatingContact />
        {children}
      </body>
    </html>
  );
}
