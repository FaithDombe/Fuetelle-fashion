"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, Download, Send } from "lucide-react";

interface StudioHeaderProps {
  designName: string;
  setDesignName: (name: string) => void;
  isAiGenerating: boolean;
  onOpenCommission: () => void;
  onExportSpec: () => void;
}

export default function StudioHeader({
  designName,
  setDesignName,
  isAiGenerating,
  onOpenCommission,
  onExportSpec,
}: StudioHeaderProps) {
  return (
    <header className="h-16 lg:h-20 bg-[#F9F8F6] border-b border-[#E5E2DC] px-4 lg:px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/"
          className="p-2 -ml-2 text-[#66645F] hover:text-[#0B0B0C] transition-colors inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-wider"
          title="Return to Atelier Home"
        >
          <ArrowLeft className="w-4 h-4 text-[#C5A880]" />
          <span className="hidden sm:inline">Exit Studio</span>
        </Link>

        <div className="h-5 w-[1px] bg-[#E5E2DC] hidden sm:block" />

        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={designName}
            onChange={(e) => setDesignName(e.target.value)}
            className="font-serif text-lg sm:text-xl text-[#0B0B0C] bg-transparent border-b border-transparent hover:border-[#C5A880]/50 focus:border-[#C5A880] focus:outline-none transition-colors px-1 py-0.5 max-w-[200px] sm:max-w-xs"
            placeholder="Name your creation..."
          />
          {isAiGenerating && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-[#C5A880]/15 text-[#9F8259] text-[10px] tracking-wider uppercase font-sans animate-pulse">
              <Sparkles className="w-3 h-3" />
              <span>AI Generating...</span>
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={onExportSpec}
          className="hidden md:inline-flex items-center space-x-1.5 px-4 py-2 border border-[#E5E2DC] hover:border-[#C5A880] text-[#0B0B0C] text-xs uppercase tracking-wider font-sans font-medium transition-colors bg-[#F9F8F6]"
        >
          <Download className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Export Spec</span>
        </button>

        <button
          type="button"
          onClick={onOpenCommission}
          className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:bg-[#66645F] transition-colors border border-[#0B0B0C]"
        >
          <span>Commission Brief</span>
          <Send className="w-3 h-3 text-[#C5A880]" />
        </button>
      </div>
    </header>
  );
}
