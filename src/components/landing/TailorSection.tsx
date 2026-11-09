import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scissors, CheckCircle2 } from "lucide-react";
import { TAILOR_FEATURES } from "@/lib/constants";

export default function TailorSection() {
  return (
    <section
      id="tailors"
      className="py-24 sm:py-32 lg:py-40 bg-[#F0EDE7]/50 border-b border-[#E5E2DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2.5 mb-4">
              <span className="w-5 h-[1px] bg-[#C5A880]" aria-hidden="true" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                For Master Tailors & Ateliers
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#0B0B0C] tracking-tight font-normal leading-[1.1] mb-6">
              Craftsmanship
              <br />
              <span className="italic font-light text-[#66645F]">
                Meets Opportunity.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#66645F] leading-relaxed mb-10">
              Connect skilled tailors with customers looking for exceptional
              custom-made clothing. Discover production requests, submit
              quotations, and manage garment creation through a structured
              workflow.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {TAILOR_FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#236B4A]/10 text-[#236B4A] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs uppercase tracking-wider font-semibold text-[#0B0B0C] mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-xs text-[#66645F] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Link
                href="/signup?role=tailor"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.18em] font-sans font-medium transition-all duration-300 hover:bg-[#66645F] border border-[#0B0B0C] shadow-sm"
              >
                <span>Join as a Tailor</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#C5A880]" />
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-[#F0EDE7] border border-[#E5E2DC] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1200"
                alt="Master tailor pinning bespoke suit jacket on dressmaker mannequin in luxury atelier"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Floating Workshop Badge */}
              <div className="absolute top-5 right-5 bg-[#F9F8F6]/95 backdrop-blur-md px-3.5 py-1.5 border border-[#E5E2DC] text-[10px] tracking-[0.2em] uppercase font-sans text-[#0B0B0C] flex items-center space-x-1.5 shadow-sm">
                <Scissors className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Atelier Guild Standards</span>
              </div>

              {/* Bottom Atelier Metric Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#F9F8F6]/95 backdrop-blur-md p-5 border border-[#E5E2DC] shadow-lg">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#236B4A] mb-1 font-sans font-semibold">
                  <span>Direct Client Commissions</span>
                  <span>Guaranteed Payouts</span>
                </div>
                <div className="font-serif text-lg text-[#0B0B0C]">
                  Zero Waste &bull; Pure Craft
                </div>
                <p className="text-xs text-[#66645F] font-sans mt-1">
                  Tailors receive accurate 3D specs and cut-ready patterns,
                  drastically cutting fitting rounds and maximizing atelier revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
