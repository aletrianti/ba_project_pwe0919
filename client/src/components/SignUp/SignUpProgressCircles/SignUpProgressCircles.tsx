import React from 'react';
import './SignUpProgressCircles.scss';

interface SignUpProgressCirclesProps {
  currentStep: number;
  signUpMode: string;
  totalSteps: number;
}

class SignUpProgressCircles extends React.Component<SignUpProgressCirclesProps> {
  render() {
    const { currentStep, signUpMode, totalSteps } = this.props;

    const steps = Array.from(Array(totalSteps).keys());

    const setClassBasedOnStep = (step: number): string => {
      if (currentStep === step + 1) {
        return 'progress__circle progress__circle--active';
      } else if (currentStep > step + 1) {
        return 'progress__circle progress__circle--previous';
      } else {
        return 'progress__circle';
      }
    };

    return (
      <div className="progress__circles__container">
        <div className={signUpMode === 'company' ? 'progress__company' : 'progress__employee'}>
          {steps.map((step, i) => {
            return <span className={setClassBasedOnStep(step)} key={i}></span>;
          })}
        </div>
      </div>
    );
  }
}

export default SignUpProgressCircles;
