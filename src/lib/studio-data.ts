export interface GarmentArchetype {
  id: string;
  name: string;
  category: string;
  description: string;
  baseCraftingHours: number;
  baseYardage: number;
  defaultSilhouette: string;
  image: string;
}

export interface FabricSwatch {
  id: string;
  name: string;
  origin: string;
  composition: string;
  weightGsm: number;
  colorHex: string;
  textureDescription: string;
  drapeFactor: "Structured" | "Fluid" | "Heavy" | "Crisp";
}

export interface SilhouetteOption {
  id: string;
  name: string;
  description: string;
}

export interface HardwareOption {
  id: string;
  name: string;
  colorHex: string;
}

export const GARMENT_ARCHETYPES: GarmentArchetype[] = [
  {
    id: "coat",
    name: "Architectural Wrap Coat",
    category: "Outerwear",
    description: "Cascading asymmetric lapels, unlined fluid drape, engineered for cold climates.",
    baseCraftingHours: 18,
    baseYardage: 3.8,
    defaultSilhouette: "asymmetric-wrap",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "suit",
    name: "Neapolitan Tailored Suit",
    category: "Tailoring",
    description: "Soft shoulder construction, double-breasted canvas with high armholes.",
    baseCraftingHours: 26,
    baseYardage: 3.5,
    defaultSilhouette: "double-breasted",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "gown",
    name: "Fluid Draped Column Gown",
    category: "Occasion",
    description: "Sculptural bias-cut geometry with open back and subtle pooling train.",
    baseCraftingHours: 20,
    baseYardage: 4.2,
    defaultSilhouette: "bias-column",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "cultural",
    name: "Ceremonial Heritage Agbada",
    category: "Cultural Wear",
    description: "Three-piece architectural ensemble featuring hand-loomed borders and tonal filigree.",
    baseCraftingHours: 32,
    baseYardage: 6.0,
    defaultSilhouette: "architectural-robe",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "trench",
    name: "Minimalist Utility Trench",
    category: "Contemporary",
    description: "Water-resistant technical gabardine with hidden magnetic closures.",
    baseCraftingHours: 16,
    baseYardage: 3.2,
    defaultSilhouette: "boxy-relaxed",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "dinner-jacket",
    name: "Bespoke Peak-Lapel Tuxedo",
    category: "Evening Wear",
    description: "Hand-padded horsehair canvas with silk grosgrain facings and horn buttoning.",
    baseCraftingHours: 34,
    baseYardage: 3.4,
    defaultSilhouette: "hourglass-evening",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=900",
  },
];

export const FABRIC_SWATCHES: FabricSwatch[] = [
  {
    id: "loro-wool",
    name: "Double-Faced Virgin Wool",
    origin: "Biella, Italy",
    composition: "100% Extra-fine Virgin Wool",
    weightGsm: 480,
    colorHex: "#2B2A29",
    textureDescription: "Brushed matte face, dense thermal core, zero fraying edge",
    drapeFactor: "Structured",
  },
  {
    id: "mulberry-silk",
    name: "Heavy Silk Crepe de Chine",
    origin: "Como, Italy",
    composition: "100% Mulberry Silk",
    weightGsm: 180,
    colorHex: "#D9C9B6",
    textureDescription: "Liquid drape with pearlescent lustre under natural light",
    drapeFactor: "Fluid",
  },
  {
    id: "aso-oke",
    name: "Hand-Loomed Aso-Oke Raw Silk",
    origin: "Iseyin, Nigeria",
    composition: "70% Raw Silk, 30% Wild Cotton",
    weightGsm: 340,
    colorHex: "#8B6F47",
    textureDescription: "Subtle textural ribbing with champagne metallic weft",
    drapeFactor: "Crisp",
  },
  {
    id: "ventile-cotton",
    name: "High-Density Storm Gabardine",
    origin: "Lancashire, UK",
    composition: "100% Long-Staple Compact Cotton",
    weightGsm: 260,
    colorHex: "#4A4D45",
    textureDescription: "Matte windproof finish with natural water repellency",
    drapeFactor: "Crisp",
  },
  {
    id: "cashmere-blend",
    name: "Brushed Cashmere-Merino Melange",
    origin: "Inner Mongolia / Biella",
    composition: "60% Mongolian Cashmere, 40% Merino Wool",
    weightGsm: 420,
    colorHex: "#B8ACA2",
    textureDescription: "Ultra-soft velvet hand-feel with light-refracting nap",
    drapeFactor: "Heavy",
  },
  {
    id: "midnight-barathea",
    name: "Savile Row Wool Barathea",
    origin: "Yorkshire, UK",
    composition: "100% Worsted Wool",
    weightGsm: 380,
    colorHex: "#121721",
    textureDescription: "Fine pebbled weave engineered specifically for evening formalwear",
    drapeFactor: "Structured",
  },
];

