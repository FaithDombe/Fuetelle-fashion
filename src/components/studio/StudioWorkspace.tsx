"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Layers,
  PenTool,
  Camera,
  ShoppingBag,
  RefreshCw,
  Ruler,
  ArrowLeft,
  Info,
} from "lucide-react";
import ReferenceUploader from "./ReferenceUploader";
import StyleTrainerBar from "./StyleTrainerBar";
import TechPackDrawer from "./TechPackDrawer";
import InPlaceIterationModal from "./InPlaceIterationModal";
import SmartGarmentMatcherModal from "./SmartGarmentMatcherModal";
import FashionCroquisSketch from "./FashionCroquisSketch";
import CommissionModal from "./CommissionModal";
import type {
  OccasionType,
  SilhouetteType,
  FabricDrapeType,
  ReferenceImageInput,
  FitProfile,
  GeneratedDesignData,
  FeedbackSubmission,
} from "@/lib/types/atelier";
import { GARMENT_ARCHETYPES, FABRIC_SWATCHES, SILHOUETTE_OPTIONS, HARDWARE_OPTIONS } from "@/lib/studio-data";

const OCCASION_OPTIONS: OccasionType[] = [
  "Traditional / Bespoke",
  "Red Carpet",
  "Corporate Chic",
  "Streetwear",
  "Resort",
];

const SILHOUETTE_OPTIONS_LIST: SilhouetteType[] = [
  "Grand Agbada",
  "Tailored",
  "Hourglass Mermaid",
  "Draped",
  "A-Line",
  "Structured",
  "Oversized",
];

const FABRIC_OPTIONS: FabricDrapeType[] = [
  "Iseyin Aso-Oke",
  "Austrian Getzner Brocade",
  "Raw Silk",
  "Linen",
  "Structured Wool",
  "Chiffon",
  "Ankara / Textured Weave",
];

const COLOR_SWATCHES = [
  { name: "Ceremonial Emerald", hex: "#0F2D1F" },
  { name: "Champagne Gold", hex: "#C5A059" },
  { name: "Imperial Obsidian", hex: "#0B0B0C" },
  { name: "Alabaster Ivory", hex: "#FAF9F6" },
  { name: "Midnight Navy", hex: "#1A2530" },
  { name: "Dusty Coral Rose", hex: "#D48B80" },
  { name: "Rich Ochre Yellow", hex: "#B87333" },
];

const PROMPT_SUGGESTIONS = [
  "3-piece ceremonial emerald green Aso-Oke Agbada with asymmetric gold filigree chest embroidery",
  "Midnight navy bespoke Senator suit with asymmetric gold zipper placket and Mandarin collar",
  "Dusty rose corseted gala gown with hand-beaded lace neckline and structured mermaid drape",
  "Modern minimalist sand linen kaftan with dropped shoulders and architectural front split",
  "Obsidian lion-head velvet Isi-Agu blazer with structured shoulders and gold crest buttons",
];

