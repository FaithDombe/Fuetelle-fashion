export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "AI Studio", href: "/studio" },
  { label: "Wardrobe Vault", href: "/wardrobe" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Explore Designs", href: "/#showcase" },
  { label: "For Designers", href: "/#designers" },
  { label: "For Tailors", href: "/#tailors" },
];

export interface WalkthroughStep {
  number: string;
  label: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tag: string;
}

export const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    number: "01",
    label: "Prompt Your Vision",
    title: "Describe Your Dream Garment.",
    description:
      "Type what you want to wear in plain English: mention your desired Agbada cut, Aso-Ebi silhouette, embroidery motif, or preferred Nigerian textile.",
    imageUrl:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Authentic Nigerian fabric swatches, Aso-Oke weaves and design moodboard",
    tag: "Creative Prompt",
  },
  {
    number: "02",
    label: "AI Generates Your Sketch",
    title: "A Couture Sketch is Drawn.",
    description:
      "Our AI translates your description into a technical fashion croquis sketch with stitch schematics, measurement callouts, and fabric recommendations.",
    imageUrl:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Fashion designer drafting an architectural fashion croquis sketch on paper",
    tag: "AI Fashion Sketch",
  },
  {
    number: "03",
    label: "Refine With Designers",
    title: "Engineered With Precision.",
    description:
      "Top Nigerian fashion designers review your sketch, refine the garment components, and generate production-ready tech packs for master tailors.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900",
    imageAlt: "African fashion designer drafting technical garment patterns and specifications in studio",
    tag: "Technical Tech Pack",
  },
  {
    number: "04",
    label: "Crafted by Master Tailors",
    title: "Brought to Life by Skilled Hands.",
    description:
      "Vetted Nigerian master tailors review your sketch and tech pack, submit itemised Naira bids, and sew your bespoke garment under protected milestone escrow.",
    imageUrl:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Bespoke tailor working with measuring tape and fine fabric in tailor atelier",
    tag: "Master Atelier Craft",
  },
];

export const SHOWCASE_CATEGORIES = [
  "All",
  "Ceremonial Agbada",
  "Contemporary Senator Suits",
  "Couture Aso-Ebi & Gowns",
  "Modern Afro-Contemporary",
  "Bespoke Suiting",
  "Luxury Kaftans",
] as const;

export type ShowcaseCategory = (typeof SHOWCASE_CATEGORIES)[number];

export interface ShowcaseItem {
  id: string;
  title: string;
  category: ShowcaseCategory;
  description: string;
  imageUrl: string;
  fabric: string;
  silhouette: string;
  craftingTime: string;
  priceEstimate: string;
  atelierNote: string;
  isFeatured?: boolean;
}

