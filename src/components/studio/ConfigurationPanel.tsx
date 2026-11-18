"use client";

import { useState } from "react";
import Image from "next/image";
import {
  GARMENT_ARCHETYPES,
  FABRIC_SWATCHES,
  SILHOUETTE_OPTIONS,
  HARDWARE_OPTIONS,
  STYLE_PRESETS,
  type GarmentArchetype,
  type FabricSwatch,
  type SilhouetteOption,
  type HardwareOption,
} from "@/lib/studio-data";
import { Sparkles, Layers, Scissors, Sliders, RefreshCw, Check } from "lucide-react";

interface ConfigurationPanelProps {
  archetype: GarmentArchetype;
  setArchetype: (archetype: GarmentArchetype) => void;
  silhouette: SilhouetteOption;
  setSilhouette: (silhouette: SilhouetteOption) => void;
  fabric: FabricSwatch;
  setFabric: (fabric: FabricSwatch) => void;
  hardware: HardwareOption;
  setHardware: (hardware: HardwareOption) => void;
  customPrompt: string;
  setCustomPrompt: (prompt: string) => void;
  isAiGenerating: boolean;
  onSynthesizeAi: () => void;
}

type TabType = "archetype" | "silhouette" | "fabric" | "hardware" | "ai";

export default function ConfigurationPanel({
  archetype,
  setArchetype,
  silhouette,
  setSilhouette,
  fabric,
  setFabric,
  hardware,
  setHardware,
  customPrompt,
  setCustomPrompt,
  isAiGenerating,
  onSynthesizeAi,
}: ConfigurationPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>("archetype");

  const availableSilhouettes = SILHOUETTE_OPTIONS[archetype.id] || [];

  const handleArchetypeChange = (newArchetype: GarmentArchetype) => {
    setArchetype(newArchetype);
    const newSilhouettes = SILHOUETTE_OPTIONS[newArchetype.id];
    if (newSilhouettes && newSilhouettes.length > 0) {
      setSilhouette(newSilhouettes[0]);
    }
  };

  return (
    <div className="w-full lg:w-[480px] xl:w-[520px] flex-shrink-0 bg-[#F9F8F6] border-l border-[#E5E2DC] flex flex-col h-full overflow-hidden">
      {/* Configuration Tabs Header */}
      <div className="flex border-b border-[#E5E2DC] overflow-x-auto no-scrollbar bg-[#F0EDE7]/50">
        <button
          type="button"
          onClick={() => setActiveTab("archetype")}
          className={`flex-1 min-w-[90px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "archetype"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <span>Garment</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("silhouette")}
          className={`flex-1 min-w-[90px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "silhouette"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <Scissors className="w-3 h-3 text-[#C5A880]" />
          <span>Cut</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("fabric")}
          className={`flex-1 min-w-[90px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "fabric"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <Layers className="w-3 h-3 text-[#C5A880]" />
          <span>Fabric</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("hardware")}
          className={`flex-1 min-w-[90px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "hardware"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <Sliders className="w-3 h-3 text-[#C5A880]" />
          <span>Details</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ai")}
          className={`flex-1 min-w-[90px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "ai"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <Sparkles className="w-3 h-3 text-[#C5A880]" />
          <span>AI Concept</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* TAB 1: ARCHETYPE */}
        {activeTab === "archetype" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-1">
                Select Base Archetype
              </h4>
              <p className="text-xs text-[#66645F] font-sans">
                Choose the structural foundation for your bespoke commission.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {GARMENT_ARCHETYPES.map((item) => {
                const isSelected = archetype.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleArchetypeChange(item)}
                    className={`text-left border transition-all duration-300 relative group overflow-hidden flex flex-col ${
                      isSelected
                        ? "border-[#0B0B0C] ring-1 ring-[#0B0B0C] bg-[#F0EDE7]"
                        : "border-[#E5E2DC] hover:border-[#C5A880] bg-[#F9F8F6]"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E5E2DC]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="200px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-[#0B0B0C] text-[#F9F8F6] rounded-full flex items-center justify-center shadow-md">
                          <Check className="w-3 h-3 text-[#C5A880]" />
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <span className="text-[10px] tracking-wider uppercase text-[#C5A880] font-sans block mb-0.5">
                        {item.category}
                      </span>
                      <h5 className="font-serif text-sm text-[#0B0B0C] font-medium leading-tight line-clamp-1">
                        {item.name}
                      </h5>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: SILHOUETTE */}
        {activeTab === "silhouette" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-1">
                Silhouette & Proportions
              </h4>
              <p className="text-xs text-[#66645F] font-sans">
                Tailor the architectural line and posture for {archetype.name}.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {availableSilhouettes.map((opt) => {
                const isSelected = silhouette.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSilhouette(opt)}
                    className={`w-full text-left p-4 border transition-all duration-300 relative ${
                      isSelected
                        ? "border-[#0B0B0C] bg-[#F0EDE7] ring-1 ring-[#0B0B0C]"
                        : "border-[#E5E2DC] bg-[#F9F8F6] hover:border-[#C5A880]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif text-base text-[#0B0B0C] font-medium">
                        {opt.name}
                      </span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#C5A880]" />
                      )}
                    </div>
                    <p className="text-xs text-[#66645F] font-sans leading-relaxed">
                      {opt.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: FABRICS */}
        {activeTab === "fabric" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-1">
                Luxury Mill & Textile Selection
              </h4>
              <p className="text-xs text-[#66645F] font-sans">
                Select from verified European and heritage artisan mills.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {FABRIC_SWATCHES.map((swatch) => {
                const isSelected = fabric.id === swatch.id;
                return (
                  <button
                    key={swatch.id}
                    type="button"
                    onClick={() => setFabric(swatch)}
                    className={`w-full text-left p-4 border transition-all duration-300 flex items-start space-x-4 ${
                      isSelected
                        ? "border-[#0B0B0C] bg-[#F0EDE7] ring-1 ring-[#0B0B0C]"
                        : "border-[#E5E2DC] bg-[#F9F8F6] hover:border-[#C5A880]"
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-none border border-black/10 flex-shrink-0 shadow-inner"
                      style={{ backgroundColor: swatch.colorHex }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-serif text-base text-[#0B0B0C] font-medium truncate">
                          {swatch.name}
                        </span>
                        {isSelected && (
                          <Check className="w-4 h-4 text-[#C5A880] flex-shrink-0 ml-2" />
                        )}
                      </div>
                      <div className="text-[10px] text-[#C5A880] tracking-wider uppercase font-sans mb-1">
                        {swatch.origin} &bull; {swatch.weightGsm} GSM &bull; {swatch.drapeFactor}
                      </div>
                      <p className="text-xs text-[#66645F] font-sans line-clamp-1">
                        {swatch.textureDescription}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: HARDWARE & DETAILS */}
        {activeTab === "hardware" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-1">
                Atelier Hardware & Closures
              </h4>
              <p className="text-xs text-[#66645F] font-sans">
                Fine details tailored to elevate the finished garment.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {HARDWARE_OPTIONS.map((item) => {
                const isSelected = hardware.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHardware(item)}
                    className={`w-full text-left p-4 border transition-all duration-300 flex items-center justify-between ${
                      isSelected
                        ? "border-[#0B0B0C] bg-[#F0EDE7] ring-1 ring-[#0B0B0C]"
                        : "border-[#E5E2DC] bg-[#F9F8F6] hover:border-[#C5A880]"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span
                        className="w-5 h-5 rounded-full border border-black/20"
                        style={{ backgroundColor: item.colorHex }}
                      />
                      <span className="font-serif text-sm text-[#0B0B0C]">
                        {item.name}
                      </span>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#C5A880]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5: AI CONCEPT PROMPTER */}
        {activeTab === "ai" && (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[#C5A880] text-xs font-sans uppercase tracking-wider font-medium mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Silhouette Synthesizer</span>
              </div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal">
                Refine with Creative Vision
              </h4>
              <p className="text-xs text-[#66645F] font-sans mt-1">
                Describe stylistic nuances, inspirations, or occasion requirements.
              </p>
            </div>

            {/* Prompt Textarea */}
            <div>
              <label htmlFor="ai-prompt-input" className="block text-[11px] uppercase tracking-wider text-[#66645F] font-sans mb-1.5 font-medium">
                Concept Prompt
              </label>
              <textarea
                id="ai-prompt-input"
                rows={4}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="e.g. Asymmetric wrap silhouette with architectural cascading lapels inspired by Japanese brutalism in charcoal slate..."
                className="w-full p-3.5 text-xs font-sans bg-[#F9F8F6] border border-[#E5E2DC] focus:border-[#C5A880] focus:outline-none transition-colors leading-relaxed placeholder:text-[#66645F]/50 resize-none"
              />
            </div>

            {/* Style Presets */}
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#66645F] font-sans mb-2 font-medium">
                Atelier Aesthetic Presets
              </span>
              <div className="flex flex-wrap gap-2">
                {STYLE_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      const newPrompt = customPrompt ? `${customPrompt}, ${preset}` : preset;
                      setCustomPrompt(newPrompt);
                    }}
                    className="px-3 py-1.5 bg-[#F0EDE7] hover:bg-[#C5A880]/20 text-[11px] text-[#0B0B0C] font-sans border border-[#E5E2DC] hover:border-[#C5A880] transition-colors"
                  >
                    + {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Synthesize Button */}
            <button
              type="button"
              disabled={isAiGenerating}
              onClick={onSynthesizeAi}
              className="w-full py-3.5 px-4 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.18em] font-sans font-medium hover:bg-[#66645F] transition-all duration-300 border border-[#0B0B0C] flex items-center justify-center space-x-2 disabled:opacity-60"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#C5A880] ${isAiGenerating ? "animate-spin" : ""}`} />
              <span>{isAiGenerating ? "Synthesizing Silhouettes..." : "Synthesize AI Variation"}</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Technical Spec Snapshot */}
      <div className="p-4 bg-[#F0EDE7] border-t border-[#E5E2DC] flex items-center justify-between text-xs font-sans">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#66645F] block">
            Crafting Time
          </span>
          <span className="font-serif text-sm text-[#0B0B0C]">
            ~{archetype.baseCraftingHours} atelier hrs
          </span>
        </div>
        <div className="h-6 w-[1px] bg-[#E5E2DC]" />
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#66645F] block">
            Yardage
          </span>
          <span className="font-serif text-sm text-[#0B0B0C]">
            {archetype.baseYardage} meters
          </span>
        </div>
        <div className="h-6 w-[1px] bg-[#E5E2DC]" />
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#66645F] block">
            Milestone Tier
          </span>
          <span className="font-serif text-sm text-[#236B4A]">
            Bespoke Atelier
          </span>
        </div>
      </div>
    </div>
  );
}
