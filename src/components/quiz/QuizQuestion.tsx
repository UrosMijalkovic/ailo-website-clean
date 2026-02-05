"use client";

import { QuizQuestion as QuizQuestionType, QuizAnswer } from "@/lib/quiz-data";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer?: QuizAnswer;
  onAnswer: (answer: QuizAnswer) => void;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white">
        {question.question}
      </h2>

      <div className="space-y-3" role="radiogroup" aria-labelledby="question-title">
        {question.options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selectedAnswer === option.value}
            onClick={() => onAnswer(option.value as QuizAnswer)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all text-left ${
              selectedAnswer === option.value
                ? "bg-[var(--color-accent)] text-[var(--color-primary-dark)]"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedAnswer === option.value
                  ? "border-[var(--color-primary-dark)] bg-[var(--color-primary-dark)]"
                  : "border-white/40"
              }`}
            >
              {selectedAnswer === option.value && (
                <span className="w-2 h-2 rounded-full bg-white" />
              )}
            </span>
            <span className="text-base md:text-lg">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
