import type {
  FeedbackSubmission,
  PersonalizedStyleContext,
  StyleDnaVector,
  GeneratedDesignData,
} from "./types/atelier";

// Default guest / initial taste profile
const DEFAULT_STYLE_PROFILE = {
  userId: "guest-atelier-client",
  aiMatchScore: 78.5,
  totalFeedbackCount: 0,
  preferredAesthetics: [
    "Ceremonial Agbada",
    "Tailored Senator Suit",
    "Bespoke High-Fashion",
  ],
  preferredFabrics: [
    "Handwoven Iseyin Aso-Oke",
    "Austrian Getzner Brocade",
    "Raw Silk",
    "Cashmere Wool",
  ],
  preferredColors: ["#0F2D1F", "#C5A059", "#0B0B0C", "#FFFFFF"],
  avoidedColors: ["#FFFF00", "#FF1493"],
  avoidedCuts: ["Ultra-Skinny", "Low Rise", "Puff Sleeve Excess"],
  styleDnaVector: {
    agbada: 15,
    senator: 12,
    "aso-oke": 18,
    brocade: 14,
    emerald: 10,
    gold: 12,
    structured: 16,
    corseted: 8,
    chiffon: -3,
    "neon-yellow": -20,
  } as StyleDnaVector,
};

// In-memory persistent cache for mock / session storage if DB is transitioning
const memoryUserProfiles = new Map<string, typeof DEFAULT_STYLE_PROFILE>();
memoryUserProfiles.set(DEFAULT_STYLE_PROFILE.userId, { ...DEFAULT_STYLE_PROFILE });

/**
 * Builds an enriched Personalized Style Context ("Style DNA") for the user.
 * Injects weighted affinities, positive tailoring rules, and strict negative constraints
 * directly into the Fashion Director LLM / Vision prompt.
 */
export async function buildPersonalizedStyleContext(
  userId = "guest-atelier-client"
): Promise<PersonalizedStyleContext> {
  const profile = memoryUserProfiles.get(userId) || {
    ...DEFAULT_STYLE_PROFILE,
    userId,
  };

  // Rank keywords by positive weight
  const sortedPositiveKeywords = Object.entries(profile.styleDnaVector)
    .filter(([, weight]) => weight > 5)
    .sort((a, b) => b[1] - a[1])
    .map(([keyword]) => keyword);

  // Extract strict negative constraints
  const sortedNegativeKeywords = Object.entries(profile.styleDnaVector)
    .filter(([, weight]) => weight < 0)
    .sort((a, b) => a[1] - b[1])
    .map(([keyword]) => keyword);

  // Formulate the prompt injection string for the Vercel AI SDK / Image pipeline
  const promptInjectionSnippet = `
[ATELIER CLIENT STYLE DNA & HISTORICAL TASTE PROFILE]:
- Client Taste Calibration Score: ${profile.aiMatchScore.toFixed(1)}% match confidence based on ${profile.totalFeedbackCount} past fitting reviews.
- Highest Affinity Aesthetics & Cuts: ${sortedPositiveKeywords.slice(0, 5).join(", ") || profile.preferredAesthetics.join(", ")}.
- Preferred Luxury Textiles: ${profile.preferredFabrics.join(", ")}.
- Client Noble Palette: ${profile.preferredColors.join(", ")}.
- STRICT NEGATIVE CONSTRAINTS (DO NOT INTRODUCE): ${
    sortedNegativeKeywords.length > 0
      ? sortedNegativeKeywords.join(", ")
      : profile.avoidedCuts.concat(profile.avoidedColors).join(", ")
  }.
- Tailoring Mandate: Ensure impeccable drape, architectural structure, premium proportion balance, and high-fashion editorial finish.
`.trim();

  return {
    userId,
    styleDnaSummary: `${profile.preferredAesthetics[0]} • ${profile.preferredFabrics[0]} • ${profile.aiMatchScore.toFixed(0)}% Taste Calibrated`,
    aiMatchScore: profile.aiMatchScore,
    topPreferredAesthetics: profile.preferredAesthetics,
    topPreferredFabrics: profile.preferredFabrics,
    topPreferredColors: profile.preferredColors,
    strictlyAvoidedCuts: profile.avoidedCuts,
    strictlyAvoidedColors: profile.avoidedColors,
    promptInjectionSnippet,
  };
}

/**
 * Updates the user's weighted Style DNA vector and recalculates the live AI Style Match Score
 * based on granular feedback (Love/Dislike, Rejection Reasons, and Attribute Votes).
 */
