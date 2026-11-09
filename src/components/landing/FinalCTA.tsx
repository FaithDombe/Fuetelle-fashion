import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-28 sm:py-36 lg:py-44 bg-[#0B0B0C] text-[#F9F8F6] relative overflow-hidden">
      {/* Background radial luxury glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C5A880]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative hairline frame */}
      <div className="absolute inset-8 sm:inset-12 lg:inset-20 border border-[#C5A880]/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Small Champagne Label */}
        <div className="inline-flex items-center justify-center space-x-2.5 mb-6">
          <Sparkles className="w-4 h-4 text-[#C5A880]" />
          <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-[#C5A880] font-medium">
            Begin Your Bespoke Journey
          </span>
          <Sparkles className="w-4 h-4 text-[#C5A880]" />
        </div>

        {/* Serif Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F9F8F6] font-normal tracking-tight leading-[1.08] mb-8">
          Your Next Outfit
          <br />
          <span className="italic font-light text-[#C5A880]">Starts Here.</span>
        </h2>

        {/* Supporting text */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#F9F8F6]/75 max-w-xl mx-auto leading-relaxed mb-12 font-light">
          Bring your imagination to life. Create something uniquely yours.
        </p>

        {/* Two prominent CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/signup"
            className="w-full sm:w-auto group inline-flex items-center justify-center px-9 py-4 bg-[#F9F8F6] text-[#0B0B0C] text-xs uppercase tracking-[0.18em] font-sans font-medium transition-all duration-300 hover:bg-[#C5A880] hover:text-[#0B0B0C] border border-[#F9F8F6]"
          >
            <span>Create Your First Design</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/signup?role=pro"
            className="w-full sm:w-auto group inline-flex items-center justify-center px-9 py-4 bg-transparent text-[#F9F8F6] text-xs uppercase tracking-[0.18em] font-sans font-medium transition-all duration-300 hover:bg-white/5 border border-white/20 hover:border-[#C5A880]"
          >
            <span>Join as a Professional</span>
            <span className="ml-2 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

        {/* Atelier Seal Details */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-widest uppercase text-[#F9F8F6]/50 font-sans">
          <span>AI Concept Studio</span>
          <span>&bull;</span>
          <span>Vetted Master Tailors</span>
          <span>&bull;</span>
          <span>Made-To-Measure Guarantee</span>
        </div>
      </div>
    </section>
  );
}
