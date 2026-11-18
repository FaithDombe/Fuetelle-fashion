import type { Metadata } from "next";
import StudioWorkspace from "@/components/studio/StudioWorkspace";

export const metadata: Metadata = {
  title: "AI Atelier Studio — FUETELLE Nigeria",
  description:
    "Multimodal haute couture design engine, technical fashion croquis sketches, and personal stylist lookbook powered by AI and Nigerian master ateliers.",
};

export default function StudioPage() {
  return <StudioWorkspace />;
}
