import React from 'react';
import './FinalStepEmployeeForm.scss';

import SignUpFinalStep from '../../SignUpFinalStep/SignUpFinalStep';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

class FinalStepEmployeeForm extends React.Component {
  render() {
    return (
      <div className="sign-up__final-step">
        <SignUpFinalStep />
        <SignUpProgressCircles currentStep={3} signUpMode={'employee'} totalSteps={3} />
      </div>
    );
  }
}

export default FinalStepEmployeeForm;
