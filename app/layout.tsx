import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingUpButton from "./components/FloatingUpButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Promind360 - Modern SEO Marketing & Agency",
  description: "Ensuring the best return on investment for your bespoke SEO Campaign requirement. Modern, data-driven SEO solutions for businesses.",
  keywords: "SEO, digital marketing, agency, optimization, search engine",
  authors: [{ name: "Promind360" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <FloatingUpButton />
      </body>
    </html>
  );
}
