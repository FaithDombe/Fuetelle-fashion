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
import { Sparkles, Layers, Scissors, Sliders, RefreshCw, Check, PenTool } from "lucide-react";

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
  onSelectPromptPreset: (promptText: string, archetypeId: string, fabricId: string) => void;
}

type TabType = "prompt" | "archetype" | "silhouette" | "fabric" | "hardware";

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
  onSelectPromptPreset,
}: ConfigurationPanelProps) {
  const [activeTab, setActiveTab] = useState<TabType>("prompt");

  const availableSilhouettes = SILHOUETTE_OPTIONS[archetype.id] || [];

  const handleArchetypeChange = (newArchetype: GarmentArchetype) => {
    setArchetype(newArchetype);
    const newSilhouettes = SILHOUETTE_OPTIONS[newArchetype.id];
    if (newSilhouettes && newSilhouettes.length > 0) {
      setSilhouette(newSilhouettes[0]);
    }
  };

  const PROMPT_SUGGESTIONS = [
    {
      title: "Grand Emerald & Gold Agbada",
      prompt: "3-piece ceremonial emerald green Aso-Oke Agbada with asymmetric gold filigree chest embroidery, wide draped sleeve span, and matching fila cap for a Lagos wedding",
      archetypeId: "agbada",
      fabricId: "aso-oke",
    },
    {
      title: "Minimalist Lekki Senator Suit",
      prompt: "Sharp tailored midnight navy Senator suit crafted from tropical wool with concealed button fly placket, 3.5cm standing mandarin collar, and gold wrist snaps",
      archetypeId: "senator",
      fabricId: "english-wool",
    },
    {
      title: "Couture Corseted Aso-Ebi Gown",
      prompt: "Internal boned French lace bustier gown in champagne bronze with illusion sheer neckline, structured waist peplum, and dramatic sweeping mermaid train",
      archetypeId: "aso-ebi-gown",
      fabricId: "french-solstiss",
    },
    {
      title: "Royal Abuja Getzner Kaftan",
      prompt: "Floor-length royal ivory Kaftan made from authentic Austrian Getzner brocade with laser-sharp geometric neck filigree and clean side vents",
      archetypeId: "kaftan",
      fabricId: "austrian-getzner",
    },
    {
      title: "Lion-Crest Velvet Isi-Agu Blazer",
      prompt: "Modern double-breasted evening blazer tailored from ceremonial lion-crest velvet with wide peak lapels, horn buttons, and soft Neapolitan shoulders",
      archetypeId: "isi-agu",
      fabricId: "duchess-satin",
    },
  ];

  return (
    <div className="w-full lg:w-[480px] xl:w-[520px] flex-shrink-0 bg-[#F9F8F6] border-l border-[#E5E2DC] flex flex-col h-full overflow-hidden">
      {/* Configuration Tabs Header */}
      <div className="flex border-b border-[#E5E2DC] overflow-x-auto no-scrollbar bg-[#F0EDE7]/50">
        <button
          type="button"
          onClick={() => setActiveTab("prompt")}
          className={`flex-1 min-w-[100px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-semibold text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "prompt"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>AI Prompt</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("archetype")}
          className={`flex-1 min-w-[85px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "archetype"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <span>Base</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("silhouette")}
          className={`flex-1 min-w-[85px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
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
          className={`flex-1 min-w-[85px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "fabric"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <Layers className="w-3 h-3 text-[#C5A880]" />
          <span>Textile</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("hardware")}
          className={`flex-1 min-w-[85px] py-3.5 px-3 text-[11px] font-sans uppercase tracking-wider font-medium text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === "hardware"
              ? "border-[#0B0B0C] text-[#0B0B0C] bg-[#F9F8F6]"
              : "border-transparent text-[#66645F] hover:text-[#0B0B0C]"
          }`}
        >
          <Sliders className="w-3 h-3 text-[#C5A880]" />
          <span>Details</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* TAB 1: PROMPT-TO-SKETCH ENGINE (HERO FEATURE) */}
        {activeTab === "prompt" && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[#C5A880] text-xs font-sans uppercase tracking-wider font-semibold mb-1">
                <PenTool className="w-3.5 h-3.5" />
                <span>Prompt-to-Sketch Engine</span>
              </div>
              <h4 className="font-serif text-2xl text-[#0B0B0C] font-normal leading-tight">
                Describe Your Outfit & Let AI Draft the Sketch
              </h4>
              <p className="text-xs text-[#66645F] font-sans mt-1.5 leading-relaxed">
                Describe your desired Nigerian garment in plain words. Specify the cut, color, embroidery motif, fabric, or occasion — our AI will draft a technical fashion croquis sketch.
              </p>
            </div>

            {/* Prompt Textarea */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="design-prompt" className="text-[11px] uppercase tracking-wider text-[#66645F] font-sans font-medium">
                  Garment Description Prompt
                </label>
                <span className="text-[10px] text-[#C5A880] font-mono">
                  Natural Language Prompting
                </span>
              </div>
              <textarea
                id="design-prompt"
                rows={4}
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="e.g. 3-piece emerald green and champagne gold ceremonial Agbada with asymmetric filigree chest embroidery, wide draped sleeve span, and matching fila cap..."
                className="w-full p-4 text-xs font-sans bg-[#F9F8F6] border-2 border-[#0B0B0C] focus:border-[#C5A880] focus:outline-none transition-colors leading-relaxed placeholder:text-[#66645F]/50 resize-none shadow-sm"
              />
            </div>

            {/* AI Generate Button */}
            <button
              type="button"
              disabled={isAiGenerating}
              onClick={onSynthesizeAi}
              className="w-full py-4 px-5 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.2em] font-sans font-semibold hover:bg-[#66645F] transition-all duration-300 border border-[#0B0B0C] flex items-center justify-center space-x-2.5 disabled:opacity-60 shadow-md group"
            >
              <RefreshCw className={`w-4 h-4 text-[#C5A880] ${isAiGenerating ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`} />
              <span>{isAiGenerating ? "Drafting Architectural Sketch..." : "Generate Couture Sketch ✦"}</span>
            </button>

            {/* Prompt Inspiration Presets */}
            <div className="pt-2">
              <span className="block text-[11px] uppercase tracking-wider text-[#66645F] font-sans mb-3 font-semibold">
                Click a Prompt Template to Try:
              </span>
              <div className="space-y-2.5">
                {PROMPT_SUGGESTIONS.map((sug) => (
                  <button
                    key={sug.title}
                    type="button"
                    onClick={() => onSelectPromptPreset(sug.prompt, sug.archetypeId, sug.fabricId)}
                    className="w-full text-left p-3 bg-[#F0EDE7]/60 hover:bg-[#F0EDE7] border border-[#E5E2DC] hover:border-[#C5A880] transition-colors group flex items-start space-x-2.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif text-xs text-[#0B0B0C] font-medium block">
                        {sug.title}
                      </span>
                      <p className="text-[11px] text-[#66645F] font-sans line-clamp-2 mt-0.5">
                        {sug.prompt}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Style Modifier Chips */}
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#66645F] font-sans mb-2 font-medium">
                Add Nigerian Aesthetic Modifiers:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {STYLE_PRESETS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      const newPrompt = customPrompt ? `${customPrompt}, ${preset}` : preset;
                      setCustomPrompt(newPrompt);
                    }}
                    className="px-2.5 py-1 bg-[#F9F8F6] hover:bg-[#C5A880]/20 text-[10px] text-[#0B0B0C] font-sans border border-[#E5E2DC] hover:border-[#C5A880] transition-colors"
                  >
                    + {preset}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ARCHETYPE BASE */}
        {activeTab === "archetype" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-1">
                Select Nigerian Garment Base
              </h4>
              <p className="text-xs text-[#66645F] font-sans">
                Select your structural silhouette foundation.
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
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] tracking-wider uppercase text-[#C5A880] font-sans block">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-mono text-[#236B4A]">
                          ₦{(item.basePriceNaira / 1000).toFixed(0)}k
                        </span>
                      </div>
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

        {/* TAB 3: SILHOUETTE */}
        {activeTab === "silhouette" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-1">
                Silhouette & Drape Cut
              </h4>
              <p className="text-xs text-[#66645F] font-sans">
                Calibrate the arm span, neckline, and body cut for {archetype.name}.
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

        {/* TAB 4: TEXTILE */}
        {activeTab === "fabric" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-1">
                Authentic Nigerian & European Textiles
              </h4>
              <p className="text-xs text-[#66645F] font-sans">
                Every fabric is certified genuine: Iseyin Aso-Oke, Austrian Getzner, or fine wool.
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
                        {swatch.origin} &bull; {swatch.weightGsm} GSM
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

        {/* TAB 5: HARDWARE */}
        {activeTab === "hardware" && (
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-xl text-[#0B0B0C] font-normal mb-1">
                Atelier Hardware & Finishes
              </h4>
              <p className="text-xs text-[#66645F] font-sans">
                Fine details, crest buttons, and artisanal accents.
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
            Authentic Yardage
          </span>
          <span className="font-serif text-sm text-[#0B0B0C]">
            {archetype.baseYardage} meters
          </span>
        </div>
        <div className="h-6 w-[1px] bg-[#E5E2DC]" />
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#66645F] block">
            Estimate
          </span>
          <span className="font-serif text-sm text-[#236B4A]">
            ₦{archetype.basePriceNaira.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
