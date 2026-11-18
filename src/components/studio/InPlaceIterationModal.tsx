"use client";

import { useState } from "react";
import { Sparkles, X, RefreshCw } from "lucide-react";
import type { GeneratedDesignData } from "@/lib/types/atelier";

interface InPlaceIterationModalProps {
  isOpen: boolean;
  onClose: () => void;
  baseDesign: GeneratedDesignData;
  onExecuteIteration: (refinementPrompt: string) => Promise<void>;
  isIterating: boolean;
}

const ITERATION_CHIPS = [
  "Make the sleeves billowy and widen the cuff opening",
  "Shorten the hem to contemporary midi length",
  "Add intricate gold metallic cord embroidery on the collar",
  "Increase the shoulder structure with sharp architectural padding",
  "Accentuate the waist with a tailored sash tie",
  "Convert neckline into a deep asymmetric Mandarin collar",
];

export default function InPlaceIterationModal({
  isOpen,
  onClose,
  baseDesign,
  onExecuteIteration,
  isIterating,
}: InPlaceIterationModalProps) {
  const [refinementPrompt, setRefinementPrompt] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!refinementPrompt.trim() || isIterating) return;
    await onExecuteIteration(refinementPrompt.trim());
    setRefinementPrompt("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#FAF9F6] border border-[#E5E2DC] shadow-2xl p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DC]">
          <div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                CONVERSATIONAL DESIGN ITERATION (v{baseDesign.iterationVersion})
              </span>
            </div>
            <h2 className="text-lg font-serif text-[#111111] mt-0.5">
              Refine & Evolve Silhouette
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 border border-[#E5E2DC] hover:border-black transition-colors"
          >
            <X className="w-4 h-4 text-[#111111]" />
          </button>
        </div>

        {/* Base Context Banner */}
        <div className="bg-[#F0EDE7] border border-[#E5E2DC] p-3 text-xs text-[#66645F] space-y-1 font-sans">
          <div className="flex items-center justify-between font-mono text-[10px] text-[#C5A059] uppercase">
            <span>Preserved Base Context</span>
            <span>ID: {baseDesign.id}</span>
          </div>
          <p className="line-clamp-2 text-[#111111] italic font-serif">
            &ldquo;{baseDesign.prompt}&rdquo;
          </p>
        </div>

        {/* Prompt Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold">
              Enter Iterative Tweaks
            </label>
            <textarea
              value={refinementPrompt}
              onChange={(e) => setRefinementPrompt(e.target.value)}
              placeholder="e.g. Make the sleeves billowy, sharpen the shoulder slope, and shorten the hem to midi length..."
              rows={3}
              className="w-full bg-white border border-[#E5E2DC] focus:border-[#111111] p-3 text-xs text-[#111111] focus:outline-hidden transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* Quick refinement chip suggestions */}
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-mono text-[#66645F] block">
              Quick Stylist Refinements:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {ITERATION_CHIPS.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setRefinementPrompt(chip)}
                  className="text-[10px] font-sans px-2.5 py-1 border border-[#E5E2DC] bg-white hover:border-[#111111] text-[#66645F] hover:text-[#111111] transition-all text-left"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end space-x-2 pt-2 border-t border-[#E5E2DC]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#E5E2DC] hover:border-black text-xs uppercase tracking-wider font-medium text-[#66645F]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!refinementPrompt.trim() || isIterating}
              className="flex items-center space-x-2 bg-[#111111] hover:bg-[#C5A059] text-white px-5 py-2 text-xs uppercase tracking-wider font-semibold transition-all disabled:opacity-40"
            >
              {isIterating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#C5A059]" />
                  <span>Iterating Design...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Execute Refinement (v{(baseDesign.iterationVersion || 1) + 1})</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