export default function StudioWorkspace() {
  // Creative Brief State
  const [prompt, setPrompt] = useState(PROMPT_SUGGESTIONS[0]);
  const [occasion, setOccasion] = useState<OccasionType>("Traditional / Bespoke");
  const [silhouette, setSilhouette] = useState<SilhouetteType>("Grand Agbada");
  const [fabric, setFabric] = useState<FabricDrapeType>("Iseyin Aso-Oke");
  const [colorHex, setColorHex] = useState("#0F2D1F");
  const [references, setReferences] = useState<ReferenceImageInput[]>([]);

  // Fit & Proportions State
  const [showFitProfile, setShowFitProfile] = useState(false);
  const [fitProfile, setFitProfile] = useState<FitProfile>({
    bodyType: "Broad Shoulder / Athletic",
    bustOrChest: 42,
    waist: 34,
    hips: 44,
    inseam: 33,
    shoulderSlope: 19,
    agbadaArmSpan: 64,
    unit: "in",
  });

  // Canvas / Output State
  const [isGenerating, setIsGenerating] = useState(false);
  const [isIterating, setIsIterating] = useState(false);
  const [viewMode, setViewMode] = useState<"sketch" | "render">("render");
  const [currentDesign, setCurrentDesign] = useState<GeneratedDesignData>({
    id: "FTL-DSN-INIT01",
    prompt: PROMPT_SUGGESTIONS[0],
    iterationVersion: 1,
    curatedOccasion: "Traditional / Bespoke",
    curatedSilhouette: "Grand Agbada",
    curatedFabric: "Iseyin Aso-Oke",
    curatedColorHex: "#0F2D1F",
    referenceImages: [],
    generatedImageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200",
    techPack: {
      garmentName: "Ceremonial Imperial Agbada",
      aestheticCategory: "Nigerian Ceremonial Haute Couture",
      yardageEstimate: {
        primaryFabricYards: 7.5,
        liningYards: 4.0,
        interfacingYards: 2.0,
        fabricName: "Handwoven Iseyin Aso-Oke",
      },
      constructionNotes: [
        "Main Shell: Hand-cut Aso-Oke on bias grain for natural fluid drape.",
        "Winged sleeve span structured with soft canvas interfacing to maintain grand ceremonial silhouette.",
        "Seam Finishing: Bound Hong Kong seams with silk organza edging throughout interior.",
        "Arm span configured to 64 inches with matching embroidered Fila cap.",
      ],
      stitchDensity: "14-16 stitches per inch with Gutermann Tera thread",
      stylingPairings: [
        "Hand-embroidered matching Aso-Oke Fila cap",
        "Handcrafted Italian leather loafers in burnished oxblood",
      ],
      complementaryAccessories: [
        "Coral bead bracelet or raw amber lapel accent",
        "Hand-polished horn buttons with engraved atelier serial number",
      ],
      careInstructions:
        "Strictly specialist dry clean only. Steam horizontally with protective cloth.",
      itemizedNairaQuote: {
        baseTailoring: 180000,
        luxuryTextiles: 320000,
        artisanEmbroidery: 140000,
        fittingsAndQualityControl: 45000,
        totalNaira: 685000,
      },
    },
    aiMatchScore: 82.5,
    createdAt: new Date().toISOString(),
  });

  const [aiMatchScore, setAiMatchScore] = useState(82.5);
  const [isSavedInWardrobe, setIsSavedInWardrobe] = useState(false);

  // Modals & Drawers
  const [isTechPackOpen, setIsTechPackOpen] = useState(false);
  const [isIterationOpen, setIsIterationOpen] = useState(false);
  const [isGarmentMatcherOpen, setIsGarmentMatcherOpen] = useState(false);
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);

  // Multi-reference handlers
  const handleAddReference = (ref: ReferenceImageInput) => {
    setReferences((prev) => [...prev, ref]);
  };

  const handleRemoveReference = (id: string) => {
    setReferences((prev) => prev.filter((r) => r.id !== id));
  };

  const handleUpdateTag = (
    id: string,
    tag: "Fabric" | "Silhouette" | "Model"
  ) => {
    setReferences((prev) =>
      prev.map((r) => (r.id === id ? { ...r, tag } : r))
    );
  };

  // Generation Handler
  const handleGenerate = async () => {
    setIsGenerating(true);
    setIsSavedInWardrobe(false);

    try {
      const res = await fetch("/api/design/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          occasion,
          silhouette,
          fabric,
          colorHex,
          referenceImages: references.map((r) => ({
            url: r.previewUrl,
            tag: r.tag,
          })),
          fitProfile: showFitProfile ? fitProfile : undefined,
          userId: "guest-atelier-client",
        }),
      });

      const data = await res.json();
      if (data.success && data.design) {
        setCurrentDesign(data.design);
        setAiMatchScore(data.aiMatchScore);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  // In-Place Iteration Handler
  const handleExecuteIteration = async (refinementPrompt: string) => {
    setIsIterating(true);
    try {
      const res = await fetch("/api/design/iterate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          baseDesign: currentDesign,
          refinementPrompt,
          userId: "guest-atelier-client",
        }),
      });
      const data = await res.json();
      if (data.success && data.refinedDesign) {
        setCurrentDesign(data.refinedDesign);
        setAiMatchScore(data.aiMatchScore);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsIterating(false);
    }
  };

  // Feedback Submission Handler
  const handleFeedbackSubmit = async (feedback: FeedbackSubmission) => {
    try {
      const res = await fetch("/api/design/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          feedback,
          designContext: currentDesign,
        }),
      });
      const data = await res.json();
      if (data.success && data.updatedAiMatchScore) {
        setAiMatchScore(data.updatedAiMatchScore);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Mock archetype swatch mapping for croquis sketch
  const currentArchetype =
    GARMENT_ARCHETYPES.find((a) =>
      a.name.toLowerCase().includes(silhouette.toLowerCase().split(" ")[0])
    ) || GARMENT_ARCHETYPES[0];

  const currentFabricSwatch =
    FABRIC_SWATCHES.find((f) =>
      f.name.toLowerCase().includes(fabric.toLowerCase().split(" ")[0])
    ) || FABRIC_SWATCHES[0];

  const currentSilhouetteOption =
    (SILHOUETTE_OPTIONS[currentArchetype.id] &&
      SILHOUETTE_OPTIONS[currentArchetype.id][0]) || {
      id: "opt-1",
      name: silhouette,
      description: "Custom haute couture drape tailored to exact measurements.",
      tag: "Editorial Cut",
    };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111] flex flex-col font-sans">
      {/* Studio Header Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E2DC] px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#66645F] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Atelier Exit</span>
          </Link>
          <div className="h-4 w-px bg-[#E5E2DC]" />
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
              FUETELLE DIGITAL HAUTE COUTURE STUDIO
            </span>
            <h1 className="text-sm font-serif text-[#111111] font-semibold tracking-wide">
              Multimodal Atelier Workspace &bull; v{currentDesign.iterationVersion}
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/wardrobe"
            className="hidden sm:flex items-center space-x-1.5 text-xs text-[#66645F] hover:text-[#111111] px-3 py-1.5 border border-[#E5E2DC] hover:border-[#111111] transition-all"
          >
            <span>Wardrobe Vault</span>
          </Link>

          <button
            type="button"
            onClick={() => setIsTechPackOpen(true)}
            className="flex items-center space-x-1.5 text-xs text-[#111111] bg-white px-3 py-1.5 border border-[#E5E2DC] hover:border-[#111111] transition-all"
          >
            <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Tech Pack</span>
          </button>

          <button
            type="button"
            onClick={() => setIsCommissionOpen(true)}
            className="flex items-center space-x-1.5 text-xs bg-[#111111] hover:bg-[#C5A059] text-white px-4 py-1.5 font-medium transition-colors"
          >
            <span>Commission Atelier Tailor</span>
          </button>
        </div>
      </header>

      {/* Main Split-Screen Workspace */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0">
        {/* ========================================================= */}
        {/* LEFT PANEL: Creative Brief & Multimodal Reference Inputs */}
        {/* ========================================================= */}
        <section className="lg:col-span-5 border-r border-[#E5E2DC] p-4 lg:p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-65px)] bg-white/40">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                CREATIVE BRIEF SPECIFICATION
              </span>
              <span className="text-[10px] font-mono text-[#66645F]">
                LAGOS &bull; ABUJA GUILD
              </span>
            </div>
            <h2 className="text-xl font-serif text-[#111111] mt-0.5">
              Direct Your Haute Couture Silhouette
            </h2>
            <p className="text-xs text-[#66645F] mt-1 leading-relaxed">
              Combine multimodal reference images, tailored Nigerian textiles, and natural language prompts.
            </p>
          </div>

          {/* 1. Multimodal Reference Dropzone */}
          <ReferenceUploader
            references={references}
            onAddReference={handleAddReference}
            onRemoveReference={handleRemoveReference}
            onUpdateTag={handleUpdateTag}
            maxFiles={3}
          />

          {/* 2. Natural Language Prompt Box */}
          <div className="space-y-2">
            <label className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold flex items-center justify-between">
              <span>Couture Prompt & Motif Description</span>
              <span className="text-[10px] font-mono text-[#C5A059] lowercase">
                nlp vision directed
              </span>
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              placeholder="e.g. 3-piece ceremonial emerald green Aso-Oke Agbada with asymmetric gold filigree chest embroidery..."
              className="w-full bg-white border border-[#E5E2DC] focus:border-[#111111] p-3 text-xs text-[#111111] focus:outline-hidden transition-colors resize-none leading-relaxed"
            />

            {/* Quick Stylist Template Chips */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono text-[#66645F] block">
                Couture Inspiration Chips:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PROMPT_SUGGESTIONS.slice(0, 3).map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPrompt(item)}
                    className="text-[10px] font-sans px-2.5 py-1 border border-[#E5E2DC] bg-white hover:border-[#111111] text-[#66645F] hover:text-[#111111] transition-all text-left truncate max-w-full"
                  >
                    {item.split("with")[0]}...
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Structured Couture Style Controls */}
          <div className="space-y-4 pt-2 border-t border-[#E5E2DC]">
            <span className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold block">
              Structured Couture Parameters
            </span>

            {/* Occasion */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase text-[#66645F] block">
                Occasion / Dress Code
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {OCCASION_OPTIONS.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`text-xs py-2 px-2.5 border transition-all text-left truncate ${
                      occasion === occ
                        ? "border-[#111111] bg-[#111111] text-white font-medium"
                        : "border-[#E5E2DC] bg-white text-[#66645F] hover:border-black hover:text-black"
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Silhouette */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase text-[#66645F] block">
                Garment Silhouette
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {SILHOUETTE_OPTIONS_LIST.map((sil) => (
                  <button
                    key={sil}
                    type="button"
                    onClick={() => setSilhouette(sil)}
                    className={`text-xs py-2 px-2.5 border transition-all text-left truncate ${
                      silhouette === sil
                        ? "border-[#111111] bg-[#111111] text-white font-medium"
                        : "border-[#E5E2DC] bg-white text-[#66645F] hover:border-black hover:text-black"
                    }`}
                  >
                    {sil}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric & Drape */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase text-[#66645F] block">
                Fabric & Drape
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                {FABRIC_OPTIONS.map((fab) => (
                  <button
                    key={fab}
                    type="button"
                    onClick={() => setFabric(fab)}
                    className={`text-xs py-2 px-2.5 border transition-all text-left truncate ${
                      fabric === fab
                        ? "border-[#111111] bg-[#111111] text-white font-medium"
                        : "border-[#E5E2DC] bg-white text-[#66645F] hover:border-black hover:text-black"
                    }`}
                  >
                    {fab}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette Picker */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-mono uppercase text-[#66645F]">
                  Color Palette Swatches
                </label>
                <div className="flex items-center space-x-1.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-black/20"
                    style={{ backgroundColor: colorHex }}
                  />
                  <input
                    type="text"
                    value={colorHex}
                    onChange={(e) => setColorHex(e.target.value)}
                    className="w-18 text-[11px] font-mono uppercase bg-white border border-[#E5E2DC] px-1.5 py-0.5 text-center focus:outline-hidden"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                {COLOR_SWATCHES.map((swatch) => (
                  <button
                    key={swatch.name}
                    type="button"
                    onClick={() => setColorHex(swatch.hex)}
                    title={swatch.name}
                    className={`w-7 h-7 rounded-full border transition-transform ${
                      colorHex.toLowerCase() === swatch.hex.toLowerCase()
                        ? "scale-115 ring-2 ring-[#C5A059] border-black"
                        : "border-black/20 hover:scale-105"
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 4. Fit & Proportion Profile Drawer (Expandable) */}
          <div className="pt-2 border-t border-[#E5E2DC]">
            <button
              type="button"
              onClick={() => setShowFitProfile(!showFitProfile)}
              className="w-full flex items-center justify-between py-2 text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold hover:text-[#C5A059] transition-colors"
            >
              <div className="flex items-center space-x-2">
                <Ruler className="w-4 h-4 text-[#C5A059]" />
                <span>Bespoke Fit & Proportion Profile</span>
              </div>
              <span className="text-[10px] font-mono text-[#66645F]">
                {showFitProfile ? "[Collapse -]" : "[Configure +]"}
              </span>
            </button>

            {showFitProfile && (
              <div className="bg-[#FAF9F6] border border-[#E5E2DC] p-4 mt-2 space-y-3 animate-in fade-in duration-200">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-[#66645F] block">
                      Chest / Bust ({fitProfile.unit})
                    </label>
                    <input
                      type="number"
                      value={fitProfile.bustOrChest || ""}
                      onChange={(e) =>
                        setFitProfile({
                          ...fitProfile,
                          bustOrChest: Number(e.target.value),
                        })
                      }
                      className="w-full bg-white border border-[#E5E2DC] p-2 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-[#66645F] block">
                      Waist ({fitProfile.unit})
                    </label>
                    <input
                      type="number"
                      value={fitProfile.waist || ""}
                      onChange={(e) =>
                        setFitProfile({
                          ...fitProfile,
                          waist: Number(e.target.value),
                        })
                      }
                      className="w-full bg-white border border-[#E5E2DC] p-2 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-[#66645F] block">
                      Agbada Arm Span ({fitProfile.unit})
                    </label>
                    <input
                      type="number"
                      value={fitProfile.agbadaArmSpan || ""}
                      onChange={(e) =>
                        setFitProfile({
                          ...fitProfile,
                          agbadaArmSpan: Number(e.target.value),
                        })
                      }
                      className="w-full bg-white border border-[#E5E2DC] p-2 text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-[#66645F] block">
                      Trouser Inseam ({fitProfile.unit})
                    </label>
                    <input
                      type="number"
                      value={fitProfile.inseam || ""}
                      onChange={(e) =>
                        setFitProfile({
                          ...fitProfile,
                          inseam: Number(e.target.value),
                        })
                      }
                      className="w-full bg-white border border-[#E5E2DC] p-2 text-xs font-mono"
                    />
                  </div>
                </div>

                <div className="text-[10px] text-[#66645F] italic flex items-center space-x-1.5">
                  <Info className="w-3 h-3 text-[#C5A059]" />
                  <span>
                    Proportions automatically recalibrate the AI croquis seamlines and yardage estimates.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <button
              type="button"
              disabled={isGenerating}
              onClick={handleGenerate}
              className="w-full flex items-center justify-center space-x-2 bg-[#111111] hover:bg-[#C5A059] text-white py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#C5A059]" />
                  <span>Synthesizing Haute Couture Concept...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Generate Haute Couture ✦</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* ========================================================= */}
        {/* RIGHT PANEL: Lookbook Canvas & Iterative Refinement Card  */}
        {/* ========================================================= */}
        <section className="lg:col-span-7 p-4 lg:p-8 flex flex-col justify-between space-y-4 bg-[#FAF9F6] overflow-y-auto max-h-[calc(100vh-65px)]">
          {/* Top Canvas Bar: View Switcher & Action Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E5E2DC]">
            {/* Dual View Toggle */}
            <div className="flex items-center bg-[#F0EDE7] p-1 border border-[#E5E2DC]">
              <button
                type="button"
                onClick={() => setViewMode("render")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-sans uppercase tracking-wider transition-all ${
                  viewMode === "render"
                    ? "bg-[#111111] text-white font-semibold shadow-xs"
                    : "text-[#66645F] hover:text-[#111111]"
                }`}
              >
                <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Atelier Render</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("sketch")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-sans uppercase tracking-wider transition-all ${
                  viewMode === "sketch"
                    ? "bg-[#111111] text-white font-semibold shadow-xs"
                    : "text-[#66645F] hover:text-[#111111]"
                }`}
              >
                <PenTool className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Couture Sketch</span>
              </button>
            </div>

            {/* Quick Secondary Actions */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setIsGarmentMatcherOpen(true)}
                className="flex items-center space-x-1 px-3 py-1.5 border border-[#E5E2DC] hover:border-black text-xs font-sans text-[#111111] bg-white transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Source The Look</span>
              </button>

              <button
                type="button"
                onClick={() => setIsIterationOpen(true)}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#111111] hover:bg-[#C5A059] text-white text-xs font-sans uppercase tracking-wider font-semibold transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Refine Design</span>
              </button>
            </div>
          </div>

          {/* Canvas Presentation Surface */}
          <div className="relative w-full aspect-4/5 lg:aspect-auto lg:h-[540px] bg-white border border-[#E5E2DC] flex items-center justify-center overflow-hidden shadow-sm">
            {isGenerating ? (
              /* Architectural Fashion Sketching Skeleton */
              <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-4 bg-[#F5F2EB] select-none">
                <div className="w-16 h-16 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
                <div className="space-y-1.5 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
                    AI VISION CROQUIS GENERATOR &bull; DRAFTING SEAMS
                  </span>
                  <p className="text-sm font-serif italic text-[#111111]">
                    &ldquo;Calculating bias drape, embroidery schematics, and Nigerian textile tension...&rdquo;
                  </p>
                </div>
                <div className="w-64 h-1 bg-[#E5E2DC] overflow-hidden">
                  <div className="w-full h-full bg-[#C5A059] animate-pulse" />
                </div>
              </div>
            ) : viewMode === "render" ? (
              /* High-Resolution Editorial Model Lookbook Card */
              <div className="relative w-full h-full">
                <Image
                  src={currentDesign.generatedImageUrl}
                  alt={currentDesign.prompt}
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top"
                />
                {/* Editorial Vignette & Floating Atelier Metadata Stamp */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase">
                  <span>SPEC N&deg; {currentDesign.id}</span>
                  <span className="mx-2">&bull;</span>
                  <span>{currentDesign.curatedSilhouette}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block">
                    {currentDesign.curatedFabric} &bull; {currentDesign.curatedOccasion}
                  </span>
                  <h3 className="text-lg lg:text-xl font-serif leading-tight">
                    {currentDesign.techPack.garmentName}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 max-w-xl font-sans">
                    {currentDesign.prompt}
                  </p>
                </div>
              </div>
            ) : (
              /* Hand-Drawn Couture Vector Croquis Sketch */
              <FashionCroquisSketch
                archetype={currentArchetype}
                silhouette={currentSilhouetteOption}
                fabric={currentFabricSwatch}
                customPrompt={currentDesign.prompt}
              />
            )}
          </div>

          {/* Self-Improving AI Taste Engine Feedback Bar */}
          <StyleTrainerBar
            design={currentDesign}
            aiMatchScore={aiMatchScore}
            onFeedbackSubmit={handleFeedbackSubmit}
            onSaveToWardrobe={() => setIsSavedInWardrobe(true)}
            isSaved={isSavedInWardrobe}
          />
        </section>
      </main>

      {/* Slide-Over & Interactive Drawers */}
      <TechPackDrawer
        isOpen={isTechPackOpen}
        onClose={() => setIsTechPackOpen(false)}
        techPack={currentDesign.techPack}
        designId={currentDesign.id}
      />

      <InPlaceIterationModal
        isOpen={isIterationOpen}
        onClose={() => setIsIterationOpen(false)}
        baseDesign={currentDesign}
        onExecuteIteration={handleExecuteIteration}
        isIterating={isIterating}
      />

      <SmartGarmentMatcherModal
        isOpen={isGarmentMatcherOpen}
        onClose={() => setIsGarmentMatcherOpen(false)}
        design={currentDesign}
      />

      <CommissionModal
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
        designName={currentDesign.techPack.garmentName}
        archetype={currentArchetype}
        fabric={currentFabricSwatch}
        silhouette={currentSilhouetteOption}
        hardware={HARDWARE_OPTIONS[0]}
        customPrompt={currentDesign.prompt}
      />
    </div>
  );
}