export async function updateStyleProfileFromFeedback(
  feedback: FeedbackSubmission,
  designContext?: GeneratedDesignData
) {
  const userId = feedback.userId || "guest-atelier-client";
  const profile = memoryUserProfiles.get(userId) || {
    ...DEFAULT_STYLE_PROFILE,
    userId,
  };

  const vector = { ...profile.styleDnaVector };
  let matchDelta = 0;

  // 1. Process Overall Rating
  if (feedback.rating === "LOVE" || feedback.rating === "SAVED") {
    matchDelta += 2.8;
    if (designContext) {
      const cut = designContext.curatedSilhouette.toLowerCase();
      const fabric = designContext.curatedFabric.toLowerCase();
      const occ = designContext.curatedOccasion.toLowerCase();
      vector[cut] = (vector[cut] || 0) + 6;
      vector[fabric] = (vector[fabric] || 0) + 7;
      vector[occ] = (vector[occ] || 0) + 4;
    }
  } else if (feedback.rating === "DISLIKE") {
    matchDelta -= 1.8;
  }

  // 2. Process Attribute-Level Votes
  if (feedback.attributeVotes) {
    const { color, silhouette, fabric } = feedback.attributeVotes;
    if (designContext) {
      if (color === 1) {
        vector[designContext.curatedColorHex] =
          (vector[designContext.curatedColorHex] || 0) + 5;
        matchDelta += 0.8;
      } else if (color === -1) {
        vector[designContext.curatedColorHex] =
          (vector[designContext.curatedColorHex] || 0) - 8;
        matchDelta -= 0.5;
      }

      if (silhouette === 1) {
        vector[designContext.curatedSilhouette.toLowerCase()] =
          (vector[designContext.curatedSilhouette.toLowerCase()] || 0) + 6;
        matchDelta += 1.0;
      } else if (silhouette === -1) {
        vector[designContext.curatedSilhouette.toLowerCase()] =
          (vector[designContext.curatedSilhouette.toLowerCase()] || 0) - 9;
        matchDelta -= 0.6;
      }

      if (fabric === 1) {
        vector[designContext.curatedFabric.toLowerCase()] =
          (vector[designContext.curatedFabric.toLowerCase()] || 0) + 6;
        matchDelta += 1.0;
      } else if (fabric === -1) {
        vector[designContext.curatedFabric.toLowerCase()] =
          (vector[designContext.curatedFabric.toLowerCase()] || 0) - 9;
        matchDelta -= 0.6;
      }
    }
  }

  // 3. Process Negative Rejection Reasons
  if (feedback.rejectionReasons && feedback.rejectionReasons.length > 0) {
    feedback.rejectionReasons.forEach((reason) => {
      switch (reason) {
        case "Wrong Silhouette":
          if (designContext) {
            vector[designContext.curatedSilhouette.toLowerCase()] =
              (vector[designContext.curatedSilhouette.toLowerCase()] || 0) - 10;
          }
          break;
        case "Color Clash":
          if (designContext) {
            vector[designContext.curatedColorHex] =
              (vector[designContext.curatedColorHex] || 0) - 12;
          }
          break;
        case "Fabric Dislike":
          if (designContext) {
            vector[designContext.curatedFabric.toLowerCase()] =
              (vector[designContext.curatedFabric.toLowerCase()] || 0) - 10;
          }
          break;
        case "Too Casual":
          vector["casual"] = (vector["casual"] || 0) - 15;
          vector["ceremonial"] = (vector["ceremonial"] || 0) + 5;
          break;
        case "Poor Fit":
          vector["oversized"] = (vector["oversized"] || 0) - 8;
          vector["tailored"] = (vector["tailored"] || 0) + 6;
          break;
      }
    });
  }

  // Calculate updated score clamped between 65% and 99.4%
  const newScore = Math.min(
    99.4,
    Math.max(65.0, profile.aiMatchScore + matchDelta)
  );

  const updatedProfile = {
    ...profile,
    styleDnaVector: vector,
    aiMatchScore: newScore,
    totalFeedbackCount: profile.totalFeedbackCount + 1,
  };

  memoryUserProfiles.set(userId, updatedProfile);

  return {
    success: true,
    updatedAiMatchScore: newScore,
    totalFeedbackCount: updatedProfile.totalFeedbackCount,
    isFlaggedForTraining:
      feedback.rating === "LOVE" ||
      (feedback.attributeVotes?.color === 1 &&
        feedback.attributeVotes?.silhouette === 1 &&
        feedback.attributeVotes?.fabric === 1),
  };
}

// In-memory training dataset repository
export interface GlobalTrainingSample {
  id: string;
  designId: string;
  prompt: string;
  curatedSilhouette: string;
  curatedFabric: string;
  referenceImageUrls: string[];
  approvedImageUrl: string;
  techPackSummary: string;
  qualityScore: number;
  createdAt: string;
}

export const globalTrainingDataset: GlobalTrainingSample[] = [
  {
    id: "sample-trn-001",
    designId: "design-agbada-01",
    prompt:
      "3-piece ceremonial emerald green Aso-Oke Agbada with asymmetric gold filigree chest embroidery, wide draped sleeve span, and matching fila cap",
    curatedSilhouette: "Grand Agbada",
    curatedFabric: "Handwoven Iseyin Aso-Oke",
    referenceImageUrls: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=900",
    ],
    approvedImageUrl:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1200",
    techPackSummary:
      "Aso-Oke 7.5 yds, 550 GSM, gold metallic cord embroidery, hand-finished placket",
    qualityScore: 0.98,
    createdAt: new Date().toISOString(),
  },
  {
    id: "sample-trn-002",
    designId: "design-senator-02",
    prompt:
      "Midnight navy bespoke Senator suit with asymmetric gold metal zipper placket, Mandarin collar, and tapered cigarette trousers in Getzner brocade",
    curatedSilhouette: "Tailored",
    curatedFabric: "Austrian Getzner Brocade",
    referenceImageUrls: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=900",
    ],
    approvedImageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    techPackSummary:
      "Austrian Getzner brocade 4.5 yds, concealed YKK gold zipper, double-welt pockets",
    qualityScore: 0.95,
    createdAt: new Date().toISOString(),
  },
];
