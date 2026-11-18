"use client";

import { useState } from "react";
import Image from "next/image";
import { X, CheckCircle2, ShieldCheck, Clock, Scissors, Layers, Sparkles } from "lucide-react";
import type { GarmentArchetype, FabricSwatch, SilhouetteOption, HardwareOption } from "@/lib/studio-data";

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  designName: string;
  archetype: GarmentArchetype;
  silhouette: SilhouetteOption;
  fabric: FabricSwatch;
  hardware: HardwareOption;
  customPrompt: string;
}

export default function CommissionModal({
  isOpen,
  onClose,
  designName,
  archetype,
  silhouette,
  fabric,
  hardware,
  customPrompt,
}: CommissionModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientNotes, setClientNotes] = useState("");
  const [preferredTimeline, setPreferredTimeline] = useState("standard");
  const [deliveryLocation, setDeliveryLocation] = useState("lagos");
  const [referenceId, setReferenceId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReferenceId(`FTL-NG-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B0C]/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-[#F9F8F6] max-w-2xl w-full border border-[#E5E2DC] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#F9F8F6] border border-[#E5E2DC] text-[#0B0B0C] hover:text-[#66645F] focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-1.5 text-[#C5A880] text-[11px] font-sans uppercase tracking-[0.2em] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nigerian Bespoke Commission Brief</span>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-3xl text-[#0B0B0C] font-normal">
                  {designName || archetype.name}
                </h3>
                <span className="font-mono text-sm text-[#236B4A] bg-[#236B4A]/10 px-3 py-1 font-semibold">
                  ₦{archetype.basePriceNaira.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-[#66645F] font-sans mt-1">
                Review your bespoke technical specification before requesting master tailor bids.
              </p>
            </div>

            {/* Garment Preview Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#F0EDE7]/60 border border-[#E5E2DC] mb-6 text-xs font-sans">
              <div className="relative aspect-square w-full sm:w-auto overflow-hidden bg-[#E5E2DC]">
                <Image
                  src={archetype.image}
                  alt={archetype.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="sm:col-span-2 space-y-2 flex flex-col justify-center">
                <div>
                  <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block">
                    Cut & Silhouette
                  </span>
                  <p className="font-serif text-sm text-[#0B0B0C] font-medium">
                    {silhouette.name}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block">
                    Authentic Textile
                  </span>
                  <p className="font-serif text-sm text-[#0B0B0C] font-medium">
                    {fabric.name} ({fabric.origin})
                  </p>
                </div>
                <div>
                  <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block">
                    Hardware & Details
                  </span>
                  <p className="font-serif text-sm text-[#0B0B0C] font-medium">
                    {hardware.name}
                  </p>
                </div>
                {customPrompt && (
                  <div>
                    <span className="text-[10px] text-[#C5A880] uppercase tracking-wider block">
                      Creative Concept
                    </span>
                    <p className="font-sans text-xs text-[#66645F] italic line-clamp-1">
                      &ldquo;{customPrompt}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Spec Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6 text-center text-xs font-sans">
              <div className="p-3 bg-[#F9F8F6] border border-[#E5E2DC]">
                <Clock className="w-3.5 h-3.5 mx-auto text-[#C5A880] mb-1" />
                <span className="text-[10px] uppercase text-[#66645F] block">Atelier Time</span>
                <span className="font-serif text-sm font-medium text-[#0B0B0C]">
                  ~{archetype.baseCraftingHours} hrs
                </span>
              </div>
              <div className="p-3 bg-[#F9F8F6] border border-[#E5E2DC]">
                <Layers className="w-3.5 h-3.5 mx-auto text-[#C5A880] mb-1" />
                <span className="text-[10px] uppercase text-[#66645F] block">Yardage</span>
                <span className="font-serif text-sm font-medium text-[#0B0B0C]">
                  {archetype.baseYardage}m
                </span>
              </div>
              <div className="p-3 bg-[#F9F8F6] border border-[#E5E2DC]">
                <Scissors className="w-3.5 h-3.5 mx-auto text-[#236B4A] mb-1" />
                <span className="text-[10px] uppercase text-[#66645F] block">Tailors Guild</span>
                <span className="font-serif text-sm font-medium text-[#236B4A]">
                  Lagos &bull; Abuja
                </span>
              </div>
            </div>

            {/* Commission Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-sans text-[#66645F] mb-1.5 font-medium">
                  Delivery Location
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-sans">
                  <button
                    type="button"
                    onClick={() => setDeliveryLocation("lagos")}
                    className={`p-2.5 text-center border transition-colors ${
                      deliveryLocation === "lagos"
                        ? "border-[#0B0B0C] bg-[#F0EDE7] font-medium text-[#0B0B0C]"
                        : "border-[#E5E2DC] text-[#66645F]"
                    }`}
                  >
                    Lagos (Island/Mainland)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryLocation("abuja")}
                    className={`p-2.5 text-center border transition-colors ${
                      deliveryLocation === "abuja"
                        ? "border-[#0B0B0C] bg-[#F0EDE7] font-medium text-[#0B0B0C]"
                        : "border-[#E5E2DC] text-[#66645F]"
                    }`}
                  >
                    Abuja / Federal Capital
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryLocation("diaspora")}
                    className={`p-2.5 text-center border transition-colors ${
                      deliveryLocation === "diaspora"
                        ? "border-[#0B0B0C] bg-[#F0EDE7] font-medium text-[#0B0B0C]"
                        : "border-[#E5E2DC] text-[#66645F]"
                    }`}
                  >
                    Diaspora (UK/US/CA)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-sans text-[#66645F] mb-1.5 font-medium">
                  Timeline Preference
                </label>
                <div className="grid grid-cols-2 gap-3 text-xs font-sans">
                  <button
                    type="button"
                    onClick={() => setPreferredTimeline("standard")}
                    className={`p-3 text-left border transition-colors ${
                      preferredTimeline === "standard"
                        ? "border-[#0B0B0C] bg-[#F0EDE7] font-medium text-[#0B0B0C]"
                        : "border-[#E5E2DC] text-[#66645F]"
                    }`}
                  >
                    <span>Standard Nigerian Atelier</span>
                    <span className="block text-[10px] text-[#66645F]">3 &ndash; 4 Weeks</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredTimeline("rush")}
                    className={`p-3 text-left border transition-colors ${
                      preferredTimeline === "rush"
                        ? "border-[#0B0B0C] bg-[#F0EDE7] font-medium text-[#0B0B0C]"
                        : "border-[#E5E2DC] text-[#66645F]"
                    }`}
                  >
                    <span>Priority Rush Delivery</span>
                    <span className="block text-[10px] text-[#66645F]">10 &ndash; 14 Days</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-sans text-[#66645F] mb-1.5 font-medium">
                  Event / Fitting Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder="e.g. Traditional wedding in Lekki on the 24th, prefer high wrist cut and deep Agbada pocket..."
                  className="w-full p-3 text-xs font-sans bg-[#F9F8F6] border border-[#E5E2DC] focus:border-[#C5A880] focus:outline-none transition-colors resize-none placeholder:text-[#66645F]/50"
                />
              </div>

              <div className="pt-2 flex items-center space-x-2 text-[11px] text-[#66645F] font-sans">
                <ShieldCheck className="w-4 h-4 text-[#236B4A] flex-shrink-0" />
                <span>Protected milestone payments in Naira (₦) held securely via escrow until delivery.</span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:bg-[#66645F] transition-colors"
                >
                  Request Master Tailor Quotations (₦) &rarr;
                </button>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto py-3.5 px-6 border border-[#E5E2DC] text-[#0B0B0C] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:bg-[#F0EDE7] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="p-8 sm:p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-[#236B4A]/10 text-[#236B4A] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-sans font-semibold block mb-1">
              Specification Registered &bull; Nigeria Guild
            </span>

            <h3 className="font-serif text-3xl text-[#0B0B0C] font-normal mb-3">
              Bespoke Brief Dispatched
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#66645F] max-w-md mx-auto leading-relaxed mb-8">
              Your technical garment specification for <strong>{designName || archetype.name}</strong> has been packaged. Verified master tailors across Lagos and Abuja are reviewing fabric yardage and labor hours.
            </p>

            <div className="p-4 bg-[#F0EDE7]/60 border border-[#E5E2DC] max-w-sm mx-auto mb-8 text-xs font-sans text-left space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#66645F]">Reference ID:</span>
                <span className="font-mono text-[#0B0B0C]">{referenceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#66645F]">Fabric Mill:</span>
                <span className="text-[#0B0B0C]">{fabric.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#66645F]">Destination:</span>
                <span className="text-[#0B0B0C] capitalize">{deliveryLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#66645F]">Estimated Quotations:</span>
                <span className="text-[#236B4A] font-medium">Within 24 Hours (₦)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="py-3.5 px-8 bg-[#0B0B0C] text-[#F9F8F6] text-xs uppercase tracking-[0.16em] font-sans font-medium hover:bg-[#66645F] transition-colors"
            >
              Return to Studio
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
