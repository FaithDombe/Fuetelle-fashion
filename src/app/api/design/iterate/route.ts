import { NextResponse } from "next/server";
import { buildPersonalizedStyleContext } from "@/lib/style-dna";
import { generateFashionLookbook } from "@/lib/ai-adapter";
import type {
  GeneratedDesignData,
} from "@/lib/types/atelier";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      baseDesign,
      refinementPrompt,
      userId = "guest-atelier-client",
    }: {
      baseDesign: GeneratedDesignData;
      refinementPrompt: string;
      userId?: string;
    } = body;

    if (!baseDesign || !refinementPrompt) {
      return NextResponse.json(
        { error: "baseDesign and refinementPrompt are required" },
        { status: 400 }
      );
    }

    // 1. Build Style DNA Context
    const styleContext = await buildPersonalizedStyleContext(userId);

    // 2. Synthesize with Conversational Iteration Context
    const combinedPrompt = `${baseDesign.prompt} [Iterative Client Refinement: ${refinementPrompt}]`;

    const refinedDesign = await generateFashionLookbook({
      prompt: combinedPrompt,
      occasion: baseDesign.curatedOccasion,
      silhouette: baseDesign.curatedSilhouette,
      fabric: baseDesign.curatedFabric,
      colorHex: baseDesign.curatedColorHex,
      referenceImages: baseDesign.referenceImages,
      styleContext,
      refinedFromId: baseDesign.id,
      iterationVersion: (baseDesign.iterationVersion || 1) + 1,
    });

    return NextResponse.json({
      success: true,
      refinedDesign,
      parentDesignId: baseDesign.id,
      aiMatchScore: styleContext.aiMatchScore,
    });
  } catch (error) {
    console.error("Design Iteration Error:", error);
    return NextResponse.json(
      { error: "Failed to execute conversational design iteration" },
      { status: 500 }
    );
  }
}
