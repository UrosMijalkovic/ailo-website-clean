export type QuizAnswer = "A" | "B" | "C" | "D";

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: QuizAnswer;
    label: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "Where do you currently live?",
    options: [
      { value: "A", label: "South Florida (Palm Beach, Broward, Miami-Dade)" },
      { value: "B", label: "Florida (outside South Florida)" },
      { value: "C", label: "U.S. (outside Florida)" },
      { value: "D", label: "Outside the U.S." },
    ],
  },
  {
    id: "q2",
    question: "What are you looking for?",
    options: [
      { value: "A", label: "A committed relationship — I'm ready" },
      { value: "B", label: "Something serious, but balancing priorities" },
      { value: "C", label: "Exploring, no rush" },
      { value: "D", label: "Just curious about AILO" },
    ],
  },
  {
    id: "q3",
    question: "How would you describe your emotional availability?",
    options: [
      { value: "A", label: "Open and available" },
      { value: "B", label: "Mostly open, still processing past experiences" },
      { value: "C", label: "Working on it" },
      { value: "D", label: "Not fully available right now" },
    ],
  },
  {
    id: "q4",
    question: "How do you feel about investing in your love life?",
    options: [
      { value: "A", label: "Willing to invest" },
      { value: "B", label: "Open to investing, but not certain" },
      { value: "C", label: "Prefer minimal investment" },
      { value: "D", label: "Not interested in investing" },
    ],
  },
  {
    id: "q5",
    question: "When would you like to be in a relationship?",
    options: [
      { value: "A", label: "As soon as I find the right person" },
      { value: "B", label: "Within the next year" },
      { value: "C", label: "No specific timeline" },
      { value: "D", label: "Not sure yet" },
    ],
  },
];

export type QuizAnswers = {
  q1?: QuizAnswer;
  q2?: QuizAnswer;
  q3?: QuizAnswer;
  q4?: QuizAnswer;
  q5?: QuizAnswer;
};

export type QuizOutcome = "qualified" | "waitlist" | "not-ready";

export interface QuizResult {
  outcome: QuizOutcome;
  reason: string;
  score?: number;
}

const scores: Record<QuizAnswer, number> = {
  A: 3,
  B: 2,
  C: 1,
  D: 0,
};

export function calculateOutcome(answers: QuizAnswers): QuizResult {
  // Check if non-SF (Q1 is not A)
  if (answers.q1 !== "A") {
    return {
      outcome: "waitlist",
      reason: "non-sf",
    };
  }

  // Check for disqualifying D answers on Q2, Q3, or Q5
  const hasDisqualifyingAnswer =
    answers.q2 === "D" || answers.q3 === "D" || answers.q5 === "D";

  if (hasDisqualifyingAnswer) {
    return {
      outcome: "not-ready",
      reason: "not-ready",
    };
  }

  // Calculate total score from Q2-Q5 (Q1 doesn't count towards score)
  const total =
    scores[answers.q2 || "D"] +
    scores[answers.q3 || "D"] +
    scores[answers.q4 || "D"] +
    scores[answers.q5 || "D"];

  if (total >= 8) {
    return {
      outcome: "qualified",
      reason: "high-intent",
      score: total,
    };
  }

  return {
    outcome: "not-ready",
    reason: "low-intent",
    score: total,
  };
}