export const SILHOUETTE_OPTIONS: Record<string, SilhouetteOption[]> = {
  coat: [
    { id: "asymmetric-wrap", name: "Asymmetric Cascade Wrap", description: "Deep crossover with sculpted organic waist tie" },
    { id: "straight-overcoat", name: "Architectural Column Cut", description: "Sharp dropped shoulder with clean vertical line" },
    { id: "cocoon-volume", name: "Sculpted Cocoon Volume", description: "Rounded raglan sleeves with gentle taper at hem" },
  ],
  suit: [
    { id: "double-breasted", name: "6x2 Neapolitan Double-Breasted", description: "Wide peak lapels, low gorge, soft spalla camicia" },
    { id: "single-breasted-2b", name: "2-Button Minimalist Tailored", description: "Narrow notch lapels with clean European chest drape" },
    { id: "mandarin-collar", name: "Standing Atelier Collar", description: "Clean closure without lapels, modern architectural line" },
  ],
  gown: [
    { id: "bias-column", name: "Fluid Bias-Cut Column", description: "Skims posture smoothly, floor-length sweep" },
    { id: "corset-sculpted", name: "Architectural Boned Bodice", description: "Internal micro-corsetry with flowing asymmetric skirt" },
    { id: "high-neck-cape", name: "High-Neck Integrated Capelet", description: "Sculpted neckline flowing into dramatic shoulder drape" },
  ],
  cultural: [
    { id: "architectural-robe", name: "Grand Imperial Silhouette", description: "Wide structured sleeves with engineered tonal pleating" },
    { id: "slim-modern", name: "Modern Tapered Agbada", description: "Ergonomic shoulder line with streamlined side drape" },
  ],
  trench: [
    { id: "boxy-relaxed", name: "Contemporary Relaxed Oversized", description: "Double-layer storm flap with concealed magnet closure" },
    { id: "belted-fitted", name: "Sharp Clean Belted Cut", description: "Classic tailored belt line with articulated raglan sleeve" },
  ],
  "dinner-jacket": [
    { id: "hourglass-evening", name: "Savile Row Peak Lapel", description: "Molded waistline with grosgrain silk satin facing" },
    { id: "shawl-lapel", name: "Sculpted Narrow Shawl Lapel", description: "Continuous curved silk collar for black-tie galas" },
  ],
};

export const HARDWARE_OPTIONS: HardwareOption[] = [
  { id: "gold", name: "Champagne Gold Atelier Hardware", colorHex: "#C5A880" },
  { id: "gunmetal", name: "Matte Gunmetal Alloy", colorHex: "#333538" },
  { id: "horn", name: "Genuine Dark Water Buffalo Horn", colorHex: "#1C1713" },
  { id: "mother-of-pearl", name: "Smoked Mother-of-Pearl", colorHex: "#6F7275" },
];

export const STYLE_PRESETS = [
  "Minimalist Metropolitan",
  "Haute Couture Avant-Garde",
  "Savile Row Heritage",
  "Sculptural Drape",
  "Modern Cultural Reinterpretation",
];
