"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuizProgress, QuizQuestion, ContactForm } from "@/components/quiz";
import {
  quizQuestions,
  QuizAnswer,
  QuizAnswers,
  calculateOutcome,
} from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";

type QuizStep = "intro" | "questions" | "contact";

export function QuizContainer() {
  const router = useRouter();
  const [step, setStep] = useState<QuizStep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = quizQuestions.length + 1; // +1 for contact form
  const currentStepNumber =
    step === "intro"
      ? 0
      : step === "questions"
      ? currentQuestion + 1
      : totalSteps;

  const handleStartQuiz = () => {
    setStep("questions");
  };

  const handleAnswer = (answer: QuizAnswer) => {
    const questionId = quizQuestions[currentQuestion].id as keyof QuizAnswers;
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    // Check if Q1 answer disqualifies to waitlist
    if (currentQuestion === 0 && answers.q1 && answers.q1 !== "A") {
      router.push("/waitlist");
      return;
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setStep("contact");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else {
      setStep("intro");
    }
  };

  const handleContactSubmit = async (data: { phone: string; email: string }) => {
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Calculate outcome
    const result = calculateOutcome(answers);

    // Store data in sessionStorage for result pages
    sessionStorage.setItem(
      "quizData",
      JSON.stringify({
        answers,
        contact: data,
        result,
      })
    );

    setIsLoading(false);

    // Redirect based on outcome
    switch (result.outcome) {
      case "qualified":
        router.push("/book-call");
        break;
      case "waitlist":
        router.push("/waitlist");
        break;
      case "not-ready":
        router.push("/not-ready");
        break;
    }
  };

  const currentQuestionData = quizQuestions[currentQuestion];
  const currentAnswer = currentQuestionData
    ? (answers[currentQuestionData.id as keyof QuizAnswers] as QuizAnswer | undefined)
    : undefined;

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
      {step === "intro" && (
        <div className="text-center">
          <h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Check: Are We Right for You?
          </h1>
          <p className="text-white/80 mb-2">
            5 questions. 2 minutes.
          </p>
          <p className="text-white/60 mb-8">
            We&apos;ll tell you honestly if AILO can help.
          </p>
          <Button onClick={handleStartQuiz} className="btn-primary text-lg px-8">
            Start
          </Button>

          {/* Social Proof */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-sm text-white/40 mb-4">
              Based on 30 years of compatibility research
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>US Patent #8556630B2</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>70%+ matches only</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>~2 minutes</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === "questions" && currentQuestionData && (
        <>
          <QuizProgress
            currentStep={currentStepNumber}
            totalSteps={totalSteps}
          />
          <QuizQuestion
            question={currentQuestionData}
            selectedAnswer={currentAnswer}
            onAnswer={handleAnswer}
          />
          <div className="flex justify-between mt-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              ← Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="btn-primary"
            >
              Continue →
            </Button>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-8 pt-4 border-t border-white/10 text-center">
            <p className="text-xs text-white/40">
              Based on 30+ years of compatibility research • US Patent #8556630B2
            </p>
          </div>
        </>
      )}

      {step === "contact" && (
        <>
          <QuizProgress
            currentStep={currentStepNumber}
            totalSteps={totalSteps}
          />
          <ContactForm onSubmit={handleContactSubmit} isLoading={isLoading} />
          <div className="mt-6">
            <Button
              variant="ghost"
              onClick={() => {
                setStep("questions");
                setCurrentQuestion(quizQuestions.length - 1);
              }}
              className="text-white/60 hover:text-white hover:bg-white/10"
            >
              ← Back
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
