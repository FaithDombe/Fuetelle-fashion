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
  const [designName, setDesignName] = useState("Bespoke Silhouette No. 01");
  const [archetype, setArchetype] = useState<GarmentArchetype>(GARMENT_ARCHETYPES[0]);
  const [silhouette, setSilhouette] = useState<SilhouetteOption>(
    SILHOUETTE_OPTIONS[GARMENT_ARCHETYPES[0].id][0]
  );
  const [fabric, setFabric] = useState<FabricSwatch>(FABRIC_SWATCHES[0]);
  const [hardware, setHardware] = useState<HardwareOption>(HARDWARE_OPTIONS[0]);
  const [customPrompt, setCustomPrompt] = useState(
    "Asymmetric wrap silhouette with architectural cascading lapels"
  );
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [commissionModalOpen, setCommissionModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSynthesizeAi = () => {
    setIsAiGenerating(true);
    setTimeout(() => {
      setIsAiGenerating(false);
      showToast("AI synthesized design variation and adjusted tech specifications.");
    }, 1200);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleExportSpec = () => {
    const specData = {
      platform: "FUETELLE ATELIER",
      designName,
      archetype: archetype.name,
      category: archetype.category,
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
      generatedTimestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(specData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${designName.toLowerCase().replace(/\s+/g, "-")}-spec.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Technical Specification tech-pack exported successfully.");
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
        {/* Left / Center: Interactive Garment Canvas */}
        <section className="flex-1 flex flex-col justify-center items-center overflow-hidden" aria-label="Garment Canvas">
          <GarmentCanvas
            archetype={archetype}
            silhouette={silhouette}
            fabric={fabric}
            hardware={hardware}
            customPrompt={customPrompt}
            isAiGenerating={isAiGenerating}
          />
        </section>

        {/* Right: Studio Configuration & AI Controls */}
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
