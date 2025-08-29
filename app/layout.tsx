import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingUpButton from "./components/FloatingUpButton";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Promind360 - Kapsamlı SEO Analiz & Optimizasyon Platformu",
  description: "Web sitenizin SEO performansını detaylı analiz edin. Gerçek zamanlı SEO denetimi, PageSpeed testi, AI bot erişim analizi ve kapsamlı optimizasyon önerileri.",
  keywords: "SEO analizi, SEO denetimi, PageSpeed testi, web sitesi optimizasyonu, arama motoru optimizasyonu, SEO raporu, AI bot analizi",
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
        <Providers>
          {children}
          <FloatingUpButton />
          <FloatingWhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
