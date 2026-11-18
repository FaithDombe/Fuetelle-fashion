export type OccasionType =
  | "Red Carpet"
  | "Corporate Chic"
  | "Streetwear"
  | "Resort"
  | "Traditional / Bespoke";

export type SilhouetteType =
  | "A-Line"
  | "Oversized"
  | "Tailored"
  | "Draped"
  | "Structured"
  | "Grand Agbada"
  | "Hourglass Mermaid";

export type FabricDrapeType =
  | "Raw Silk"
  | "Linen"
  | "Structured Wool"
  | "Chiffon"
  | "Ankara / Textured Weave"
  | "Iseyin Aso-Oke"
  | "Austrian Getzner Brocade";

export type ReferenceTag = "Fabric" | "Silhouette" | "Model";

export interface ReferenceImageInput {
  id: string;
  url: string;
  name: string;
  tag: ReferenceTag;
  previewUrl: string;
  file?: File;
}

export interface FitProfile {
  bodyType: string;
  bustOrChest?: number;
  waist?: number;
  hips?: number;
  inseam?: number;
  shoulderSlope?: number;
  agbadaArmSpan?: number;
  unit: "in" | "cm";
}

export interface TechPackBreakdown {
  garmentName: string;
  aestheticCategory: string;
  yardageEstimate: {
    primaryFabricYards: number;
    liningYards: number;
    interfacingYards: number;
    fabricName: string;
  };
  constructionNotes: string[];
  stitchDensity: string;
  stylingPairings: string[];
  complementaryAccessories: string[];
  careInstructions: string;
  itemizedNairaQuote: {
    baseTailoring: number;
    luxuryTextiles: number;
    artisanEmbroidery: number;
    fittingsAndQualityControl: number;
    totalNaira: number;
  };
}

export interface GeneratedDesignData {
  id: string;
  sessionId?: string;
  userId?: string;
  prompt: string;
  iterationVersion: number;
  refinedFromId?: string;
  curatedOccasion: OccasionType;
  curatedSilhouette: SilhouetteType;
  curatedFabric: FabricDrapeType;
  curatedColorHex: string;
  referenceImages: { url: string; tag: ReferenceTag }[];
  generatedImageUrl: string;
  croquisSketchSvg?: string;
  techPack: TechPackBreakdown;
  aiMatchScore: number;
  createdAt: string;
}

export interface AttributeVotes {
  color: 1 | -1 | 0;
  silhouette: 1 | -1 | 0;
  fabric: 1 | -1 | 0;
}

export type RejectionReasonTag =
  | "Wrong Silhouette"
  | "Color Clash"
  | "Too Casual"
  | "Poor Fit"
  | "Fabric Dislike"
  | "Excessive Volume"
  | "Needs More Structure";

export interface FeedbackSubmission {
  designId: string;
  userId?: string;
  rating: "LOVE" | "DISLIKE" | "SAVED";
  rejectionReasons?: RejectionReasonTag[];
  attributeVotes?: AttributeVotes;
  clientNotes?: string;
}

export interface StyleDnaVector {
  [keyword: string]: number; // weighted positive/negative affinity
}

export interface PersonalizedStyleContext {
  userId: string;
  styleDnaSummary: string;
  aiMatchScore: number;
  topPreferredAesthetics: string[];
  topPreferredFabrics: string[];
  topPreferredColors: string[];
  strictlyAvoidedCuts: string[];
  strictlyAvoidedColors: string[];
  promptInjectionSnippet: string;
}

export interface CatalogGarmentItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  silhouette: string;
  fabric: string;
  colorHex: string;
  priceNaira: number;
  priceUsd: number;
  imageUrl: string;
  productUrl: string;
  matchScore: number;
  tags: string[];
}
