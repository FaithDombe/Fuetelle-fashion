"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowLeft,
  Share2,
  Download,
  Check,
  ShoppingBag,
} from "lucide-react";
import { formatNaira } from "@/lib/utils";

interface SavedLookbookItem {
  id: string;
  name: string;
  collection: string;
  silhouette: string;
  fabric: string;
  prompt: string;
  imageUrl: string;
  nairaQuote: number;
  matchScore: number;
  date: string;
}

const INITIAL_SAVED_LOOKS: SavedLookbookItem[] = [
  {
    id: "FTL-SAVED-01",
    name: "Ceremonial Imperial Agbada",
    collection: "Harmattan / Coronation 2026",
    silhouette: "Grand Agbada",
    fabric: "Handwoven Iseyin Aso-Oke",
    prompt:
      "3-piece ceremonial emerald green Aso-Oke Agbada with asymmetric gold filigree chest embroidery, wide draped sleeve span, and matching fila cap",
    imageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200",
    nairaQuote: 685000,
    matchScore: 98.5,
    date: "November 2026",
  },
  {
    id: "FTL-SAVED-02",
    name: "Bespoke Navy Senator Ensemble",
    collection: "Executive Atelier / Lagos",
    silhouette: "Tailored",
    fabric: "Austrian Getzner Brocade",
    prompt:
      "Midnight navy bespoke Senator suit with asymmetric gold metal zipper placket, Mandarin collar, and tapered cigarette trousers in Getzner brocade",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    nairaQuote: 410000,
    matchScore: 94.2,
    date: "November 2026",
  },
  {
    id: "FTL-SAVED-03",
    name: "Rose Quartz Corseted Gala Gown",
    collection: "Aso-Ebi Haute Couture",
    silhouette: "Hourglass Mermaid",
    fabric: "Raw Silk & Solstiss Lace",
    prompt:
      "Dusty rose corseted gala gown with hand-beaded lace neckline, internal boning channels, and dramatic architectural train",
    imageUrl:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=1200",
    nairaQuote: 790000,
    matchScore: 96.8,
    date: "October 2026",
  },
];

export default function WardrobePage() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState("All");

  const collections = [
    "All",
    "Harmattan / Coronation 2026",
    "Executive Atelier / Lagos",
    "Aso-Ebi Haute Couture",
  ];

  const filteredLooks =
    selectedCollection === "All"
      ? INITIAL_SAVED_LOOKS
      : INITIAL_SAVED_LOOKS.filter(
          (look) => look.collection === selectedCollection
        );

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111] font-sans flex flex-col">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E2DC] px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/studio"
            className="flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#66645F] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to AI Studio</span>
          </Link>
          <div className="h-4 w-px bg-[#E5E2DC]" />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
              PERSONAL WARDROBE VAULT &bull; CLIENT ARCHIVE
            </span>
            <h1 className="text-sm font-serif text-[#111111] font-semibold">
              Curated Lookbook & Taste DNA Repository
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center space-x-1.5 text-xs px-3.5 py-1.5 border border-[#E5E2DC] hover:border-black bg-white transition-all"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#236B4A]" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Share Lookbook</span>
              </>
            )}
          </button>

          <a
            href="/api/training/export"
            download
            className="flex items-center space-x-1.5 text-xs bg-[#111111] hover:bg-[#C5A059] text-white px-4 py-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Export LoRA Dataset (.jsonl)</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-8 space-y-8">
        {/* Editorial Profile Banner */}
        <div className="border border-[#E5E2DC] bg-white p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                CALIBRATED STYLE DNA PROFILE
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-serif text-[#111111]">
              Ceremonial Grandeur &bull; Architectural Tailoring
            </h2>
            <p className="text-xs text-[#66645F] leading-relaxed">
              Your AI taste model is calibrated across 14 fitting interactions. Top affinities: Handwoven Iseyin Aso-Oke, Austrian Getzner Brocade, Emerald Green, and Sharp Geometric plackets.
            </p>
          </div>

          <div className="flex items-center space-x-4 border-l border-[#E5E2DC] pl-6">
            <div className="text-center">
              <span className="text-3xl font-serif text-[#111111] font-medium block">
                98.5%
              </span>
              <span className="text-[10px] font-mono uppercase text-[#C5A059]">
                Style DNA Match
              </span>
            </div>
            <div className="h-8 w-px bg-[#E5E2DC]" />
            <div className="text-center">
              <span className="text-3xl font-serif text-[#111111] font-medium block">
                {INITIAL_SAVED_LOOKS.length}
              </span>
              <span className="text-[10px] font-mono uppercase text-[#66645F]">
                Saved Concepts
              </span>
            </div>
          </div>
        </div>

        {/* Collection Filter Tabs */}
        <div className="flex items-center space-x-2 border-b border-[#E5E2DC] pb-3 overflow-x-auto">
          {collections.map((coll) => (
            <button
              key={coll}
              type="button"
              onClick={() => setSelectedCollection(coll)}
              className={`text-xs px-4 py-1.5 transition-all whitespace-nowrap uppercase tracking-wider font-medium ${
                selectedCollection === coll
                  ? "bg-[#111111] text-white"
                  : "bg-transparent text-[#66645F] hover:text-[#111111]"
              }`}
            >
              {coll}
            </button>
          ))}
        </div>

        {/* Lookbook Garment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              className="border border-[#E5E2DC] bg-white group hover:border-[#111111] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/5 w-full overflow-hidden bg-[#F0EDE7]">
                  <Image
                    src={look.imageUrl}
                    alt={look.name}
                    fill
                    unoptimized
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1">
                    {look.collection}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#C5A059] text-white text-[10px] font-mono px-2 py-1 font-bold">
                    {look.matchScore}% Match
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#C5A059]">
                    <span>{look.silhouette}</span>
                    <span>{look.date}</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#111111] font-semibold leading-snug">
                    {look.name}
                  </h3>
                  <p className="text-xs text-[#66645F] line-clamp-2 leading-relaxed">
                    {look.prompt}
                  </p>
                  <div className="pt-2 border-t border-[#E5E2DC] flex items-center justify-between text-xs">
                    <span className="text-[#66645F]">{look.fabric}</span>
                    <span className="font-mono font-bold text-[#111111]">
                      {formatNaira(look.nairaQuote)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center space-x-2">
                <Link
                  href="/studio"
                  className="flex-1 text-center border border-[#111111] hover:bg-[#111111] hover:text-white py-2 text-xs uppercase tracking-wider font-semibold transition-all"
                >
                  Open in Studio
                </Link>
                <Link
                  href={`/#tailors`}
                  className="px-3 py-2 border border-[#E5E2DC] hover:border-black text-[#111111] transition-all"
                  title="Commission Tailor Guild"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
