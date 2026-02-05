interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between text-sm text-white/60 mb-3">
        <span>
          Step {currentStep} of {totalSteps}
        </span>
        <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
