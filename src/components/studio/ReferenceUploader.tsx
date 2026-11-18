"use client";

import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import Image from "next/image";
import { UploadCloud, X, Tag } from "lucide-react";
import type { ReferenceImageInput, ReferenceTag } from "@/lib/types/atelier";

interface ReferenceUploaderProps {
  references: ReferenceImageInput[];
  onAddReference: (ref: ReferenceImageInput) => void;
  onRemoveReference: (id: string) => void;
  onUpdateTag: (id: string, tag: ReferenceTag) => void;
  maxFiles?: number;
}

const TAG_OPTIONS: ReferenceTag[] = ["Fabric", "Silhouette", "Model"];

export default function ReferenceUploader({
  references,
  onAddReference,
  onRemoveReference,
  onUpdateTag,
  maxFiles = 3,
}: ReferenceUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFiles = (files: FileList | null) => {
    if (!files) return;
    const remainingSlots = maxFiles - references.length;
    const filesToUpload = Array.from(files).slice(0, remainingSlots);

    filesToUpload.forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const previewUrl = URL.createObjectURL(file);
      const newRef: ReferenceImageInput = {
        id: `ref-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        url: previewUrl,
        name: file.name,
        tag: "Fabric", // Default tag
        previewUrl,
        file,
      };
      onAddReference(newRef);
    });
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    processFiles(e.dataTransfer.files);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    processFiles(e.target.files);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs uppercase font-sans tracking-[0.16em] text-[#111111] font-semibold flex items-center space-x-1.5">
          <span>Multimodal Reference Moodboard</span>
          <span className="text-[10px] text-[#66645F] font-normal">
            ({references.length}/{maxFiles} max)
          </span>
        </label>
        <span className="text-[10px] font-mono text-[#C5A059] uppercase">
          Fabric • Silhouette • Model
        </span>
      </div>

      {/* Upload Zone */}
      {references.length < maxFiles && (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border border-dashed transition-all cursor-pointer p-4 text-center ${
            isDragging
              ? "border-[#C5A059] bg-[#C5A059]/10"
              : "border-[#E5E2DC] hover:border-[#111111] bg-white/60"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center justify-center space-y-1.5">
            <UploadCloud className="w-5 h-5 text-[#C5A059]" />
            <p className="text-xs text-[#111111] font-medium">
              Drop reference image or{" "}
              <span className="underline decoration-[#C5A059] underline-offset-2">
                browse
              </span>
            </p>
            <p className="text-[10px] text-[#66645F]">
              Upload fabric swatch, silhouette drape, or muse photograph (PNG, JPG)
            </p>
          </div>
        </div>
      )}

      {/* Uploaded Reference Thumbnails */}
      {references.length > 0 && (
        <div className="grid grid-cols-3 gap-2.5 pt-1">
          {references.map((ref) => (
            <div
              key={ref.id}
              className="relative group border border-[#E5E2DC] bg-white p-1.5 shadow-xs"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#F0EDE7]">
                <Image
                  src={ref.previewUrl}
                  alt={ref.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveReference(ref.id);
                  }}
                  className="absolute top-1 right-1 bg-black/70 hover:bg-black text-white p-1 rounded-full transition-opacity opacity-80 group-hover:opacity-100"
                  aria-label="Remove reference image"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>

              {/* Tag Selector Pill */}
              <div className="mt-1.5 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Tag className="w-2.5 h-2.5 text-[#C5A059]" />
                  <select
                    value={ref.tag}
                    onChange={(e) =>
                      onUpdateTag(ref.id, e.target.value as ReferenceTag)
                    }
                    className="text-[10px] font-mono uppercase bg-transparent text-[#111111] focus:outline-hidden cursor-pointer"
                  >
                    {TAG_OPTIONS.map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
