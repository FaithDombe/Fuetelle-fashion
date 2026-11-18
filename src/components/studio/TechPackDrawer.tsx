"use client";

import { X, Scissors, Layers, ShieldCheck, Download, Sparkles } from "lucide-react";
import type { TechPackBreakdown } from "@/lib/types/atelier";
import { formatNaira } from "@/lib/utils";

interface TechPackDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  techPack: TechPackBreakdown;
  designId: string;
}

export default function TechPackDrawer({
  isOpen,
  onClose,
  techPack,
  designId,
}: TechPackDrawerProps) {
  if (!isOpen) return null;

  const handleDownloadSpec = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(techPack, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `FUETELLE-TECHPACK-${designId}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#FAF9F6] h-full shadow-2xl flex flex-col border-l border-[#E5E2DC] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#FAF9F6] px-6 py-5 border-b border-[#E5E2DC] flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                HAUTE COUTURE PRODUCTION SPECIFICATION
              </span>
            </div>
            <h2 className="text-xl font-serif text-[#111111] font-normal mt-0.5">
              {techPack.garmentName}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 border border-[#E5E2DC] hover:border-black transition-colors"
            aria-label="Close Tech Pack"
          >
            <X className="w-4 h-4 text-[#111111]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Atelier Stamp Bar */}
          <div className="bg-[#F0EDE7] border border-[#E5E2DC] p-3 flex items-center justify-between text-xs font-mono">
            <span className="text-[#66645F]">ATELIER SPEC ID:</span>
            <span className="text-[#111111] font-bold">{designId}</span>
          </div>

          {/* 1. Yardage Estimates */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold flex items-center space-x-2">
              <Layers className="w-4 h-4 text-[#C5A059]" />
              <span>Material & Yardage Breakdown</span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="border border-[#E5E2DC] bg-white p-3 text-center">
                <span className="text-[10px] font-mono text-[#66645F] uppercase block">
                  Shell Fabric
                </span>
                <span className="text-lg font-serif text-[#111111] font-medium">
                  {techPack.yardageEstimate.primaryFabricYards} yds
                </span>
                <span className="text-[9px] text-[#C5A059] block mt-0.5 truncate">
                  {techPack.yardageEstimate.fabricName}
                </span>
              </div>

              <div className="border border-[#E5E2DC] bg-white p-3 text-center">
                <span className="text-[10px] font-mono text-[#66645F] uppercase block">
                  Lining Silk
                </span>
                <span className="text-lg font-serif text-[#111111] font-medium">
                  {techPack.yardageEstimate.liningYards} yds
                </span>
                <span className="text-[9px] text-[#66645F] block mt-0.5">
                  Habotai Silk
                </span>
              </div>

              <div className="border border-[#E5E2DC] bg-white p-3 text-center">
                <span className="text-[10px] font-mono text-[#66645F] uppercase block">
                  Canvas Stay
                </span>
                <span className="text-lg font-serif text-[#111111] font-medium">
                  {techPack.yardageEstimate.interfacingYards} yds
                </span>
                <span className="text-[9px] text-[#66645F] block mt-0.5">
                  Tailor Canvas
                </span>
              </div>
            </div>
          </div>

          {/* 2. Construction & Stitch Schematics */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold flex items-center space-x-2">
              <Scissors className="w-4 h-4 text-[#C5A059]" />
              <span>Tailoring Architecture & Seams</span>
            </h3>
            <div className="border border-[#E5E2DC] bg-white p-4 space-y-2">
              <div className="text-[11px] font-mono text-[#C5A059] uppercase">
                Stitch Density: {techPack.stitchDensity}
              </div>
              <ul className="space-y-2 pt-1">
                {techPack.constructionNotes.map((note, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-[#111111] flex items-start space-x-2 leading-relaxed"
                  >
                    <span className="text-[#C5A059] mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Styling Pairings & Accessories */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Curated Styling & Accessories</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-[#E5E2DC] bg-white p-3">
                <span className="text-[10px] font-mono uppercase text-[#66645F] block mb-1">
                  Styling Pairings
                </span>
                <ul className="text-xs space-y-1 text-[#111111]">
                  {techPack.stylingPairings.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="w-1 h-1 bg-[#C5A059] rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#E5E2DC] bg-white p-3">
                <span className="text-[10px] font-mono uppercase text-[#66645F] block mb-1">
                  Atelier Accents
                </span>
                <ul className="text-xs space-y-1 text-[#111111]">
                  {techPack.complementaryAccessories.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="w-1 h-1 bg-[#C5A059] rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Itemized Naira Quotation */}
          <div className="border border-[#C5A059]/40 bg-[#FAF9F6] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold">
                Itemized Atelier Quotation
              </span>
              <span className="text-[10px] font-mono text-[#236B4A] bg-[#236B4A]/10 px-2 py-0.5">
                Milestone Escrow Ready
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#66645F]">
                <span>Master Bespoke Tailoring:</span>
                <span className="font-mono text-[#111111]">
                  {formatNaira(techPack.itemizedNairaQuote.baseTailoring)}
                </span>
              </div>
              <div className="flex justify-between text-[#66645F]">
                <span>Curated Luxury Textiles:</span>
                <span className="font-mono text-[#111111]">
                  {formatNaira(techPack.itemizedNairaQuote.luxuryTextiles)}
                </span>
              </div>
              <div className="flex justify-between text-[#66645F]">
                <span>Artisan Hand Embroidery:</span>
                <span className="font-mono text-[#111111]">
                  {formatNaira(techPack.itemizedNairaQuote.artisanEmbroidery)}
                </span>
              </div>
              <div className="flex justify-between text-[#66645F]">
                <span>2 In-Person Fittings & Inspection:</span>
                <span className="font-mono text-[#111111]">
                  {formatNaira(
                    techPack.itemizedNairaQuote.fittingsAndQualityControl
                  )}
                </span>
              </div>
              <div className="border-t border-[#E5E2DC] pt-2 flex justify-between text-sm font-semibold text-[#111111]">
                <span>Estimated Total Commission:</span>
                <span className="font-mono text-[#C5A059]">
                  {formatNaira(techPack.itemizedNairaQuote.totalNaira)}
                </span>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          <div className="border border-[#E5E2DC] bg-white p-3 text-xs text-[#66645F] flex items-start space-x-2">
            <ShieldCheck className="w-4 h-4 text-[#236B4A] shrink-0 mt-0.5" />
            <span>{techPack.careInstructions}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-[#FAF9F6] p-6 border-t border-[#E5E2DC] flex items-center space-x-3">
          <button
            type="button"
            onClick={handleDownloadSpec}
            className="flex-1 flex items-center justify-center space-x-2 border border-[#E5E2DC] hover:border-black bg-white px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#111111] transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Spec JSON</span>
          </button>
        </div>
      </div>
    </div>
  );
}
