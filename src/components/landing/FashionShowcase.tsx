"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SHOWCASE_CATEGORIES,
  SHOWCASE_ITEMS,
  FEATURED_DESIGN,
  type ShowcaseCategory,
  type ShowcaseItem,
} from "@/lib/constants";
import { ArrowRight, Sparkles, X, Clock, Scissors, Layers } from "lucide-react";

export default function FashionShowcase() {
  const [selectedCategory, setSelectedCategory] =
    useState<ShowcaseCategory>("All");
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? SHOWCASE_ITEMS
      : SHOWCASE_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="showcase"
      className="py-24 sm:py-32 lg:py-40 bg-[#F0EDE7]/40 border-b border-[#E5E2DC]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2.5 mb-4">
              <span className="w-5 h-[1px] bg-[#C5A880]" aria-hidden="true" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                Curated Creations
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0B0B0C] tracking-tight font-normal leading-[1.1] mb-5">
              Discover What You Can Create.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#66645F] leading-relaxed">
              From timeless tailoring to contemporary silhouettes, explore the
              possibilities of personalised fashion.
            </p>
          </div>

          <Link
            href="/signup"
            className="self-start md:self-end inline-flex items-center text-xs tracking-[0.16em] uppercase text-[#0B0B0C] hover:text-[#C5A880] font-sans font-medium transition-colors border-b border-[#0B0B0C] hover:border-[#C5A880] pb-1"
          >
            <span>Commission a Custom Piece</span>
            <ArrowRight className="ml-2 w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-16 no-scrollbar">
          {SHOWCASE_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.12em] font-sans whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? "bg-[#0B0B0C] text-[#F9F8F6] border-[#0B0B0C]"
                    : "bg-[#F9F8F6] text-[#66645F] border-[#E5E2DC] hover:text-[#0B0B0C] hover:border-[#C5A880]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Featured Editorial Banner */}
        {(selectedCategory === "All" ||
          selectedCategory === FEATURED_DESIGN.category) && (
          <div className="mb-16 border border-[#E5E2DC] bg-[#F9F8F6] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
                <Image
                  src={FEATURED_DESIGN.imageUrl}
                  alt={FEATURED_DESIGN.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#0B0B0C] text-[#C5A880] text-[10px] tracking-[0.2em] uppercase font-sans px-3 py-1.5 flex items-center space-x-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Featured Atelier Spotlight</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#C5A880] font-sans font-semibold mb-2">
                    {FEATURED_DESIGN.category} &bull; Editorial No. 01
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#0B0B0C] font-normal mb-4">
                    {FEATURED_DESIGN.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#66645F] leading-relaxed mb-6">
                    {FEATURED_DESIGN.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#E5E2DC] text-xs font-sans text-[#66645F]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#0B0B0C] font-medium">Fabric:</span>
                      <span>{FEATURED_DESIGN.fabric}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0B0B0C] font-medium">Silhouette:</span>
                      <span>{FEATURED_DESIGN.silhouette}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#0B0B0C] font-medium">Crafting:</span>
                      <span>{FEATURED_DESIGN.craftingTime}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    type="button"
                    onClick={() => setActiveItem(FEATURED_DESIGN)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:bg-[#66645F] transition-colors"
                  >
                    <span>Explore Design Specifications</span>
                    <ArrowRight className="ml-2 w-3.5 h-3.5 text-[#C5A880]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid: Asymmetrical Luxury Editorial Look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <article
              key={item.id}
              className={`group bg-[#F9F8F6] border border-[#E5E2DC] flex flex-col justify-between transition-all duration-300 hover:border-[#C5A880] ${
                idx % 3 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F0EDE7]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute top-3 left-3 bg-[#F9F8F6]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-widest uppercase font-sans text-[#0B0B0C]">
                  {item.category}
                </div>

                <div className="absolute inset-0 bg-[#0B0B0C]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <button
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className="px-5 py-2.5 bg-[#F9F8F6] text-[#0B0B0C] text-xs tracking-wider uppercase font-sans font-medium hover:bg-[#C5A880] hover:text-[#0B0B0C] transition-colors shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-2 group-hover:text-[#66645F] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#66645F] line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E2DC] flex items-center justify-between text-[11px] font-sans">
                  <span className="text-[#C5A880] tracking-wider uppercase">
                    {item.craftingTime}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className="text-[#0B0B0C] font-medium hover:text-[#C5A880] transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Details</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal for Design Quick-View / Specifications */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B0C]/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#F9F8F6] max-w-2xl w-full border border-[#E5E2DC] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#F9F8F6] border border-[#E5E2DC] text-[#0B0B0C] hover:text-[#66645F] focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] w-full bg-[#F0EDE7]">
              <Image
                src={activeItem.imageUrl}
                alt={activeItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 bg-[#0B0B0C] text-[#C5A880] text-[10px] tracking-widest uppercase font-sans px-3 py-1">
                {activeItem.category}
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-serif text-3xl text-[#0B0B0C] font-normal mb-3">
                {activeItem.title}
              </h3>
              <p className="font-sans text-sm text-[#66645F] leading-relaxed mb-6">
                {activeItem.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#F0EDE7]/60 border border-[#E5E2DC] mb-6 text-xs font-sans">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#C5A880]">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="font-medium uppercase tracking-wider text-[10px]">
                      Fabric
                    </span>
                  </div>
                  <p className="text-[#0B0B0C]">{activeItem.fabric}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#C5A880]">
                    <Scissors className="w-3.5 h-3.5" />
                    <span className="font-medium uppercase tracking-wider text-[10px]">
                      Silhouette
                    </span>
                  </div>
                  <p className="text-[#0B0B0C]">{activeItem.silhouette}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-[#C5A880]">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-medium uppercase tracking-wider text-[10px]">
                      Crafting
                    </span>
                  </div>
                  <p className="text-[#0B0B0C]">{activeItem.craftingTime}</p>
                </div>
              </div>

              <div className="text-xs text-[#66645F] mb-6">
                <span className="font-medium text-[#0B0B0C]">Atelier Note: </span>
                {activeItem.atelierNote}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/signup"
                  className="w-full sm:w-auto flex-1 text-center py-3.5 px-6 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:bg-[#66645F] transition-colors"
                >
                  Commission Similar Outfit &rarr;
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="w-full sm:w-auto py-3.5 px-6 border border-[#E5E2DC] text-[#0B0B0C] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:bg-[#F0EDE7] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
