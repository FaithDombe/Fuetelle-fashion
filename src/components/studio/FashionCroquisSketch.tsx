"use client";

import { useId } from "react";
import type { GarmentArchetype, FabricSwatch, SilhouetteOption } from "@/lib/studio-data";

interface FashionCroquisSketchProps {
  archetype: GarmentArchetype;
  silhouette: SilhouetteOption;
  fabric: FabricSwatch;
  customPrompt: string;
}

export default function FashionCroquisSketch({
  archetype,
  silhouette,
  fabric,
  customPrompt,
}: FashionCroquisSketchProps) {
  const filterId = useId();

  // Determine primary color tone for ink wash
  const inkWashColor = fabric.colorHex;

  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center p-4 bg-[#F5F2EB] border border-[#E5E2DC] shadow-inner overflow-hidden select-none">
      {/* Textured Paper Backdrop Grain */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(#8C8275 0.75px, transparent 0.75px), radial-gradient(#8C8275 0.75px, #F5F2EB 0.75px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />

      {/* Atelier Watermark & Grid */}
      <div className="absolute top-4 left-4 flex flex-col text-[9px] font-mono tracking-widest uppercase text-[#8C8275]">
        <span>FUETELLE ATELIER NIGERIA</span>
        <span>TECHNICAL CROQUIS &bull; SPEC N&deg; {archetype.id.toUpperCase()}-2026</span>
        <span>LAGOS &bull; ABUJA GUILD</span>
      </div>

      <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 border border-[#E5E2DC] shadow-sm text-[10px] font-mono text-[#0B0B0C]">
        <span
          className="w-2.5 h-2.5 rounded-full border border-black/30"
          style={{ backgroundColor: inkWashColor }}
        />
        <span>{fabric.name.split(" ")[0]} Wash</span>
      </div>

      {/* SVG Croquis Vector Technical Drawing */}
      <div className="relative w-full max-w-[420px] aspect-[3/4] flex items-center justify-center">
        <svg
          viewBox="0 0 400 520"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ink Wash Gradient */}
            <linearGradient id={`${filterId}-ink`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={inkWashColor} stopOpacity="0.18" />
              <stop offset="100%" stopColor={inkWashColor} stopOpacity="0.32" />
            </linearGradient>

            <pattern id={`${filterId}-filigree`} width="16" height="16" patternUnits="userSpaceOnUse">
              <path d="M0 8 Q4 0 8 8 T16 8" stroke="#C5A880" strokeWidth="0.8" fill="none" opacity="0.6" />
            </pattern>
          </defs>

          {/* BACKGROUND CROQUIS MANNEQUIN GUIDE (Faint dashed guidelines) */}
          <g stroke="#D1CAC0" strokeWidth="0.75" strokeDasharray="3 3">
            {/* Centerline vertical guide */}
            <line x1="200" y1="20" x2="200" y2="500" />
            {/* Shoulder line */}
            <line x1="120" y1="100" x2="280" y2="100" />
            {/* Chest line */}
            <line x1="130" y1="160" x2="270" y2="160" />
            {/* Waist line */}
            <line x1="140" y1="230" x2="260" y2="230" />
            {/* Hem line */}
            <line x1="100" y1="460" x2="300" y2="460" />
          </g>

          {/* DYNAMIC SILHOUETTE RENDERING BASED ON ARCHETYPE */}
          {archetype.id === "agbada" ? (
            /* GRAND IMPERIAL AGBADA SKETCH */
            <g>
              {/* Grand outer robe wash */}
              <path
                d="M170 85 Q200 90 230 85 L350 160 Q340 320 285 450 L115 450 Q60 320 50 160 Z"
                fill={`url(#${filterId}-ink)`}
                stroke="#1A1816"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Shoulder drape folds */}
              <path d="M120 130 Q170 170 200 170 Q230 170 280 130" stroke="#3A352F" strokeWidth="1.2" strokeDasharray="4 2" />
              <path d="M100 180 Q160 220 200 220 Q240 220 300 180" stroke="#3A352F" strokeWidth="1.2" />
              <path d="M90 240 Q150 280 200 280 Q250 280 310 240" stroke="#3A352F" strokeWidth="1.0" opacity="0.7" />

              {/* Inner buba tunic neck opening */}
              <path d="M180 85 L200 145 L220 85" stroke="#1A1816" strokeWidth="1.6" fill="#F5F2EB" />

              {/* Iconic Chest Filigree Embroidery Plaque */}
              <rect x="160" y="145" width="80" height="90" rx="4" fill={`url(#${filterId}-filigree)`} stroke="#C5A880" strokeWidth="1.5" />
              <circle cx="200" cy="175" r="14" stroke="#C5A880" strokeWidth="1.2" fill="none" />
              <circle cx="200" cy="175" r="6" fill="#C5A880" opacity="0.6" />
              <path d="M175 210 Q200 225 225 210" stroke="#C5A880" strokeWidth="1.5" />

              {/* Coordinated Fila Cap Silhouette above neck */}
              <path d="M182 52 Q200 42 218 52 L224 75 Q200 78 176 75 Z" fill={inkWashColor} opacity="0.8" stroke="#1A1816" strokeWidth="1.4" />
              <line x1="182" y1="62" x2="218" y2="62" stroke="#C5A880" strokeWidth="1" />

              {/* Sokoto trousers peeking below hem */}
              <path d="M165 450 L160 495 L185 495 L195 450" stroke="#1A1816" strokeWidth="1.5" fill={`url(#${filterId}-ink)`} />
              <path d="M205 450 L215 495 L240 495 L235 450" stroke="#1A1816" strokeWidth="1.5" fill={`url(#${filterId}-ink)`} />

              {/* Technical Callout Lines */}
              <g stroke="#9E9282" strokeWidth="0.8">
                <line x1="50" y1="160" x2="25" y2="160" />
                <line x1="350" y1="160" x2="375" y2="160" />
                <line x1="25" y1="155" x2="25" y2="165" />
                <line x1="375" y1="155" x2="375" y2="165" />
              </g>
              <text x="200" y="32" textAnchor="middle" fill="#8C8275" fontSize="8" fontFamily="monospace">
                ARM-SPAN 156CM &bull; SCULPTED DRAPE
              </text>
            </g>
          ) : archetype.id === "senator" ? (
            /* MODERN LEKKI SENATOR SUIT SKETCH */
            <g>
              {/* Tunic Top */}
              <path
                d="M165 85 L180 80 L220 80 L235 85 L265 140 L250 360 L150 360 L135 140 Z"
                fill={`url(#${filterId}-ink)`}
                stroke="#1A1816"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Standing Mandarin Collar */}
              <path d="M182 80 L182 66 Q200 64 218 66 L218 80" stroke="#1A1816" strokeWidth="1.6" fill="#F5F2EB" />
              <circle cx="200" cy="73" r="2.5" fill="#C5A880" />

              {/* Concealed Front Fly Placket */}
              <line x1="200" y1="80" x2="200" y2="280" stroke="#1A1816" strokeWidth="1.4" strokeDasharray="5 3" />
              <rect x="194" y="95" width="12" height="150" fill="none" stroke="#C5A880" strokeWidth="0.75" />

              {/* Chest Welt Pocket with Pocket Square */}
              <line x1="158" y1="135" x2="182" y2="135" stroke="#1A1816" strokeWidth="1.5" />
              <path d="M164 135 L170 126 L176 135 Z" fill="#C5A880" />

              {/* Side Vents & Slits */}
              <line x1="150" y1="320" x2="150" y2="360" stroke="#C5A880" strokeWidth="1.5" />
              <line x1="250" y1="320" x2="250" y2="360" stroke="#C5A880" strokeWidth="1.5" />

              {/* Fitted Tapered Trousers */}
              <path
                d="M152 365 L160 495 L192 495 L198 390 L202 390 L208 495 L240 495 L248 365 Z"
                fill={`url(#${filterId}-ink)`}
                stroke="#1A1816"
                strokeWidth="1.6"
              />
              {/* Trouser Crease Lines */}
              <line x1="176" y1="375" x2="176" y2="490" stroke="#3A352F" strokeWidth="0.75" strokeDasharray="3 3" />
              <line x1="224" y1="375" x2="224" y2="490" stroke="#3A352F" strokeWidth="0.75" strokeDasharray="3 3" />
            </g>
          ) : archetype.id === "aso-ebi-gown" ? (
            /* SCULPTURAL CORSETED ASO-EBI GOWN SKETCH */
            <g>
              {/* Sweetheart Neckline & Internal Boned Bodice */}
              <path
                d="M165 110 Q182 130 200 120 Q218 130 235 110 L242 180 Q200 200 158 180 Z"
                fill={`url(#${filterId}-ink)`}
                stroke="#1A1816"
                strokeWidth="1.8"
              />

              {/* Vertical Corset Boning Channels */}
              <line x1="180" y1="126" x2="175" y2="190" stroke="#C5A880" strokeWidth="1.2" strokeDasharray="3 2" />
              <line x1="192" y1="122" x2="190" y2="194" stroke="#C5A880" strokeWidth="1.2" />
              <line x1="208" y1="122" x2="210" y2="194" stroke="#C5A880" strokeWidth="1.2" />
              <line x1="220" y1="126" x2="225" y2="190" stroke="#C5A880" strokeWidth="1.2" strokeDasharray="3 2" />

              {/* Illusion Net Décolletage & Cap Sleeves */}
              <path d="M165 110 L150 90 L180 80 Q200 82 220 80 L250 90 L235 110" stroke="#8C8275" strokeWidth="0.8" strokeDasharray="2 2" />

              {/* Asymmetric Waist Peplum Architecture */}
              <path d="M156 182 Q190 220 255 195 Q240 230 162 205 Z" fill={inkWashColor} opacity="0.6" stroke="#1A1816" strokeWidth="1.4" />

              {/* Mermaid Skirt & Sweeping Pooling Train */}
              <path
                d="M164 195 Q170 270 150 360 Q120 440 85 490 L315 490 Q280 440 250 360 Q230 270 236 195 Z"
                fill={`url(#${filterId}-ink)`}
                stroke="#1A1816"
                strokeWidth="1.8"
              />

              {/* Flowing Train Pleats */}
              <path d="M150 360 Q120 420 100 488" stroke="#3A352F" strokeWidth="1" />
              <path d="M185 365 Q170 430 155 488" stroke="#3A352F" strokeWidth="1" />
              <path d="M215 365 Q230 430 245 488" stroke="#3A352F" strokeWidth="1" />
              <path d="M250 360 Q280 420 300 488" stroke="#3A352F" strokeWidth="1" />
            </g>
          ) : (
            /* ROYAL KAFTAN / TAILORED SUIT SKETCH DEFAULT */
            <g>
              <path
                d="M160 85 L180 75 L220 75 L240 85 L280 150 L260 450 L140 450 L120 150 Z"
                fill={`url(#${filterId}-ink)`}
                stroke="#1A1816"
                strokeWidth="1.8"
              />
              <path d="M185 75 L200 135 L215 75" stroke="#1A1816" strokeWidth="1.5" />
              <line x1="200" y1="135" x2="200" y2="400" stroke="#1A1816" strokeWidth="1.2" strokeDasharray="4 3" />
              <rect x="180" y="140" width="40" height="70" fill="none" stroke="#C5A880" strokeWidth="1" />
              <circle cx="200" cy="175" r="8" stroke="#C5A880" strokeWidth="1" fill="none" />
              <line x1="140" y1="410" x2="140" y2="450" stroke="#C5A880" strokeWidth="1.5" />
              <line x1="260" y1="410" x2="260" y2="450" stroke="#C5A880" strokeWidth="1.5" />
            </g>
          )}

          {/* MEASUREMENT DIMENSION ANNOTATIONS (Tailor Chalk Style) */}
          <g stroke="#8C8275" strokeWidth="0.75" opacity="0.8">
            <line x1="75" y1="450" x2="75" y2="495" />
            <line x1="70" y1="450" x2="80" y2="450" />
            <line x1="70" y1="495" x2="80" y2="495" />
          </g>
          <text x="68" y="475" textAnchor="end" fill="#8C8275" fontSize="7" fontFamily="monospace">
            HEM DROP
          </text>

          {/* ATELIER SEED STITCH DETAIL INDICATOR */}
          <g transform="translate(30, 390)">
            <rect x="0" y="0" width="75" height="55" fill="#F9F8F6" stroke="#D1CAC0" strokeWidth="1" />
            <text x="6" y="12" fill="#0B0B0C" fontSize="7" fontFamily="monospace" fontWeight="bold">
              SPEC DETAILS
            </text>
            <text x="6" y="24" fill="#66645F" fontSize="6.5" fontFamily="sans-serif">
              &bull; Cut: {silhouette.name.slice(0, 15)}...
            </text>
            <text x="6" y="34" fill="#66645F" fontSize="6.5" fontFamily="sans-serif">
              &bull; Fabric: {fabric.name.slice(0, 14)}...
            </text>
            <text x="6" y="44" fill="#236B4A" fontSize="6.5" fontFamily="monospace" fontWeight="bold">
              &bull; Est. ₦{archetype.basePriceNaira.toLocaleString()}
            </text>
          </g>
        </svg>

        {/* Client Prompt Floating Tag at bottom */}
        {customPrompt && (
          <div className="absolute -bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md p-2.5 border border-[#E5E2DC] shadow-sm text-center">
            <span className="text-[9px] uppercase tracking-wider text-[#C5A880] font-mono block">
              Prompt Specification Interpreted
            </span>
            <p className="text-[11px] text-[#0B0B0C] font-serif italic line-clamp-1 mt-0.5">
              &ldquo;{customPrompt}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Floating Tailor Sketch Seal */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-1.5 text-[9px] font-mono text-[#8C8275] border-t border-[#8C8275]/40 pt-1">
        <span>ARCHITECTURAL TAILOR CROQUIS</span>
      </div>
    </div>
  );
}
