import { NextResponse } from "next/server";
import { globalTrainingDataset } from "@/lib/style-dna";

export async function GET() {
  try {
    // Generate JSONL export formatted for vision-language LoRA / fine-tuning
    const jsonlRows = globalTrainingDataset.map((sample) =>
      JSON.stringify({
        messages: [
          {
            role: "system",
            content:
              "You are FUETELLE Atelier's Haute Couture Fashion Director and Technical Pattern Architect.",
          },
          {
            role: "user",
            content: `Design Brief: ${sample.prompt}. Curated Silhouette: ${sample.curatedSilhouette}. Fabric Drape: ${sample.curatedFabric}.`,
          },
          {
            role: "assistant",
            content: `Rendered Garment: ${sample.approvedImageUrl}\nTech Pack Specifications: ${sample.techPackSummary}`,
          },
        ],
        metadata: {
          id: sample.id,
          qualityScore: sample.qualityScore,
          createdAt: sample.createdAt,
        },
      })
    );

    const jsonlContent = jsonlRows.join("\n");

    return new Response(jsonlContent, {
      headers: {
        "Content-Type": "application/x-jsonlines",
        "Content-Disposition": 'attachment; filename="fuetelle_atelier_lora_dataset.jsonl"',
      },
    });
  } catch (error) {
    console.error("Training Export Error:", error);
    return NextResponse.json(
      { error: "Failed to export training dataset" },
      { status: 500 }
    );
  }
}
