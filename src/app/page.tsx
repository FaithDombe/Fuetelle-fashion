import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BrandStatement from "@/components/landing/BrandStatement";
import HowItWorks from "@/components/landing/HowItWorks";
import FashionShowcase from "@/components/landing/FashionShowcase";
import CustomerSection from "@/components/landing/CustomerSection";
import DesignerSection from "@/components/landing/DesignerSection";
import TailorSection from "@/components/landing/TailorSection";
import TrustSection from "@/components/landing/TrustSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F6] text-[#0B0B0C] selection:bg-[#C5A880]/30 selection:text-[#0B0B0C]">
      {/* SECTION 1: NAVIGATION BAR */}
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 2: EDITORIAL HERO */}
        <HeroSection />

        {/* SECTION 3: BRAND STATEMENT / INTRODUCTION */}
        <BrandStatement />

        {/* SECTION 4: HOW IT WORKS — FOUR-STEP WALKTHROUGH */}
        <HowItWorks />

        {/* SECTION 5: FASHION SHOWCASE */}
        <FashionShowcase />

        {/* SECTION 6: CUSTOMER EXPERIENCE */}
        <CustomerSection />

        {/* SECTION 7: DESIGNER EXPERIENCE */}
        <DesignerSection />

        {/* SECTION 8: TAILOR EXPERIENCE */}
        <TailorSection />

        {/* SECTION 9: TRUST & PROTECTED PRODUCTION */}
        <TrustSection />

        {/* SECTION 10: FINAL CALL TO ACTION */}
        <FinalCTA />
      </main>

      {/* SECTION 11: FOOTER */}
      <Footer />
    </div>
  );
}
