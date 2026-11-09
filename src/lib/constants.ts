export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Explore Designs", href: "#showcase" },
  { label: "For Designers", href: "#designers" },
  { label: "For Tailors", href: "#tailors" },
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
    label: "Share Your Vision",
    title: "Start With an Idea.",
    description:
      "Capture your inspiration through fabric photographs, sketches, voice notes, or written descriptions. Tell us what you want to wear and how you want it to feel.",
    imageUrl:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Textile swatches and creative mood board in a design atelier",
    tag: "Inspiration & Mood",
  },
  {
    number: "02",
    label: "Visualise Your Design",
    title: "See Your Idea Come Alive.",
    description:
      "AI transforms your creative input into visual fashion concepts. Explore different silhouettes, details, and design variations before production begins.",
    imageUrl:
      "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=900",
    imageAlt: "AI-assisted digital garment silhouettes and concept iterations",
    tag: "Generative Silhouettes",
  },
  {
    number: "03",
    label: "Refine With Professionals",
    title: "Designed With Precision.",
    description:
      "Professional designers refine your concept, develop garment components, and prepare technical specifications to support production.",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Fashion designer drafting technical garment patterns and measurements",
    tag: "Technical Specification",
  },
  {
    number: "04",
    label: "Bring It to Life",
    title: "Made by Skilled Hands.",
    description:
      "Connect with participating tailors, review quotations, commission production, and follow your garment from cutting to delivery.",
    imageUrl:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=900",
    imageAlt: "Master tailor in traditional bespoke tailoring atelier crafting a garment",
    tag: "Atelier Craftsmanship",
  },
];

export const SHOWCASE_CATEGORIES = [
  "All",
  "Contemporary Menswear",
  "Elegant Womenswear",
  "Traditional & Cultural Wear",
  "Modern Streetwear",
  "Bespoke Tailoring",
  "Evening & Occasion Wear",
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
  atelierNote: string;
  isFeatured?: boolean;
}

export const FEATURED_DESIGN: ShowcaseItem = {
  id: "featured-01",
  title: "The Architectural Wool Wrap Coat",
  category: "Bespoke Tailoring",
  description:
    "Sculpted with cascading lapels and asymmetric closures, tailored from double-faced virgin wool and unlined for pure drape. Developed through AI silhouette modeling and finished by Savile Row-trained master craftsmen.",
  imageUrl:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
  fabric: "Double-Faced Loro Piana Virgin Wool (480gsm)",
  silhouette: "Asymmetric Cocoon with Sculpted Belt",
  craftingTime: "18 atelier hours",
  atelierNote: "Hand-finished pick-stitched edges & horn buttons",
  isFeatured: true,
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "menswear-01",
    title: "Structured Neapolitan Double-Breasted Suit",
    category: "Contemporary Menswear",
    description:
      "Lightweight canvas construction with soft shoulders, high armholes, and subtle roping for effortless elegance in modern metropolitan life.",
    imageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900",
    fabric: "Super 150s Merino Wool in Charcoal Melange",
    silhouette: "Neapolitan Tailored Fit",
    craftingTime: "24 atelier hours",
    atelierNote: "Half-canvassed construction with horn closures",
  },
  {
    id: "womenswear-01",
    title: "High-Neck Fluid Draped Column Gown",
    category: "Elegant Womenswear",
    description:
      "A seamless study in fluid geometry. Bias-cut silk georgette with an open back and gentle sweep, engineered to individual posture and stride.",
    imageUrl:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=900",
    fabric: "Mulberry Silk Crepe de Chine",
    silhouette: "Bias-Cut Column",
    craftingTime: "16 atelier hours",
    atelierNote: "French seams and hand-rolled baby hems",
  },
  {
    id: "cultural-01",
    title: "Embroidered Heritage Agbada Ensemble",
    category: "Traditional & Cultural Wear",
    description:
      "Contemporary reimagining of ceremonial West African royalty. Features hand-loomed Aso-Oke accents, intricate tonal cordon embroidery, and architectural drape.",
    imageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=900",
    fabric: "Hand-Woven Raw Silk & Organic Cotton Damask",
    silhouette: "Grand Three-Piece Robe & Tapered Trouser",
    craftingTime: "32 atelier hours",
    atelierNote: "Custom geometric filigree embroidery pattern",
  },
  {
    id: "streetwear-01",
    title: "Minimalist Utility Trench & Cargo Trouser",
    category: "Modern Streetwear",
    description:
      "Where high tailoring meets pragmatic urbanism. Water-repellent technical gabardine with hidden magnetic closures and ergonomic articulated knees.",
    imageUrl:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=900",
    fabric: "Ventile High-Density Cotton Gabardine",
    silhouette: "Relaxed Boxy Silhouette",
    craftingTime: "14 atelier hours",
    atelierNote: "Bonded waterproof seams and matte gunmetal hardware",
  },
  {
    id: "tailoring-01",
    title: "Bespoke Peak-Lapel Dinner Jacket",
    category: "Bespoke Tailoring",
    description:
      "Handcrafted evening masterpiece featuring grosgrain silk lapels, working surgeon cuffs, and bespoke horsehair chest canvas molded precisely to the torso.",
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=900",
    fabric: "Midnight Blue Barathea Wool & Silk Faille",
    silhouette: "Hourglass Bespoke Evening Cut",
    craftingTime: "36 atelier hours",
    atelierNote: "Fully hand-padded canvas and handmade buttonholes",
  },
  {
    id: "occasion-01",
    title: "Sculptural Corseted Satin Evening Gown",
    category: "Evening & Occasion Wear",
    description:
      "Draped duchess satin over an internal boned micro-corset. Sculpted folds cascade from the waist into a structured dramatic silhouette.",
    imageUrl:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=900",
    fabric: "Heavy Italian Silk Duchess Satin",
    silhouette: "Internal Corset with Asymmetric Peplum",
    craftingTime: "28 atelier hours",
    atelierNote: "Steel spiral boning and invisible hand-sewn zipper",
  },
];

