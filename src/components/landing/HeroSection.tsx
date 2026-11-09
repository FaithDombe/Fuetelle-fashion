import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 bg-[#F9F8F6] border-b border-[#E5E2DC] overflow-hidden">
      {/* Subtle background luxury accent */}
      <div
        className="absolute top-10 right-0 -mr-40 w-96 h-96 rounded-full bg-[#C5A880]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small uppercase editorial label */}
            <div className="inline-flex items-center space-x-2.5 mb-6">
              <span className="w-6 h-[1px] bg-[#C5A880]" aria-hidden="true" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                THE FUTURE OF PERSONAL STYLE
              </span>
            </div>

            {/* Main Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-[#0B0B0C] mb-8 font-normal">
              Your Vision.
              <br />
              <span className="italic font-light text-[#66645F]">
                Your Style.
              </span>
              <br />
              Made to Measure.
            </h1>

            {/* Supporting paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#66645F] max-w-xl leading-relaxed mb-10 font-normal">
              Transform your fashion ideas into beautifully designed, custom-made
              garments. From your first inspiration to the final stitch, bring your
              vision to life with AI, professional designers, and skilled tailors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.18em] font-sans font-medium transition-all duration-300 hover:bg-[#66645F] border border-[#0B0B0C] hover:border-[#66645F] shadow-sm"
              >
                <span>Design Your Outfit</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#C5A880]" />
              </Link>

              <Link
                href="#designers"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#0B0B0C] text-xs uppercase tracking-[0.18em] font-sans font-medium transition-all duration-300 hover:bg-[#F0EDE7] border border-[#E5E2DC] hover:border-[#C5A880]"
              >
                <span>Enter Designer Studio</span>
                <span className="ml-2 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>

            {/* Supporting trust statement */}
            <div className="pt-6 border-t border-[#E5E2DC]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#66645F] font-sans">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#236B4A]" />
                <span className="font-medium text-[#0B0B0C]">
                  Designed around you.
                </span>
                <span>Crafted by professionals.</span>
              </div>
              <div className="hidden sm:inline-block text-[#E5E2DC]">&bull;</div>
              <div className="flex items-center space-x-1 text-[#66645F]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#236B4A]" />
                <span>Protected milestone delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Decorative Hairline Border Offset */}
            <div className="absolute -inset-2.5 border border-[#C5A880]/30 hidden sm:block pointer-events-none -z-10 translate-x-2 translate-y-2" />

            {/* Main Editorial Image Card */}
            <div className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden bg-[#F0EDE7] shadow-[0_20px_50px_rgba(11,11,12,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200"
                alt="High-fashion editorial model wearing a bespoke tailored architectural coat"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Dark subtle gradient at bottom for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/60 via-transparent to-transparent pointer-events-none" />

              {/* Editorial Fashion Tag Annotation */}
              <div className="absolute top-5 left-5 bg-[#F9F8F6]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#E5E2DC] text-[10px] tracking-[0.2em] uppercase font-sans text-[#0B0B0C] shadow-sm flex items-center space-x-1.5">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                <span>Atelier Creation N° 042</span>
              </div>

              {/* Bottom Editorial Caption Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0B0B0C]/85 backdrop-blur-md p-4 text-[#F9F8F6] border border-white/10">
                <div className="flex items-center justify-between text-[10px] tracking-[0.16em] uppercase text-[#C5A880] mb-1">
                  <span>Haute Couture Silhouette</span>
                  <span>100% Bespoke Fit</span>
                </div>
                <p className="font-serif text-base text-[#F9F8F6] font-normal leading-snug">
                  The Sculpted Wool Crepe Trench
                </p>
                <p className="text-[11px] text-[#F9F8F6]/70 font-sans mt-0.5">
                  AI silhouette generation with Savile Row master tailoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
