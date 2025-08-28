import type { Metadata, Viewport } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";

export const metadata: Metadata = {
  title: "ClearTax - India's Largest Tax & Financial Services Platform",
  description: "File ITR, GST returns, and manage your taxes with India's leading tax platform. Trusted by 7.5M+ users for accurate tax filing and maximum refunds.",
  robots: "index, follow",
  openGraph: {
    title: "ClearTax - India's Largest Tax & Financial Services Platform",
    description: "File ITR, GST returns, and manage your taxes with India's leading tax platform.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
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
      <body className="antialiased min-h-screen">
        <ErrorReporter />
        {children}
      </body>
    </html>
  );
}
