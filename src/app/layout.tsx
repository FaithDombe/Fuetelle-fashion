import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FUETELLE | Your Vision. Your Style. Made to Measure.",
  description:
    "Transform your fashion ideas into custom-made garments with AI-powered design, professional fashion designers, and skilled tailors. Luxury bespoke fashion atelier marketplace.",
  keywords: [
    "bespoke fashion",
    "custom tailoring",
    "AI fashion design",
    "haute couture marketplace",
    "made to measure",
    "tailor studio",
  ],
  openGraph: {
    title: "FUETELLE — Luxury Made to Measure & Fashion Atelier",
    description:
      "Transform your fashion ideas into custom-made garments with AI-powered design, professional fashion designers, and skilled tailors.",
    type: "website",
    locale: "en_US",
    siteName: "FUETELLE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F9F8F6] text-[#0B0B0C] font-sans selection:bg-[#C5A880]/30 selection:text-[#0B0B0C]">
        {children}
      </body>
    </html>
  );
}
