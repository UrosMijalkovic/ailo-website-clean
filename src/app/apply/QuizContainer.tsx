"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { QuizProgress, QuizQuestion, ContactForm } from "@/components/quiz";
import {
  quizQuestions,
  QuizAnswer,
  QuizAnswers,
  calculateOutcome,
} from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { useRecaptcha } from "@/hooks/useRecaptcha";

type QuizStep =
  | "intro"
  | "questions"
  | "contact"
  | "waitlist-confirmed"
  | "not-ready-confirmed"
  | "call-already-scheduled"
  | "already-applied";

export function QuizContainer() {
  const router = useRouter();
  const { executeRecaptcha } = useRecaptcha();

  const [step, setStep] = useState<QuizStep>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const totalSteps = quizQuestions.length + 1; // +1 for contact form
  const currentStepNumber =
    step === "intro"
      ? 0
      : step === "questions"
      ? currentQuestion + 1
      : totalSteps;

  // Check if this is a waitlist outcome (Q1 !== A)
  const isWaitlistOutcome = answers.q1 && answers.q1 !== "A";

  const handleStartQuiz = () => {
    setStep("questions");
  };

  const handleAnswer = (answer: QuizAnswer) => {
    const questionId = quizQuestions[currentQuestion].id as keyof QuizAnswers;
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    // Check if Q1 answer routes to waitlist (but don't redirect yet - collect contact first)
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

  const handleContactSubmit = async (data: {
    name: string;
    phone: string;
    email: string;
    recaptchaToken?: string | null;
  }) => {
    setIsLoading(true);
    setSubmissionError(null);

    try {
      const response = await fetch("/api/quiz-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          contact: data,
          recaptchaToken: data.recaptchaToken,
        }),
      });

      const result = await response.json();

      // Handle error responses
      if (!response.ok) {
        if (response.status === 409 && result.error === "already_applied") {
          setStep("already-applied");
          return;
        }

        if (response.status === 429) {
          setSubmissionError(
            `Too many attempts. Please try again in ${result.retryAfter || 60} seconds.`
          );
          return;
        }

        setSubmissionError(result.message || "Something went wrong. Please try again.");
        return;
      }

      // Store data in sessionStorage for result pages
      sessionStorage.setItem(
        "quizData",
        JSON.stringify({
          answers,
          contact: data,
          result,
        })
      );

      // Route based on outcome
      switch (result.outcome) {
        case "qualified":
          router.push("/book-call");
          break;
        case "waitlist":
          setStep("waitlist-confirmed");
          break;
        case "not-ready":
          setStep("not-ready-confirmed");
          break;
        default:
          setSubmissionError("Unexpected response. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const currentQuestionData = quizQuestions[currentQuestion];
  const currentAnswer = currentQuestionData
    ? (answers[currentQuestionData.id as keyof QuizAnswers] as QuizAnswer | undefined)
    : undefined;

  return (
    <div className="relative rounded-2xl p-6 md:p-8 backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.01] border border-white/[0.10] shadow-[0_4px_24px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]">
      {/* Intro Step */}
      {step === "intro" && (
        <div className="text-center">
          <h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Check: Are We Right for You?
          </h1>
          <p className="text-white/80 mb-2">5 questions. 2 minutes.</p>
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
                <svg
                  className="w-4 h-4 text-[var(--color-accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>US Patented Methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[var(--color-accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>70%+ matches only</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[var(--color-accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>~2 minutes</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Questions Step */}
      {step === "questions" && currentQuestionData && (
        <>
          <QuizProgress currentStep={currentStepNumber} totalSteps={totalSteps} />
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
              Based on 30+ years of compatibility research • US Patented Methodology
            </p>
          </div>
        </>
      )}

      {/* Contact Step */}
      {step === "contact" && (
        <>
          <QuizProgress currentStep={currentStepNumber} totalSteps={totalSteps} />
          <ContactForm
            onSubmit={handleContactSubmit}
            isLoading={isLoading}
            isWaitlist={isWaitlistOutcome}
            executeRecaptcha={executeRecaptcha}
          />

          {/* Error Display */}
          {submissionError && (
            <div className="mt-4 p-4 bg-red-500/[0.06] backdrop-blur-xl border border-red-500/20 rounded-xl">
              <p className="text-red-400 text-sm text-center">{submissionError}</p>
            </div>
          )}

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

      {/* Waitlist Confirmed Modal */}
      {step === "waitlist-confirmed" && (
        <div className="text-center py-8">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center shadow-[0_0_24px_rgba(225,185,143,0.15)]">
            <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
            You&apos;re on the Waitlist!
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            We&apos;re currently focused on South Florida, but we&apos;re expanding soon.
            We&apos;ll notify you when AILO comes to your area.
          </p>
          <div className="space-y-4">
            <Link href="/" className="btn-primary inline-block px-8 py-3">
              Back to Home
            </Link>
            <p className="text-white/50 text-sm">
              Check your email for confirmation
            </p>
          </div>
        </div>
      )}

      {/* Not Ready Confirmed Modal */}
      {step === "not-ready-confirmed" && (
        <div className="text-center py-8">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center shadow-[0_0_24px_rgba(225,185,143,0.15)]">
            <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
            Not the Right Time? That&apos;s Okay.
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Finding the right person requires the right mindset.
            We&apos;ll be here when you&apos;re ready.
          </p>
          <div className="space-y-4">
            <Link href="/" className="btn-primary inline-block px-8 py-3">
              Back to Home
            </Link>
            <p className="text-white/50 text-sm">
              Questions? <a href="mailto:hello@ailoapp.com" className="text-[var(--color-accent)] hover:underline">hello@ailoapp.com</a>
            </p>
          </div>
        </div>
      )}

      {/* Already Applied Modal */}
      {step === "already-applied" && (
        <div className="text-center py-8">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center shadow-[0_0_24px_rgba(225,185,143,0.15)]">
            <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
            Welcome Back!
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Looks like you&apos;ve already applied with this email.
            Check your inbox for your booking link or confirmation.
          </p>
          <div className="space-y-4">
            <Link href="/" className="btn-primary inline-block px-8 py-3">
              Back to Home
            </Link>
            <p className="text-white/50 text-sm">
              Need help? <a href="mailto:hello@ailoapp.com" className="text-[var(--color-accent)] hover:underline">hello@ailoapp.com</a>
            </p>
          </div>
        </div>
      )}

      {/* Call Already Scheduled Modal */}
      {step === "call-already-scheduled" && (
        <div className="text-center py-8">
          <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 flex items-center justify-center shadow-[0_0_24px_rgba(225,185,143,0.15)]">
            <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="font-[var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-4">
            You Already Have a Call Scheduled!
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Check your email for the calendar invite and meeting details.
            We look forward to speaking with you!
          </p>
          <div className="space-y-4">
            <Link href="/" className="btn-primary inline-block px-8 py-3">
              Back to Home
            </Link>
            <p className="text-white/50 text-sm">
              Need to reschedule? Check your confirmation email
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
