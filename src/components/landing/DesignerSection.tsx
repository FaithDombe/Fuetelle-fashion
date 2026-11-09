import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { DESIGNER_FEATURES } from "@/lib/constants";

export default function DesignerSection() {
  return (
    <section
      id="designers"
      className="py-24 sm:py-32 lg:py-40 bg-[#0B0B0C] text-[#F9F8F6] relative overflow-hidden border-b border-[#0B0B0C]"
    >
      {/* Background Subtle Luxury Glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#C5A880]/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column on Left (Asymmetrical split) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-[#1a1a1a] border border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80&w=1200"
                alt="Fashion designer's workspace with sketches, technical rulers, fabric swatches, and digital tablet"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Overlay styling & vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/20 to-transparent pointer-events-none" />

              {/* Studio Spec Annotation */}
              <div className="absolute top-5 left-5 bg-[#0B0B0C]/90 backdrop-blur-md px-3.5 py-1.5 border border-[#C5A880]/40 text-[10px] tracking-[0.2em] uppercase font-sans text-[#C5A880] flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Designer Studio CAD Suite</span>
              </div>

              {/* Technical Spec Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0B0B0C]/90 backdrop-blur-md p-5 border border-white/15">
                <div className="flex items-center justify-between text-[10px] tracking-widest text-[#C5A880] uppercase font-sans mb-1">
                  <span>Spec Engine v2.4</span>
                  <span>Automated Grading</span>
                </div>
                <div className="font-serif text-lg text-[#F9F8F6]">
                  Production-Ready Tech Packs
                </div>
                <p className="text-xs text-[#F9F8F6]/70 font-sans mt-1">
                  Generate seam allowances, grading curves, bill of materials, and
                  stitch diagrams in one click.
                </p>
              </div>
            </div>
          </div>

          {/* Content Column on Right */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2.5 mb-4">
              <span className="w-5 h-[1px] bg-[#C5A880]" aria-hidden="true" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                For Fashion Creators & Patternmakers
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#F9F8F6] tracking-tight font-normal leading-[1.1] mb-6">
              Your Creativity.
              <br />
              <span className="italic font-light text-[#C5A880]">
                A Professional Studio.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#F9F8F6]/75 leading-relaxed mb-10">
              A dedicated workspace for fashion designers, illustrators, and
              pattern makers to transform concepts into detailed garment designs
              and production specifications.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {DESIGNER_FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#C5A880] flex-shrink-0" />
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#F9F8F6] mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-xs text-[#F9F8F6]/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/signup?role=designer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#F9F8F6] text-[#0B0B0C] text-xs uppercase tracking-[0.18em] font-sans font-medium transition-all duration-300 hover:bg-[#C5A880] hover:text-[#0B0B0C] border border-[#F9F8F6] shadow-sm"
              >
                <span>Enter Designer Studio</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
