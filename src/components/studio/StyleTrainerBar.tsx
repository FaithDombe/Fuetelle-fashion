"use client";

import { useState } from "react";
import {
  Heart,
  ThumbsDown,
  Sparkles,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type {
  GeneratedDesignData,
  FeedbackSubmission,
  RejectionReasonTag,
  AttributeVotes,
} from "@/lib/types/atelier";

interface StyleTrainerBarProps {
  design: GeneratedDesignData;
  aiMatchScore: number;
  onFeedbackSubmit: (feedback: FeedbackSubmission) => Promise<void>;
  onSaveToWardrobe: () => void;
  isSaved?: boolean;
}

const REJECTION_TAGS: RejectionReasonTag[] = [
  "Wrong Silhouette",
  "Color Clash",
  "Too Casual",
  "Poor Fit",
  "Fabric Dislike",
  "Excessive Volume",
  "Needs More Structure",
];

export default function StyleTrainerBar({
  design,
  aiMatchScore,
  onFeedbackSubmit,
  onSaveToWardrobe,
  isSaved = false,
}: StyleTrainerBarProps) {
  const [attributeVotes, setAttributeVotes] = useState<AttributeVotes>({
    color: 0,
    silhouette: 0,
    fabric: 0,
  });
  const [selectedReasons, setSelectedReasons] = useState<RejectionReasonTag[]>([]);
  const [showRejectionDrawer, setShowRejectionDrawer] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastActionToast, setLastActionToast] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setLastActionToast(msg);
    setTimeout(() => setLastActionToast(null), 3000);
  };

  const handleVoteAttribute = async (
    attr: "color" | "silhouette" | "fabric",
    vote: 1 | -1
  ) => {
    const currentVote = attributeVotes[attr];
    const newVote = currentVote === vote ? 0 : vote;
    const updatedVotes = { ...attributeVotes, [attr]: newVote };
    setAttributeVotes(updatedVotes);

    try {
      await onFeedbackSubmit({
        designId: design.id,
        rating: newVote === 1 ? "LOVE" : "DISLIKE",
        attributeVotes: updatedVotes,
      });
      triggerToast(
        newVote === 1
          ? `+ Calibrated Taste DNA: Preferred ${attr.toUpperCase()}`
          : `- Calibrated Taste DNA: Reduced ${attr.toUpperCase()} weight`
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleLove = async () => {
    setIsSubmitting(true);
    try {
      await onFeedbackSubmit({
        designId: design.id,
        rating: "LOVE",
        attributeVotes: { color: 1, silhouette: 1, fabric: 1 },
      });
      onSaveToWardrobe();
      triggerToast("✨ Haute Couture Approved & Added to Taste DNA Dataset");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleReason = (reason: RejectionReasonTag) => {
    setSelectedReasons((prev) =>
      prev.includes(reason)
        ? prev.filter((r) => r !== reason)
        : [...prev, reason]
    );
  };

  const handleSubmitRejection = async () => {
    setIsSubmitting(true);
    try {
      await onFeedbackSubmit({
        designId: design.id,
        rating: "DISLIKE",
        rejectionReasons: selectedReasons,
        attributeVotes,
      });
      setShowRejectionDrawer(false);
      triggerToast("Negative constraints recorded in your Style DNA vector");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF9F6] border border-[#E5E2DC] p-3.5 space-y-3 shadow-xs">
      {/* Header: Live AI Style Match Meter */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
          <span className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold">
            AI Taste Engine Calibration
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] font-mono uppercase text-[#66645F]">
            Match Confidence:
          </span>
          <span className="text-xs font-mono font-bold text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 border border-[#C5A059]/30">
            {aiMatchScore.toFixed(1)}% Style DNA
          </span>
        </div>
      </div>

      {/* Progress Bar Meter */}
      <div className="w-full bg-[#E5E2DC] h-1.5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#C5A059] to-[#236B4A] h-full transition-all duration-700 ease-out"
          style={{ width: `${Math.min(100, Math.max(10, aiMatchScore))}%` }}
        />
      </div>

      {/* Feedback & Training Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#E5E2DC]">
        {/* Attribute-Level Fine Tuning */}
        <div className="flex items-center space-x-3 text-[11px] font-sans">
          <span className="text-[10px] uppercase font-mono text-[#66645F]">
            Attributes:
          </span>

          {/* Color vote */}
          <div className="flex items-center space-x-1">
            <span className="text-[#66645F]">Color</span>
            <button
              type="button"
              onClick={() => handleVoteAttribute("color", 1)}
              className={`px-1.5 py-0.5 border text-[10px] font-mono transition-colors ${
                attributeVotes.color === 1
                  ? "bg-[#236B4A] text-white border-[#236B4A]"
                  : "border-[#E5E2DC] hover:border-black text-[#111111]"
              }`}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => handleVoteAttribute("color", -1)}
              className={`px-1.5 py-0.5 border text-[10px] font-mono transition-colors ${
                attributeVotes.color === -1
                  ? "bg-[#991B1B] text-white border-[#991B1B]"
                  : "border-[#E5E2DC] hover:border-black text-[#111111]"
              }`}
            >
              -
            </button>
          </div>

          {/* Cut/Silhouette vote */}
          <div className="flex items-center space-x-1">
            <span className="text-[#66645F]">Cut</span>
            <button
              type="button"
              onClick={() => handleVoteAttribute("silhouette", 1)}
              className={`px-1.5 py-0.5 border text-[10px] font-mono transition-colors ${
                attributeVotes.silhouette === 1
                  ? "bg-[#236B4A] text-white border-[#236B4A]"
                  : "border-[#E5E2DC] hover:border-black text-[#111111]"
              }`}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => handleVoteAttribute("silhouette", -1)}
              className={`px-1.5 py-0.5 border text-[10px] font-mono transition-colors ${
                attributeVotes.silhouette === -1
                  ? "bg-[#991B1B] text-white border-[#991B1B]"
                  : "border-[#E5E2DC] hover:border-black text-[#111111]"
              }`}
            >
              -
            </button>
          </div>

          {/* Fabric vote */}
          <div className="flex items-center space-x-1">
            <span className="text-[#66645F]">Fabric</span>
            <button
              type="button"
              onClick={() => handleVoteAttribute("fabric", 1)}
              className={`px-1.5 py-0.5 border text-[10px] font-mono transition-colors ${
                attributeVotes.fabric === 1
                  ? "bg-[#236B4A] text-white border-[#236B4A]"
                  : "border-[#E5E2DC] hover:border-black text-[#111111]"
              }`}
            >
              +
            </button>
            <button
              type="button"
              onClick={() => handleVoteAttribute("fabric", -1)}
              className={`px-1.5 py-0.5 border text-[10px] font-mono transition-colors ${
                attributeVotes.fabric === -1
                  ? "bg-[#991B1B] text-white border-[#991B1B]"
                  : "border-[#E5E2DC] hover:border-black text-[#111111]"
              }`}
            >
              -
            </button>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Dislike / Reject */}
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => setShowRejectionDrawer(!showRejectionDrawer)}
            className="flex items-center space-x-1 px-3 py-1.5 border border-[#E5E2DC] hover:border-[#111111] text-xs font-sans text-[#66645F] hover:text-[#111111] transition-colors"
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            <span>Refine / Reject</span>
            {showRejectionDrawer ? (
              <ChevronUp className="w-3 h-3 ml-0.5" />
            ) : (
              <ChevronDown className="w-3 h-3 ml-0.5" />
            )}
          </button>

          {/* Love / Save to Wardrobe */}
          <button
            type="button"
            disabled={isSubmitting}
            onClick={handleLove}
            className={`flex items-center space-x-1.5 px-4 py-1.5 text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
              isSaved
                ? "bg-[#236B4A] text-white"
                : "bg-[#111111] hover:bg-[#C5A059] text-white"
            }`}
          >
            {isSaved ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Saved to Wardrobe</span>
              </>
            ) : (
              <>
                <Heart className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Love & Train AI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Rejection Reasons Accordion Drawer */}
      {showRejectionDrawer && (
        <div className="pt-2 border-t border-[#E5E2DC] space-y-2 animate-in fade-in duration-200">
          <p className="text-[11px] text-[#66645F]">
            Select why this garment missed your personal standard (trains negative prompt constraints):
          </p>
          <div className="flex flex-wrap gap-1.5">
            {REJECTION_TAGS.map((tag) => {
              const isSelected = selectedReasons.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleToggleReason(tag)}
                  className={`text-[10px] font-sans px-2.5 py-1 border transition-all ${
                    isSelected
                      ? "border-[#111111] bg-[#111111] text-white"
                      : "border-[#E5E2DC] bg-white text-[#66645F] hover:border-black hover:text-black"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <div className="flex justify-end pt-1">
            <button
              type="button"
              disabled={selectedReasons.length === 0 || isSubmitting}
              onClick={handleSubmitRejection}
              className="text-xs bg-[#111111] text-white px-3.5 py-1 uppercase tracking-wider font-medium disabled:opacity-40"
            >
              Update Style Constraints
            </button>
          </div>
        </div>
      )}

      {/* Dynamic Action Notification */}
      {lastActionToast && (
        <div className="text-[11px] font-mono text-[#236B4A] bg-[#236B4A]/10 px-3 py-1 border border-[#236B4A]/20 flex items-center space-x-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>{lastActionToast}</span>
        </div>
      )}
    </div>
  );
}
