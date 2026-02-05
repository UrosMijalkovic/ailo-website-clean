/**
 * Quiz helper functions for CRM integration
 * Maps answer codes (A/B/C/D) to human-readable text
 */

import { QuizAnswer, QuizAnswers, quizQuestions } from "./quiz-data";

/**
 * Answer text mappings for Q2-Q5 (matches quiz-data.ts)
 */
const ANSWER_MAPS: Record<string, Record<QuizAnswer, string>> = {
  q2: {
    A: "A committed relationship — I'm ready",
    B: "Something serious, but balancing priorities",
    C: "Exploring, no rush",
    D: "Just curious about AILO",
  },
  q3: {
    A: "Open and available",
    B: "Mostly open, still processing past experiences",
    C: "Working on it",
    D: "Not fully available right now",
  },
  q4: {
    A: "Willing to invest",
    B: "Open to investing, but not certain",
    C: "Prefer minimal investment",
    D: "Not interested in investing",
  },
  q5: {
    A: "As soon as I find the right person",
    B: "Within the next year",
    C: "No specific timeline",
    D: "Not sure yet",
  },
};

/**
 * Location text mapping for Q1
 */
const LOCATION_MAP: Record<QuizAnswer, string> = {
  A: "South Florida (Palm Beach, Broward, Miami-Dade)",
  B: "Florida (outside South Florida)",
  C: "U.S. (outside Florida)",
  D: "Outside the U.S.",
};

/**
 * Get full answer text for a question
 */
export function getFullAnswerText(
  questionId: string,
  answerCode: QuizAnswer
): string {
  if (questionId === "q1") {
    return LOCATION_MAP[answerCode] || answerCode;
  }

  const questionMap = ANSWER_MAPS[questionId];
  if (questionMap) {
    return questionMap[answerCode] || answerCode;
  }

  // Fallback: look up in quiz questions
  const question = quizQuestions.find((q) => q.id === questionId);
  if (question) {
    const option = question.options.find((o) => o.value === answerCode);
    return option?.label || answerCode;
  }

  return answerCode;
}

/**
 * Get location text for Q1 answer
 */
export function getLocationText(q1Answer: QuizAnswer): string {
  return LOCATION_MAP[q1Answer] || q1Answer;
}

/**
 * Determine the backend location value based on Q1 answer
 */
export function getBackendLocation(q1Answer: QuizAnswer): string {
  return q1Answer === "A" ? "Matchmaking Location" : "Waitlist Location";
}

/**
 * Map frontend outcome to backend enum value
 */
export function mapOutcomeToBackend(
  outcome: "qualified" | "waitlist" | "not-ready"
): "Qualified" | "Waitlist" | "Not_ready" {
  const mapping: Record<string, "Qualified" | "Waitlist" | "Not_ready"> = {
    qualified: "Qualified",
    waitlist: "Waitlist",
    "not-ready": "Not_ready",
  };
  return mapping[outcome] || "Not_ready";
}

/**
 * Format all answers for CRM/API submission
 */
export function formatAnswersForApi(answers: QuizAnswers): {
  intent?: string;
  availability?: string;
  investment?: string;
  timeline?: string;
} {
  return {
    intent: answers.q2 ? getFullAnswerText("q2", answers.q2) : undefined,
    availability: answers.q3 ? getFullAnswerText("q3", answers.q3) : undefined,
    investment: answers.q4 ? getFullAnswerText("q4", answers.q4) : undefined,
    timeline: answers.q5 ? getFullAnswerText("q5", answers.q5) : undefined,
  };
}

/**
 * Types for CRM integration
 */
export interface QuizSubmissionData {
  name: string;
  email: string;
  phone: string;
  answers: QuizAnswers;
  outcome: "qualified" | "waitlist" | "not-ready";
  score?: number;
}

export interface AiloApiPayload {
  email: string;
  phone: string;
  fullName: string;
  location: string;
  quizOutcome: "Qualified" | "Waitlist" | "Not_ready";
  intent?: string;
  availability?: string;
  investment?: string;
  timeline?: string;
}

export interface AiloApiResponse {
  id: number;
  email: string;
  phone: string;
  location: string;
  availability?: string;
  intent?: string;
  investment?: string;
  timeline?: string;
}
