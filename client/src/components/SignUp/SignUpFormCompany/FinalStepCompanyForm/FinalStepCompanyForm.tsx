import React from 'react';
import './FinalStepCompanyForm.scss';

import SignUpFinalStep from '../../SignUpFinalStep/SignUpFinalStep';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

class FinalStepCompanyForm extends React.Component {
  render() {
    return (
      <div className="sign-up__final-step">
        <SignUpFinalStep />
        <SignUpProgressCircles currentStep={4} signUpMode={'company'} totalSteps={4} />
      </div>
    );
  }
}

export default FinalStepCompanyForm;