export const FEATURED_DESIGN: ShowcaseItem = {
  id: "featured-agbada-01",
  title: "The Grand Imperial Aso-Oke Agbada Ensemble",
  category: "Ceremonial Agbada",
  description:
    "A grand architectural 3-piece ceremonial statement crafted from hand-loomed Iseyin raw silk Aso-Oke with metallic gold weft. Features subtle tone-on-tone corded filigree embroidery, structured shoulders, and tailored slim-fit buba and sokoto.",
  imageUrl:
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200",
  fabric: "Hand-Loomed Iseyin Raw Silk Aso-Oke & Pure Cotton Damask",
  silhouette: "3-Piece Grand Imperial with Coordinated Fila",
  craftingTime: "36 atelier hours",
  priceEstimate: "From ₦280,000",
  atelierNote: "Hand-stitched cordon embroidery with matching hand-embroidered fila",
  isFeatured: true,
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "senator-01",
    title: "The Minimalist Lekki Senator Suit",
    category: "Contemporary Senator Suits",
    description:
      "Sharp, clean lines crafted from English tropical-weight wool with a concealed button fly, structured mandarin collar, and tapered ankle-grazing trousers.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=900",
    fabric: "Super 140s English Tropical Wool in Charcoal Navy",
    silhouette: "Structured Modern Senator Cut",
    craftingTime: "18 atelier hours",
    priceEstimate: "From ₦145,000",
    atelierNote: "Concealed front placket with hand-sewn button loops",
  },
  {
    id: "aso-ebi-01",
    title: "Sculptural Corseted Aso-Ebi Evening Gown",
    category: "Couture Aso-Ebi & Gowns",
    description:
      "Engineered for high-society weddings and galas. Features an internal French boned corset, hand-beaded lace appliques, illusion neckline, and dramatic pleated floor sweep.",
    imageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=900",
    fabric: "French Solstiss Lace & Heavy Silk Duchess Satin",
    silhouette: "Cinched Internal Corset with Asymmetric Drape",
    craftingTime: "40 atelier hours",
    priceEstimate: "From ₦350,000",
    atelierNote: "Spiral steel boning with micro-beaded crystal filigree",
  },
  {
    id: "afro-01",
    title: "The Modern Isi-Agu Double-Breasted Blazer",
    category: "Modern Afro-Contemporary",
    description:
      "A contemporary reimagining of Igbo ceremonial velvet. Tailored as a modern double-breasted evening jacket with peak lapels and matte gold crest buttons.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=900",
    fabric: "High-Density Velvet with Lion Crest Filigree",
    silhouette: "Neapolitan Cut Double-Breasted Jacket",
    craftingTime: "24 atelier hours",
    priceEstimate: "From ₦195,000",
    atelierNote: "Full floating horsehair canvas with silk lining",
  },
  {
    id: "kaftan-01",
    title: "The Abuja Royal Draped Kaftan",
    category: "Luxury Kaftans",
    description:
      "Crafted from authentic Austrian Getzner cotton brocade with a lustrous sheen, clean standing collar, and precision tonal embroidery along the neckline.",
    imageUrl:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=900",
    fabric: "Authentic Austrian Cotton Brocade (Getzner Royal)",
    silhouette: "Relaxed Sovereign Cut with Ankle Slits",
    craftingTime: "16 atelier hours",
    priceEstimate: "From ₦160,000",
    atelierNote: "Laser-sharp tonal embroidery on collar and sleeve cuffs",
  },
  {
    id: "bespoke-suit-01",
    title: "Lagos Executive Peak-Lapel Suit",
    category: "Bespoke Suiting",
    description:
      "Tailored for tropical climates with light half-canvas construction, soft unpadded shoulders, and breathable lightweight Italian wool.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=900",
    fabric: "Italian Vitale Barberis Canonico 240gsm Wool",
    silhouette: "Tailored Slim Fit with Side Adjusters",
    craftingTime: "28 atelier hours",
    priceEstimate: "From ₦260,000",
    atelierNote: "Hand-stitched pick lapels and genuine horn buttons",
  },
  {
    id: "contemporary-01",
    title: "Fluid Silk Organza Kimono & Trouser Set",
    category: "Modern Afro-Contemporary",
    description:
      "Elevated Lagos resortwear blending African botanical prints with fluid Japanese drape. Unlined raw silk with deep patch pockets and drawstring waist trousers.",
    imageUrl:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=900",
    fabric: "Mulberry Silk Twill with Bespoke Dye",
    silhouette: "Fluid Relaxed Robe & Tapered Trouser",
    craftingTime: "14 atelier hours",
    priceEstimate: "From ₦120,000",
    atelierNote: "French seams throughout with bound silk hems",
  },
];

export const CUSTOMER_FEATURES = [
  {
    title: "Prompt-to-Sketch AI Generator",
    description:
      "Type your dream outfit description in plain English and watch our AI draft a detailed fashion sketch with embroidery schematics in seconds.",
  },
  {
    title: "Authentic Nigerian Fabric Verification",
    description:
      "Guaranteed authentic textiles: verify Getzner brocades, hand-woven Aso-Oke, and Swiss laces with zero counterfeit risk.",
  },
  {
    title: "Precision Body Measurement Profiles",
    description:
      "Store and calibrate your 3D measurements for Agbada arm spans, buba sleeve lengths, and tailored trouser breaks.",
  },
  {
    title: "Transparent Itemised Naira Quotations",
    description:
      "Receive detailed breakdowns covering fabric grade, embroidery complexity, tailoring labor, and delivery in Naira.",
  },
  {
    title: "Milestone Photo Updates",
    description:
      "Follow every phase of production: fabric cutting, basting fit check, embroidery progress, and final pressing.",
  },
  {
    title: "Protected Escrow Workflows",
    description:
      "Funds are held securely in protected milestone escrow and only disbursed when you approve key crafting stages.",
  },
];

