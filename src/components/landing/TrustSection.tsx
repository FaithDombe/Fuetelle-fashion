import { ShieldCheck, FileText, Lock, Eye, Sparkles } from "lucide-react";
import { TRUST_POINTS } from "@/lib/constants";

export default function TrustSection() {
  const icons = [ShieldCheck, FileText, Lock, Eye];

  return (
    <section
      id="trust"
      className="py-24 sm:py-32 lg:py-40 bg-[#F9F8F6] border-b border-[#E5E2DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center justify-center space-x-2.5 mb-4">
            <span className="w-5 h-[1px] bg-[#C5A880]" aria-hidden="true" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Integrity & Craft Standards
            </span>
            <span className="w-5 h-[1px] bg-[#C5A880]" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0B0B0C] tracking-tight font-normal leading-[1.1] mb-5">
            Confidence in Every Creation.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#66645F] leading-relaxed">
            Custom fashion should be personal, transparent, and dependable. Our
            platform is designed to support accountability throughout the
            production journey.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_POINTS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="group p-8 bg-[#F0EDE7]/40 border border-[#E5E2DC] transition-all duration-300 hover:border-[#C5A880] hover:bg-[#F0EDE7]/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-none bg-[#F9F8F6] border border-[#E5E2DC] flex items-center justify-center text-[#236B4A] group-hover:border-[#C5A880] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="font-mono text-xs text-[#C5A880] font-medium tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block px-2.5 py-0.5 bg-[#236B4A]/10 text-[#236B4A] text-[10px] tracking-wider uppercase font-sans font-medium mb-3">
                      {item.badge}
                    </span>
                    <h3 className="font-serif text-2xl text-[#0B0B0C] font-normal group-hover:text-[#66645F] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#66645F] leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-[#E5E2DC]/60 flex items-center justify-between text-[11px] text-[#66645F] font-sans">
                  <span>Atelier Guarantee</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-16 p-6 bg-[#F0EDE7]/60 border border-[#E5E2DC] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#66645F] font-sans leading-relaxed">
            <strong className="text-[#0B0B0C] font-medium">
              Protected Production Policy:{" "}
            </strong>
            Designed to support safeguarded payment releases and transparent
            technical sign-offs at each production milestone.
          </p>
        </div>
      </div>
    </section>
  );
}
