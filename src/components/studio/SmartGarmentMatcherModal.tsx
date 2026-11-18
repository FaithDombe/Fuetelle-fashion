"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Sparkles, ShoppingBag } from "lucide-react";
import type { CatalogGarmentItem, GeneratedDesignData } from "@/lib/types/atelier";
import { formatNaira } from "@/lib/utils";

interface SmartGarmentMatcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  design: GeneratedDesignData;
}

export default function SmartGarmentMatcherModal({
  isOpen,
  onClose,
  design,
}: SmartGarmentMatcherModalProps) {
  const [matches, setMatches] = useState<CatalogGarmentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const fetchMatches = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/match-garments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category: design.curatedOccasion,
            silhouette: design.curatedSilhouette,
            fabric: design.curatedFabric,
            colorHex: design.curatedColorHex,
          }),
        });
        const data = await res.json();
        if (data.matches) {
          setMatches(data.matches);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, [isOpen, design]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#E5E2DC] shadow-2xl p-6 max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E2DC]">
          <div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                AI SMART GARMENT MATCHER
              </span>
            </div>
            <h2 className="text-xl font-serif text-[#111111] mt-0.5">
              Source & Shop The Look
            </h2>
            <p className="text-xs text-[#66645F] mt-0.5">
              Curated artisanal real-world pieces matching your generated silhouette & fabric.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 border border-[#E5E2DC] hover:border-black transition-colors"
          >
            <X className="w-4 h-4 text-[#111111]" />
          </button>
        </div>

        {/* Garment Grid */}
        <div className="overflow-y-auto py-4 space-y-3 flex-1">
          {isLoading ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-6 h-6 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs font-mono text-[#66645F] uppercase">
                Matching Haute Couture Archive & African Guild Pieces...
              </p>
            </div>
          ) : matches.length === 0 ? (
            <p className="text-xs text-[#66645F] text-center py-12">
              No direct catalog match found. Commission a custom order with our master tailors.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {matches.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#E5E2DC] bg-white p-3 space-y-2 group hover:border-[#111111] transition-all"
                >
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F0EDE7]">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5">
                      {item.matchScore}% Style Match
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C5A059] block">
                      {item.brand}
                    </span>
                    <h3 className="text-sm font-serif text-[#111111] font-medium leading-snug">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between text-xs mt-1">
                      <span className="text-[#66645F]">{item.fabric}</span>
                      <span className="font-mono font-semibold text-[#111111]">
                        {formatNaira(item.priceNaira)}
                      </span>
                    </div>
                  </div>

                  <a
                    href={item.productUrl}
                    className="w-full mt-2 flex items-center justify-center space-x-1.5 border border-[#111111] hover:bg-[#111111] hover:text-white py-1.5 text-xs uppercase tracking-wider font-semibold transition-all"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Inquire Piece</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
