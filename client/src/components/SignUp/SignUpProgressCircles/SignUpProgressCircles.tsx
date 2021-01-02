import React from 'react';
import './SignUpProgressCircles.scss';

interface SignUpProgressCirclesProps {
  currentStep: number;
  signUpMode: string;
  totalSteps: number;
}

class SignUpProgressCircles extends React.Component<SignUpProgressCirclesProps> {
  steps = Array.from(Array(this.props.totalSteps).keys());

  setClassBasedOnStep = (step: number): string => {
    if (this.props.currentStep === step + 1) {
      return 'progress__circle progress__circle--active';
    } else if (this.props.currentStep > step + 1) {
      return 'progress__circle progress__circle--previous';
    } else {
      return 'progress__circle';
    }
  };

  render() {
    const { signUpMode } = this.props;

    return (
      <div className="progress__circles__container">
        <div className={signUpMode === 'company' ? 'progress__company' : 'progress__employee'}>
          {this.steps.map((step, i) => {
            return <span className={this.setClassBasedOnStep(step)} key={i}></span>;
          })}
        </div>
      </div>
    );
  }
}

export default SignUpProgressCircles;
