import Image from "next/image";
import { WALKTHROUGH_STEPS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 lg:py-36 bg-[#F9F8F6] border-b border-[#E5E2DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2.5 mb-4">
            <span className="w-5 h-[1px] bg-[#C5A880]" aria-hidden="true" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              The Atelier Process
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0B0B0C] tracking-tight font-normal leading-[1.1] mb-5">
            From Inspiration to Creation.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#66645F] leading-relaxed">
            A seamless journey from your imagination to a garment crafted just for
            you.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {WALKTHROUGH_STEPS.map((step) => (
            <div
              key={step.number}
              className="group flex flex-col bg-[#F0EDE7]/40 border border-[#E5E2DC] transition-all duration-300 hover:border-[#C5A880]/80 hover:bg-[#F0EDE7]/70"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0EDE7]">
                <Image
                  src={step.imageUrl}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0B0B0C]/10 group-hover:bg-transparent transition-colors duration-300" />

                {/* Step Number Badge */}
                <div className="absolute top-3 left-3 bg-[#0B0B0C] text-[#F9F8F6] text-xs font-mono font-medium px-2.5 py-1 tracking-wider">
                  {step.number}
                </div>

                {/* Tag */}
                <div className="absolute bottom-3 right-3 bg-[#F9F8F6]/90 backdrop-blur-sm text-[#0B0B0C] text-[10px] tracking-wider uppercase font-sans px-2.5 py-1">
                  {step.tag}
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880] font-sans font-medium mb-1.5">
                    STEP {step.number} &bull; {step.label}
                  </div>
                  <h3 className="font-serif text-xl text-[#0B0B0C] font-normal mb-3 group-hover:text-[#66645F] transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-[#66645F] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E5E2DC]/60 flex items-center justify-between text-xs text-[#0B0B0C] font-sans">
                  <span className="text-[11px] tracking-wider uppercase text-[#66645F]">
                    Phase {step.number}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
