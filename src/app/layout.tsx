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
  title: "FUETELLE | Nigerian Bespoke Haute Couture & Tailoring Atelier",
  description:
    "Transform your fashion ideas into bespoke Nigerian garments with AI-powered design, top Nigerian fashion designers, and master tailors across Lagos, Abuja, and nationwide. Ceremonial Agbadas, Senator suits, and couture Aso-Ebi.",
  keywords: [
    "Nigerian bespoke fashion",
    "Agbada tailor Lagos",
    "Senator suit tailor Abuja",
    "Aso-Ebi couture Nigeria",
    "custom tailoring Nigeria",
    "AI fashion design Lagos",
    "Getzner brocade bespoke",
    "Aso-Oke luxury attire",
  ],
  openGraph: {
    title: "FUETELLE — Nigerian Bespoke Haute Couture & Atelier Guild",
    description:
      "Transform your fashion ideas into bespoke Nigerian garments with AI-powered design, top Nigerian fashion designers, and master tailors across Lagos, Abuja, and nationwide.",
    type: "website",
    locale: "en_NG",
    siteName: "FUETELLE Nigeria",
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
