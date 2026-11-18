export interface GarmentArchetype {
  id: string;
  name: string;
  category: string;
  description: string;
  baseCraftingHours: number;
  baseYardage: number;
  basePriceNaira: number;
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
    id: "agbada",
    name: "Grand Imperial 3-Piece Agbada",
    category: "Ceremonial Wear",
    description: "Grand architectural drape with structured shoulders, precision tonal corded chest embroidery, and matching fila cap.",
    baseCraftingHours: 36,
    baseYardage: 6.5,
    basePriceNaira: 280000,
    defaultSilhouette: "grand-architectural",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "senator",
    name: "Modern Lekki Senator Suit",
    category: "Contemporary Tailoring",
    description: "Crisp tropical wool with a concealed button placket, high-standing Mandarin collar, and tapered ankle-grazing trousers.",
    baseCraftingHours: 18,
    baseYardage: 3.5,
    basePriceNaira: 145000,
    defaultSilhouette: "minimalist-senator",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "aso-ebi-gown",
    name: "Sculptural Corseted Aso-Ebi Gown",
    category: "Couture Occasion",
    description: "Internal boned French bustier with hand-appliqued lace, illusion décolletage, and dramatic pleated mermaid sweep.",
    baseCraftingHours: 40,
    baseYardage: 4.5,
    basePriceNaira: 350000,
    defaultSilhouette: "internal-corset-mermaid",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "kaftan",
    name: "Royal Abuja Draped Kaftan",
    category: "Traditional Luxury",
    description: "Crafted from lustrous Austrian Getzner cotton brocade with geometric neck embroidery and clean wrist vents.",
    baseCraftingHours: 16,
    baseYardage: 4.0,
    basePriceNaira: 160000,
    defaultSilhouette: "sovereign-kaftan",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "isi-agu",
    name: "Modern Isi-Agu Bespoke Blazer",
    category: "Afro-Contemporary",
    description: "Lion-crest velvet tailored into a sharp double-breasted jacket with wide peak lapels and matte gold crest buttons.",
    baseCraftingHours: 24,
    baseYardage: 3.2,
    basePriceNaira: 195000,
    defaultSilhouette: "neapolitan-isi-agu",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: "bespoke-suit",
    name: "Tropical Wool Executive Suit",
    category: "Bespoke Suiting",
    description: "Lightweight European wool engineered for Nigerian metropolitan weather. Half-canvas with soft unpadded shoulders.",
    baseCraftingHours: 28,
    baseYardage: 3.4,
    basePriceNaira: 260000,
    defaultSilhouette: "lagos-executive",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=900",
  },
];

export const FABRIC_SWATCHES: FabricSwatch[] = [
  {
    id: "aso-oke",
    name: "Hand-Loomed Iseyin Aso-Oke",
    origin: "Iseyin, Oyo State, Nigeria",
    composition: "70% Raw Silk, 30% Organic Wild Cotton with Metallic Lurex",
    weightGsm: 360,
    colorHex: "#8A6D3B",
    textureDescription: "Subtle artisanal ribbed weave with shimmering champagne gold threads",
    drapeFactor: "Crisp",
  },
  {
    id: "austrian-getzner",
    name: "Authentic Austrian Cotton Brocade (Getzner)",
    origin: "Lustenau, Austria (Sourced for Nigerian Ateliers)",
    composition: "100% Giza Long-Staple Egyptian Cotton",
    weightGsm: 180,
    colorHex: "#EFE8DA",
    textureDescription: "High-sheen damask weave with soft hand-feel and crisp crease retention",
    drapeFactor: "Structured",
  },
  {
    id: "french-solstiss",
    name: "French Solstiss Corded Lace",
    origin: "Caudry, France",
    composition: "60% Cotton, 25% Rayon, 15% Metallic Silk",
    weightGsm: 240,
    colorHex: "#2E241E",
    textureDescription: "Intricate raised floral cordon embroidery with micro-sequin scatter",
    drapeFactor: "Fluid",
  },
  {
    id: "english-wool",
    name: "Super 140s English Tropical Wool",
    origin: "Huddersfield, UK",
    composition: "100% Worsted Merino Wool",
    weightGsm: 230,
    colorHex: "#1B2233",
    textureDescription: "Breathable open-weave fresco finish, ideal for Lagos and Abuja climate",
    drapeFactor: "Structured",
  },
  {
    id: "duchess-satin",
    name: "Italian Heavy Silk Duchess Satin",
    origin: "Como, Italy",
    composition: "100% Silk Satin",
    weightGsm: 320,
    colorHex: "#A47E53",
    textureDescription: "Sculptural heavy drape with a rich low-lustre pearlescent face",
    drapeFactor: "Heavy",
  },
  {
    id: "irish-linen",
    name: "Spence Bryson Pure Irish Linen",
    origin: "Northern Ireland",
    composition: "100% Flax Linen",
    weightGsm: 280,
    colorHex: "#3B4237",
    textureDescription: "Crisp natural texture that softens with wear, keeping wearer cool",
    drapeFactor: "Crisp",
  },
];

