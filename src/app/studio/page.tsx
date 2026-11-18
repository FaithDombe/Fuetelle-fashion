"use client";

import { useState } from "react";
import StudioHeader from "@/components/studio/StudioHeader";
import GarmentCanvas from "@/components/studio/GarmentCanvas";
import ConfigurationPanel from "@/components/studio/ConfigurationPanel";
import CommissionModal from "@/components/studio/CommissionModal";
import {
  GARMENT_ARCHETYPES,
  FABRIC_SWATCHES,
  SILHOUETTE_OPTIONS,
  HARDWARE_OPTIONS,
  type GarmentArchetype,
  type FabricSwatch,
  type SilhouetteOption,
  type HardwareOption,
} from "@/lib/studio-data";

export default function StudioPage() {
  const [designName, setDesignName] = useState("Grand Imperial Agbada No. 01");
  const [archetype, setArchetype] = useState<GarmentArchetype>(GARMENT_ARCHETYPES[0]);
  const [silhouette, setSilhouette] = useState<SilhouetteOption>(
    SILHOUETTE_OPTIONS[GARMENT_ARCHETYPES[0].id][0]
  );
  const [fabric, setFabric] = useState<FabricSwatch>(FABRIC_SWATCHES[0]);
  const [hardware, setHardware] = useState<HardwareOption>(HARDWARE_OPTIONS[0]);
  const [customPrompt, setCustomPrompt] = useState(
    "3-piece ceremonial emerald green Aso-Oke Agbada with asymmetric gold filigree chest embroidery, wide draped sleeve span, and matching fila cap"
  );
  const [viewMode, setViewMode] = useState<"sketch" | "render">("sketch");
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [commissionModalOpen, setCommissionModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const parsePromptAndApply = (prompt: string) => {
    const lower = prompt.toLowerCase();
    let matchedArchetype = archetype;
    let matchedFabric = fabric;

    // Detect Archetype from prompt keywords
    if (lower.includes("senator")) {
      matchedArchetype = GARMENT_ARCHETYPES.find((a) => a.id === "senator") || archetype;
      matchedFabric = FABRIC_SWATCHES.find((f) => f.id === "english-wool") || fabric;
      setDesignName("Modern Lekki Senator Sketch");
    } else if (lower.includes("agbada")) {
      matchedArchetype = GARMENT_ARCHETYPES.find((a) => a.id === "agbada") || archetype;
      matchedFabric = FABRIC_SWATCHES.find((f) => f.id === "aso-oke") || fabric;
      setDesignName("Grand Imperial Agbada Sketch");
    } else if (lower.includes("aso-ebi") || lower.includes("gown") || lower.includes("corset")) {
      matchedArchetype = GARMENT_ARCHETYPES.find((a) => a.id === "aso-ebi-gown") || archetype;
      matchedFabric = FABRIC_SWATCHES.find((f) => f.id === "french-solstiss") || fabric;
      setDesignName("Couture Aso-Ebi Gown Sketch");
    } else if (lower.includes("kaftan")) {
      matchedArchetype = GARMENT_ARCHETYPES.find((a) => a.id === "kaftan") || archetype;
      matchedFabric = FABRIC_SWATCHES.find((f) => f.id === "austrian-getzner") || fabric;
      setDesignName("Royal Getzner Kaftan Sketch");
    } else if (lower.includes("isi-agu") || lower.includes("blazer") || lower.includes("velvet")) {
      matchedArchetype = GARMENT_ARCHETYPES.find((a) => a.id === "isi-agu") || archetype;
      matchedFabric = FABRIC_SWATCHES.find((f) => f.id === "duchess-satin") || fabric;
      setDesignName("Modern Isi-Agu Blazer Sketch");
    } else if (lower.includes("suit")) {
      matchedArchetype = GARMENT_ARCHETYPES.find((a) => a.id === "bespoke-suit") || archetype;
      matchedFabric = FABRIC_SWATCHES.find((f) => f.id === "english-wool") || fabric;
      setDesignName("Executive Bespoke Suit Sketch");
    }

    setArchetype(matchedArchetype);
    setFabric(matchedFabric);

    const availableSilhouettes = SILHOUETTE_OPTIONS[matchedArchetype.id];
    if (availableSilhouettes && availableSilhouettes.length > 0) {
      setSilhouette(availableSilhouettes[0]);
    }
  };

  const handleSynthesizeAi = () => {
    setIsAiGenerating(true);
    setViewMode("sketch");
    setTimeout(() => {
      parsePromptAndApply(customPrompt);
      setIsAiGenerating(false);
      showToast("Couture technical sketch generated successfully from your prompt description.");
    }, 1100);
  };

  const handleSelectPromptPreset = (promptText: string, archetypeId: string, fabricId: string) => {
    setCustomPrompt(promptText);
    const foundArchetype = GARMENT_ARCHETYPES.find((a) => a.id === archetypeId);
    const foundFabric = FABRIC_SWATCHES.find((f) => f.id === fabricId);
    if (foundArchetype) setArchetype(foundArchetype);
    if (foundFabric) setFabric(foundFabric);

    if (foundArchetype) {
      const avail = SILHOUETTE_OPTIONS[foundArchetype.id];
      if (avail && avail.length > 0) setSilhouette(avail[0]);
    }

    setIsAiGenerating(true);
    setViewMode("sketch");
    setTimeout(() => {
      setIsAiGenerating(false);
      showToast(`Generated fashion sketch for ${foundArchetype?.name || "your creation"}.`);
    }, 900);
  };

  const handleExportSpec = () => {
    const specData = {
      platform: "FUETELLE ATELIER NIGERIA",
      designName,
      viewMode,
      archetype: archetype.name,
      category: archetype.category,
      basePriceNaira: archetype.basePriceNaira,
      currency: "NGN (₦)",
      silhouette: silhouette.name,
      silhouetteDescription: silhouette.description,
      fabric: {
        name: fabric.name,
        origin: fabric.origin,
        composition: fabric.composition,
        weightGsm: fabric.weightGsm,
        drape: fabric.drapeFactor,
      },
      hardware: hardware.name,
      estimatedAtelierHours: archetype.baseCraftingHours,
      recommendedYardageMeters: archetype.baseYardage,
      clientPrompt: customPrompt,
      croquisType: "Technical Fashion Illustration",
      guildLocations: ["Lagos (Island/Mainland)", "Abuja", "Port Harcourt", "Ibadan"],
      generatedTimestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(specData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${designName.toLowerCase().replace(/\s+/g, "-")}-sketch-spec.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Technical Sketch and Spec Tech-Pack exported successfully.");
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#0B0B0C] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#0B0B0C]">
      {/* Studio Header Bar */}
      <StudioHeader
        designName={designName}
        setDesignName={setDesignName}
        isAiGenerating={isAiGenerating}
        onOpenCommission={() => setCommissionModalOpen(true)}
        onExportSpec={handleExportSpec}
      />

      {/* Main Studio Workspace Grid */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Left / Center: Interactive Garment Canvas (Toggles between Sketch & African Model Render) */}
        <section className="flex-1 flex flex-col justify-center items-center overflow-hidden" aria-label="Garment Canvas">
          <GarmentCanvas
            archetype={archetype}
            silhouette={silhouette}
            fabric={fabric}
            hardware={hardware}
            customPrompt={customPrompt}
            isAiGenerating={isAiGenerating}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        </section>

        {/* Right: Studio Prompting Engine & Configuration Controls */}
        <section className="lg:h-[calc(100vh-80px)] flex flex-col" aria-label="Studio Controls">
          <ConfigurationPanel
            archetype={archetype}
            setArchetype={setArchetype}
            silhouette={silhouette}
            setSilhouette={setSilhouette}
            fabric={fabric}
            setFabric={setFabric}
            hardware={hardware}
            setHardware={setHardware}
            customPrompt={customPrompt}
            setCustomPrompt={setCustomPrompt}
            isAiGenerating={isAiGenerating}
            onSynthesizeAi={handleSynthesizeAi}
            onSelectPromptPreset={handleSelectPromptPreset}
          />
        </section>
      </main>

      {/* Commission Brief Modal */}
      <CommissionModal
        isOpen={commissionModalOpen}
        onClose={() => setCommissionModalOpen(false)}
        designName={designName}
        archetype={archetype}
        silhouette={silhouette}
        fabric={fabric}
        hardware={hardware}
        customPrompt={customPrompt}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B0B0C] text-[#F9F8F6] px-5 py-3 border border-[#C5A880] shadow-2xl text-xs font-sans tracking-wide flex items-center space-x-2 animate-in slide-in-from-bottom-2 duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