export const DESIGNER_FEATURES = [
  {
    title: "Afro-Centric Silhouette Studio",
    description:
      "Develop Agbada cuts, corseted Aso-Ebi bodices, and modern Senator variations with AI-assisted drafting.",
  },
  {
    title: "Filigree & Embroidery Digitiser",
    description:
      "Design intricate neck and chest embroidery patterns and export stitch-count files directly for Nigerian embroidery artisans.",
  },
  {
    title: "Pattern Drafting & Grade Adjustments",
    description:
      "Generate standard and custom slopers calibrated for Nigerian body postures and proportions.",
  },
  {
    title: "Production Tech Pack Exports",
    description:
      "Export comprehensive tech packs with stitch specifications, fabric tolerances, and yardage requirements for tailors.",
  },
  {
    title: "Fabric Yardage Calculator",
    description:
      "Calculate precise yardage for multi-piece Agbadas, buba & sokoto, and lining to minimise fabric waste.",
  },
  {
    title: "Lagos & Abuja Atelier Collaboration",
    description:
      "Annotate technical specifications in real-time with master tailors and clients across Nigeria and the diaspora.",
  },
];

export const TAILOR_FEATURES = [
  {
    title: "Verified Nigerian Design Requests",
    description:
      "Access a steady stream of verified customer briefs with complete visual tech packs and sketches ready for production.",
  },
  {
    title: "Structured Naira Quotation Builder",
    description:
      "Set your own labor fees, fabric costs, and rush rates with our automated itemised quotation generator.",
  },
  {
    title: "Measurement & Fit Review",
    description:
      "Inspect detailed client measurements, posture profiles, and fitting preferences before committing to a commission.",
  },
  {
    title: "Milestone Order Management",
    description:
      "Keep production on track with structured stages: Fabric Intake, Precision Cutting, Basting Fitting, and Final Press.",
  },
  {
    title: "Guaranteed Milestone Payouts",
    description:
      "Direct bank deposits into any Nigerian commercial bank upon client sign-off at each production checkpoint.",
  },
  {
    title: "Nationwide & Diaspora Delivery Bridge",
    description:
      "Integrated logistics for seamless delivery within Lagos, Abuja, Port Harcourt, and dispatch to UK, US, and Canada.",
  },
];

export const TRUST_POINTS = [
  {
    number: "01",
    title: "Vetted Nigerian Atelier Guild",
    description:
      "Every master tailor and designer across Lagos, Abuja, and nationwide undergoes strict craftsmanship checks and portfolio vetting.",
    badge: "100% Vetted Guild",
  },
  {
    number: "02",
    title: "Transparent Naira Pricing",
    description:
      "Review itemised quotations detailing fabric grade, embroidery complexity, and tailoring hours in Naira. Zero hidden fees.",
    badge: "Transparent Quotes",
  },
  {
    number: "03",
    title: "Protected Escrow Payments",
    description:
      "Funds are held securely and released in milestones as the tailor completes fabric cutting, fitting, and delivery.",
    badge: "Milestone Escrow",
  },
  {
    number: "04",
    title: "Authentic Fabric Provenance",
    description:
      "Guaranteed authentic textiles: certified Austrian Getzner brocade, genuine hand-loomed Aso-Oke, and European wools.",
    badge: "Verified Textiles",
  },
];

export const FOOTER_LINKS = {
  explore: [
    { label: "AI Design Studio", href: "/studio" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Nigerian Fashion Showcase", href: "/#showcase" },
    { label: "Client Experience", href: "/#customer" },
  ],
  professionals: [
    { label: "Designer CAD Studio", href: "/#designers" },
    { label: "Tailor Marketplace", href: "/#tailors" },
    { label: "Join as a Nigerian Designer", href: "/signup?role=designer" },
    { label: "Join Master Tailors Guild", href: "/signup?role=tailor" },
  ],
  company: [
    { label: "About FUETELLE Nigeria", href: "/#brand-statement" },
    { label: "Lagos & Abuja Ateliers", href: "/#trust" },
    { label: "Concierge & Fittings", href: "/contact" },
    { label: "Diaspora Shipping FAQs", href: "/#faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Escrow & Milestone Policy", href: "/payment-policy" },
    { label: "Craftsmanship Guarantee", href: "/guarantee" },
  ],
};
