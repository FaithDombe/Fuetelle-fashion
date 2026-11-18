import type { CatalogGarmentItem } from "./types/atelier";

export const CURATED_CATALOG: CatalogGarmentItem[] = [
  {
    id: "cat-001",
    name: "The Emerald Filigree Imperial Agbada",
    brand: "Agbada Imperial Lagos",
    category: "Agbada",
    silhouette: "Grand Agbada",
    fabric: "Handwoven Iseyin Aso-Oke",
    colorHex: "#0F2D1F",
    priceNaira: 485000,
    priceUsd: 320,
    imageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=900",
    productUrl: "/wardrobe?source=cat-001",
    matchScore: 98,
    tags: ["Ceremonial", "Coronation", "Lagos High Society", "Aso-Oke"],
  },
  {
    id: "cat-002",
    name: "Midnight Navy Architectural Senator Suit",
    brand: "Atafo Bespoke",
    category: "Senator Suit",
    silhouette: "Tailored",
    fabric: "Austrian Getzner Brocade",
    colorHex: "#1A2530",
    priceNaira: 320000,
    priceUsd: 215,
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900",
    productUrl: "/wardrobe?source=cat-002",
    matchScore: 94,
    tags: ["Executive", "Mandarin Collar", "Bespoke Cut"],
  },
  {
    id: "cat-003",
    name: "Rose Quartz Corseted Aso-Ebi Gown",
    brand: "House of Deola",
    category: "Aso-Ebi Gown",
    silhouette: "Hourglass Mermaid",
    fabric: "Raw Silk",
    colorHex: "#D48B80",
    priceNaira: 590000,
    priceUsd: 395,
    imageUrl:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=900",
    productUrl: "/wardrobe?source=cat-003",
    matchScore: 96,
    tags: ["Red Carpet", "Wedding Guest", "Internal Boning"],
  },
  {
    id: "cat-004",
    name: "Alabaster Minimalist Draped Kaftan",
    brand: "Orange Culture",
    category: "Kaftan",
    silhouette: "Draped",
    fabric: "Linen",
    colorHex: "#F9F8F6",
    priceNaira: 245000,
    priceUsd: 165,
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=900",
    productUrl: "/wardrobe?source=cat-004",
    matchScore: 91,
    tags: ["Resort", "Breathable", "Contemporary Silhouette"],
  },
  {
    id: "cat-005",
    name: "Obsidian Lion-Head Velvet Isi-Agu",
    brand: "Enugu Guild Master Tailors",
    category: "Isi-Agu",
    silhouette: "Structured",
    fabric: "Structured Wool",
    colorHex: "#0B0B0C",
    priceNaira: 380000,
    priceUsd: 255,
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=900",
    productUrl: "/wardrobe?source=cat-005",
    matchScore: 93,
    tags: ["Traditional", "Velvet Relief", "Gilded Buttons"],
  },
];

export function findMatchingGarments(
  category?: string,
  silhouette?: string,
  fabric?: string,
  colorHex?: string
): CatalogGarmentItem[] {
  return CURATED_CATALOG.map((item) => {
    let score = 65;
    if (category && item.category.toLowerCase().includes(category.toLowerCase())) {
      score += 15;
    }
    if (silhouette && item.silhouette.toLowerCase() === silhouette.toLowerCase()) {
      score += 10;
    }
    if (fabric && item.fabric.toLowerCase().includes(fabric.toLowerCase())) {
      score += 5;
    }
    if (colorHex && item.colorHex.toLowerCase() === colorHex.toLowerCase()) {
      score += 5;
    }
    return {
      ...item,
      matchScore: Math.min(99, score),
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}
