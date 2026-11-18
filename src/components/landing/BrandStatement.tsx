export default function BrandStatement() {
  return (
    <section
      id="brand-statement"
      className="py-24 sm:py-32 md:py-40 bg-[#F0EDE7]/50 border-b border-[#E5E2DC] relative"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Subtle decorative champagne symbol */}
        <div className="flex items-center justify-center space-x-3 mb-8" aria-hidden="true">
          <div className="w-12 h-[1px] bg-[#C5A880]/60" />
          <div className="w-1.5 h-1.5 rotate-45 border border-[#C5A880] bg-[#C5A880]" />
          <div className="w-12 h-[1px] bg-[#C5A880]/60" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B0B0C] tracking-tight font-normal leading-tight mb-8">
          Nigerian Sartorial Mastery.
          <br />
          <span className="italic font-light text-[#66645F]">
            Made Truly Personal.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#66645F] leading-relaxed max-w-3xl mx-auto font-light">
          From the vibrant fashion capitals of Lagos and Abuja to clients across
          the global diaspora, we connect discerning individuals with Nigeria’s
          foremost fashion designers, authentic textile mills, and master
          craftsmen to create garments made to your exact measurements and
          cultural heritage.
        </p>

        {/* Subtle atelier tagline */}
        <div className="mt-10 inline-flex items-center space-x-4 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-sans">
          <span>Aso-Oke &bull; Getzner &bull; Solstiss Lace</span>
          <span>&bull;</span>
          <span>Lagos &bull; Abuja &bull; Diaspora</span>
        </div>
      </div>
    </section>
  );
}