export const CUSTOMER_FEATURES = [
  {
    title: "AI-Powered Fashion Concepts",
    description:
      "Generate multiple visual interpretations of your style thoughts in seconds before committing to fabric.",
  },
  {
    title: "Personalised Garment Specs",
    description:
      "Every detail from collar notch angle to lining pattern is tailored to your taste and comfort.",
  },
  {
    title: "Body Measurement Profiles",
    description:
      "Store and refine your 3D biometric measurements securely for consistent fit across all creations.",
  },
  {
    title: "Professional Tailor Quotations",
    description:
      "Receive transparent, itemised cost estimates covering materials, hours, and finishing.",
  },
  {
    title: "Production Milestone Tracking",
    description:
      "Follow every phase of your creation with real-time status updates from pattern cutting to final press.",
  },
  {
    title: "Protected Payment Workflows",
    description:
      "Platform safeguards ensure payments are held securely and released upon milestone completion.",
  },
];

export const DESIGNER_FEATURES = [
  {
    title: "Concept Development Engine",
    description:
      "Translate raw client moodboards into cohesive design proposals with AI-assisted texture and silhouette rendering.",
  },
  {
    title: "Garment Component Breakdown",
    description:
      "Deconstruct garments automatically into collars, cuffs, yokes, and plackets for clear client consultation.",
  },
  {
    title: "Pattern Drafting Assistance",
    description:
      "Generate standard and custom slopers with automated grade adjustments to match exact customer profiles.",
  },
  {
    title: "Technical Specification Exports",
    description:
      "Export production-ready tech packs with stitch details, seams, seam allowances, and measurement tolerances.",
  },
  {
    title: "Fabric & Yardage Estimation",
    description:
      "Calculate precise fabric yardage, interfacing, and lining requirements to minimise textile waste.",
  },
  {
    title: "Collaborative Atelier Bridge",
    description:
      "Seamlessly annotate technical specifications with tailor partners and clients in one shared interface.",
  },
];

export const TAILOR_FEATURES = [
  {
    title: "Curated Design Requests",
    description:
      "Access a steady stream of verified customer briefs with complete visual and technical briefs ready for execution.",
  },
  {
    title: "Direct Measurement Review",
    description:
      "Inspect detailed customer measurements, posture notes, and fit preferences before accepting an assignment.",
  },
  {
    title: "Itemised Quotation Builder",
    description:
      "Define your own labor rates, material charges, and rush options with our structured quotation generator.",
  },
  {
    title: "Order & Milestone Management",
    description:
      "Keep production organised with digital milestone stages: cutting, basting, first fitting, and finishing.",
  },
  {
    title: "Quality Assurance Coordination",
    description:
      "Upload progress photos and fitting confirmations to guarantee mutual satisfaction before delivery.",
  },
  {
    title: "Transparent Earnings Visibility",
    description:
      "Clear accounting records and dependable automated payouts upon customer sign-off.",
  },
];

export const TRUST_POINTS = [
  {
    number: "01",
    title: "Verified Professionals",
    description:
      "Every designer and master tailor undergoes rigorous portfolio verification, craftsmanship vetting, and reference checks.",
    badge: "100% Vetted Guild",
  },
  {
    number: "02",
    title: "Transparent Quotations",
    description:
      "Review comprehensive, itemised quotations detailing fabric grades, crafting hours, and trimming costs before approving an order.",
    badge: "Zero Hidden Fees",
  },
  {
    number: "03",
    title: "Protected Payment Workflow",
    description:
      "Designed to support controlled fund releases linked to milestone approvals, keeping both clients and artisans secure.",
    badge: "Milestone Security",
  },
  {
    number: "04",
    title: "Production Visibility",
    description:
      "Structured milestone checkpoints allow you to inspect cutting, fitting, and finishing stages with high-resolution imagery.",
    badge: "Step-by-Step Proof",
  },
];

export const FOOTER_LINKS = {
  explore: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Fashion Showcase", href: "#showcase" },
    { label: "Customer Experience", href: "#customer" },
    { label: "Design Concept Gallery", href: "#showcase" },
  ],
  professionals: [
    { label: "Designer Studio", href: "#designers" },
    { label: "Tailor Marketplace", href: "#tailors" },
    { label: "Join as a Designer", href: "/signup?role=designer" },
    { label: "Join as a Tailor", href: "/signup?role=tailor" },
  ],
  company: [
    { label: "About FUETELLE", href: "#brand-statement" },
    { label: "Atelier Standards", href: "#trust" },
    { label: "Contact Concierge", href: "/contact" },
    { label: "Frequently Asked Questions", href: "#faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Payment & Milestone Policy", href: "/payment-policy" },
    { label: "Craftsmanship Guarantee", href: "/guarantee" },
  ],
};
