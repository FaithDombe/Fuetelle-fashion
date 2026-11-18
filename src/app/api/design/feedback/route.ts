import { NextResponse } from "next/server";
import {
  updateStyleProfileFromFeedback,
  globalTrainingDataset,
} from "@/lib/style-dna";
import type {
  FeedbackSubmission,
  GeneratedDesignData,
} from "@/lib/types/atelier";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      feedback,
      designContext,
    }: {
      feedback: FeedbackSubmission;
      designContext?: GeneratedDesignData;
    } = body;

    if (!feedback || !feedback.designId || !feedback.rating) {
      return NextResponse.json(
        { error: "Valid feedback submission is required" },
        { status: 400 }
      );
    }

    // 1. Update Taste Profile & Calculate Calibrated Score
    const result = await updateStyleProfileFromFeedback(feedback, designContext);

    // 2. Global Dataset Curation: If highly rated, store for fine-tuning / LoRA pipeline
    if (result.isFlaggedForTraining && designContext) {
      globalTrainingDataset.push({
        id: `trn-${Date.now()}`,
        designId: designContext.id,
        prompt: designContext.prompt,
        curatedSilhouette: designContext.curatedSilhouette,
        curatedFabric: designContext.curatedFabric,
        referenceImageUrls: designContext.referenceImages.map((r) => r.url),
        approvedImageUrl: designContext.generatedImageUrl,
        techPackSummary: `${designContext.techPack.garmentName} • ${designContext.techPack.stitchDensity}`,
        qualityScore: feedback.rating === "LOVE" ? 0.99 : 0.92,
        createdAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      updatedAiMatchScore: result.updatedAiMatchScore,
      totalFeedbackCount: result.totalFeedbackCount,
      isFlaggedForTraining: result.isFlaggedForTraining,
    });
  } catch (error) {
    console.error("Design Feedback Error:", error);
    return NextResponse.json(
      { error: "Failed to record design feedback" },
      { status: 500 }
    );
  }
}