export const SILHOUETTE_OPTIONS: Record<string, SilhouetteOption[]> = {
  agbada: [
    { id: "grand-architectural", name: "Grand Imperial Silhouette", description: "Expansive arm sweep with structured shoulder yoke and tonal chest embroidery" },
    { id: "streamlined-modern", name: "Modern Slim-Line Agbada", description: "Controlled arm drape with ergonomic body cut and minimalist neck detail" },
    { id: "sleeveless-waistcoat", name: "Contemporary Waistcoat Agbada Hybrid", description: "Tailored long waistcoat over slim-fit buba and tapered sokoto" },
  ],
  senator: [
    { id: "minimalist-senator", name: "Classic Mandarin Minimalist", description: "Clean concealed button fly, 2.5cm standing collar, slim wrist cuffs" },
    { id: "asymmetric-placket", name: "Asymmetric Diagonal Button Placket", description: "Architectural crossover closure with contrast edge piping" },
    { id: "short-sleeve-safari", name: "Lagos Short-Sleeve Safari Senator", description: "Tailored patch pockets with inverted center pleats and clean collar" },
  ],
  "aso-ebi-gown": [
    { id: "internal-corset-mermaid", name: "Sculpted French Corset Mermaid", description: "Internal spiral-boned micro-corset with illusion lace décolletage" },
    { id: "peplum-structured", name: "Asymmetric Tiered Peplum Gown", description: "Sculpted waist peplum cascading into a high-slit fitted skirt" },
    { id: "monostrap-architectural", name: "Monostrap Architectural Drape", description: "Single-shoulder structured capelet flowing into floor-length sweep" },
  ],
  kaftan: [
    { id: "sovereign-kaftan", name: "Sovereign Clean-Line Cut", description: "Floor-grazing hem with 30cm side vents for effortless movement" },
    { id: "tonal-embroidery-cut", name: "Geometric Filigree Neck Cut", description: "Intricate computerized embroidery around collar and placket" },
  ],
  "isi-agu": [
    { id: "neapolitan-isi-agu", name: "Double-Breasted Velvet Tailored Cut", description: "6x2 horn button stance with peaked lapels and soft shoulders" },
    { id: "single-breasted-mandarin", name: "Mandarin Collar Evening Jacket", description: "Modern collarless closure with hidden magnetic fastener" },
  ],
  "bespoke-suit": [
    { id: "lagos-executive", name: "Tropical Climate Peak-Lapel Cut", description: "Unlined back with half-canvas chest and breathable side adjusters" },
    { id: "double-breasted-classic", name: "Savile Row Double-Breasted", description: "Structured chest drape with classic 4.5-inch lapels" },
  ],
};

export const HARDWARE_OPTIONS: HardwareOption[] = [
  { id: "champagne-gold", name: "Champagne Gold Atelier Crest Buttons", colorHex: "#C5A880" },
  { id: "matte-gunmetal", name: "Matte Gunmetal Alloy Snaps", colorHex: "#333538" },
  { id: "horn-buttons", name: "Genuine Dark Water Buffalo Horn", colorHex: "#1C1713" },
  { id: "coral-bead", name: "Artisanal Red Coral Accent Beads", colorHex: "#C0392B" },
];

export const STYLE_PRESETS = [
  "Lagos Haute Couture",
  "Abuja Sovereign Imperial",
  "Modern Aso-Ebi Glamour",
  "Contemporary Afro-Minimalism",
  "Savile Row meets Victoria Island",
];
