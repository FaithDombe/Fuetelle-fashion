import { NextResponse } from "next/server";
import { findMatchingGarments } from "@/lib/catalog-data";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { category, silhouette, fabric, colorHex } = body;

    const matches = findMatchingGarments(category, silhouette, fabric, colorHex);

    return NextResponse.json({
      success: true,
      matches,
      totalCount: matches.length,
    });
  } catch (error) {
    console.error("Garment Match Error:", error);
    return NextResponse.json(
      { error: "Failed to query matching catalog garments" },
      { status: 500 }
    );
  }
}
