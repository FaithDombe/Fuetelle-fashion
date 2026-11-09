import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CUSTOMER_FEATURES } from "@/lib/constants";

export default function CustomerSection() {
  return (
    <section
      id="customer"
      className="py-24 sm:py-32 lg:py-40 bg-[#F9F8F6] border-b border-[#E5E2DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2.5 mb-4">
              <span className="w-5 h-[1px] bg-[#C5A880]" aria-hidden="true" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                Client Atelier Experience
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#0B0B0C] tracking-tight font-normal leading-[1.1] mb-6">
              Your Style.
              <br />
              Your Measurements.
              <br />
              <span className="italic font-light text-[#66645F]">
                Your Creation.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#66645F] leading-relaxed mb-10">
              Create garments that reflect your personality, preferences, and
              proportions. Explore designs, work with professionals, and
              commission clothing made specifically for you.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {CUSTOMER_FEATURES.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#C5A880]/15 text-[#9F8259] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
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
                href="/signup"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.18em] font-sans font-medium transition-all duration-300 hover:bg-[#66645F] border border-[#0B0B0C] shadow-sm"
              >
                <span>Start Designing</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#C5A880]" />
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-[#F0EDE7] border border-[#E5E2DC]">
              <Image
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1200"
                alt="Client admiring an exquisitely tailored bespoke luxury garment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#F9F8F6]/95 backdrop-blur-md p-5 border border-[#E5E2DC] shadow-lg">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#C5A880] mb-1 font-sans">
                  <span>Custom Fit Guarantee</span>
                  <span>Bespoke Measurement</span>
                </div>
                <div className="font-serif text-lg text-[#0B0B0C]">
                  Designed for your silhouette
                </div>
                <p className="text-xs text-[#66645F] font-sans mt-1">
                  Precision digital drafting ensures garments fit every contour
                  seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
