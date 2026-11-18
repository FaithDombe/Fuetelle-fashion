"use client";

import Image from "next/image";
import { Sparkles, Layers, Scissors, MapPin } from "lucide-react";
import type { GarmentArchetype, FabricSwatch, SilhouetteOption, HardwareOption } from "@/lib/studio-data";

interface GarmentCanvasProps {
  archetype: GarmentArchetype;
  silhouette: SilhouetteOption;
  fabric: FabricSwatch;
  hardware: HardwareOption;
  customPrompt: string;
  isAiGenerating: boolean;
}

export default function GarmentCanvas({
  archetype,
  silhouette,
  fabric,
  hardware,
  customPrompt,
  isAiGenerating,
}: GarmentCanvasProps) {
  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[640px] bg-[#F0EDE7]/60 border border-[#E5E2DC] flex items-center justify-center overflow-hidden p-6 lg:p-10 select-none">
      {/* Background atelier grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0B0B0C 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Main Garment Visualization Card */}
      <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden bg-[#F9F8F6] border border-[#E5E2DC] shadow-[0_20px_60px_rgba(11,11,12,0.08)] transition-all duration-500">
        <Image
          src={archetype.image}
          alt={archetype.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className={`object-cover object-center transition-all duration-700 ${
            isAiGenerating ? "scale-105 filter blur-[2px] opacity-70" : "scale-100 opacity-100"
          }`}
        />

        {/* Gradient shadow for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-transparent to-black/25 pointer-events-none" />

        {/* Top Left: Atelier Identification Badge */}
        <div className="absolute top-4 left-4 bg-[#F9F8F6]/95 backdrop-blur-md px-3.5 py-1.5 border border-[#E5E2DC] text-[10px] tracking-[0.2em] uppercase font-sans text-[#0B0B0C] flex items-center space-x-1.5 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#C5A880]" />
          <span>Nigerian Atelier Model</span>
        </div>

        {/* Top Right: Active Fabric Swatch Preview Indicator */}
        <div className="absolute top-4 right-4 bg-[#0B0B0C]/85 backdrop-blur-md text-[#F9F8F6] px-3 py-1.5 border border-white/10 flex items-center space-x-2 text-[10px] font-sans tracking-wider uppercase">
          <span
            className="w-3 h-3 rounded-full border border-white/40 shadow-sm"
            style={{ backgroundColor: fabric.colorHex }}
          />
          <span>{fabric.name.split(" ")[0]}</span>
        </div>

        {/* Interactive Annotation Pins */}
        <div className="absolute top-1/4 left-1/3 group cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#C5A880]/90 border border-white flex items-center justify-center animate-pulse">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0B0B0C]" />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0B0B0C] text-[#F9F8F6] text-[10px] px-2 py-1 whitespace-nowrap pointer-events-none tracking-wider uppercase font-sans">
            Cut: {silhouette.name.split(" ")[0]}
          </div>
        </div>

        <div className="absolute top-1/2 right-1/4 group cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-[#C5A880]/90 border border-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0B0B0C]" />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0B0B0C] text-[#F9F8F6] text-[10px] px-2 py-1 whitespace-nowrap pointer-events-none tracking-wider uppercase font-sans">
            Hardware: {hardware.name.split(" ")[0]}
          </div>
        </div>

        {/* Bottom Specs Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-[#0B0B0C]/90 backdrop-blur-md p-4 text-[#F9F8F6] border border-white/10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#C5A880] mb-1 font-sans">
            <span>{archetype.category}</span>
            <span className="font-mono text-[#236B4A] bg-[#236B4A]/10 px-2 py-0.5 text-white">
              Est. ₦{archetype.basePriceNaira.toLocaleString()}
            </span>
          </div>
          <h3 className="font-serif text-xl text-[#F9F8F6] font-normal leading-snug">
            {archetype.name}
          </h3>
          <p className="text-xs text-[#F9F8F6]/75 font-sans mt-0.5 line-clamp-1">
            {silhouette.name} &bull; {fabric.name}
          </p>

          {customPrompt && (
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center space-x-1.5 text-[10px] text-[#C5A880] italic font-sans truncate">
              <Sparkles className="w-2.5 h-2.5 flex-shrink-0" />
              <span className="truncate">&ldquo;{customPrompt}&rdquo;</span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Specs Pill (Desktop) */}
      <div className="hidden xl:flex absolute bottom-6 left-6 bg-[#F9F8F6]/95 backdrop-blur-md border border-[#E5E2DC] p-3 shadow-md space-x-5 text-xs font-sans text-[#66645F]">
        <div className="flex items-center space-x-2">
          <Scissors className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>{archetype.baseCraftingHours} atelier hrs</span>
        </div>
        <div className="h-4 w-[1px] bg-[#E5E2DC]" />
        <div className="flex items-center space-x-2">
          <Layers className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>{archetype.baseYardage}m authentic yardage</span>
        </div>
        <div className="h-4 w-[1px] bg-[#E5E2DC]" />
        <div className="flex items-center space-x-1 text-[#236B4A]">
          <MapPin className="w-3 h-3" />
          <span>Lagos &bull; Abuja Guild Verified</span>
        </div>
      </div>
    </div>
  );
}
