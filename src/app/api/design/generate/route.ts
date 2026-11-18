import { NextResponse } from "next/server";
import { buildPersonalizedStyleContext } from "@/lib/style-dna";
import { generateFashionLookbook } from "@/lib/ai-adapter";
import type {
  OccasionType,
  SilhouetteType,
  FabricDrapeType,
  ReferenceTag,
  FitProfile,
} from "@/lib/types/atelier";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      prompt = "Tailored ceremonial outfit in authentic African textile",
      occasion = "Traditional / Bespoke" as OccasionType,
      silhouette = "Grand Agbada" as SilhouetteType,
      fabric = "Handwoven Iseyin Aso-Oke" as FabricDrapeType,
      colorHex = "#0F2D1F",
      referenceImages = [] as { url: string; tag: ReferenceTag }[],
      fitProfile = undefined as FitProfile | undefined,
      userId = "guest-atelier-client",
    } = body;

    // 1. Build Personalized Style Context ("Style DNA")
    const styleContext = await buildPersonalizedStyleContext(userId);

    // 2. Synthesize with Multimodal Fashion Engine
    const design = await generateFashionLookbook({
      prompt,
      occasion,
      silhouette,
      fabric,
      colorHex,
      referenceImages,
      fitProfile,
      styleContext,
      iterationVersion: 1,
    });

    return NextResponse.json({
      success: true,
      design,
      styleDnaSummary: styleContext.styleDnaSummary,
      aiMatchScore: styleContext.aiMatchScore,
    });
  } catch (error) {
    console.error("Design Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate haute couture design" },
      { status: 500 }
    );
  }
}
