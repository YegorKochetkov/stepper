import React from "react";

function Stepper({ steps }: { steps: string[] }) {
  const [currentStep, setCurrentStep] = React.useState(1);
  const isCompleted = currentStep > steps.length;

  return (
    <React.Fragment>
      <div className='flex justify-between mb-8'>
        {steps.map((step, i) => (
          <div
            key={i}
            className={
              "step-item" +
              " " +
              (currentStep === i + 1 ? "active" : "") +
              (currentStep > i + 1 ? "complete" : "")
            }
          >
            <div className='step-index'>
              {currentStep > i + 1 ? "✔️" : i + 1}
            </div>
            <p className='capitalize'>{step}</p>
          </div>
        ))}
      </div>

      <button
        type='button'
        className='button'
        onClick={() => setCurrentStep((prev) => prev + 1)}
        disabled={isCompleted}
      >
        {isCompleted ? "Completed" : "Next"}
      </button>
    </React.Fragment>
  );
}

export default Stepper;
