import React from 'react';
import './FinalStepCompanyForm.scss';

import SignUpFinalStep from '../../SignUpFinalStep/SignUpFinalStep';

class FinalStepCompanyForm extends React.Component {
  render() {
    return (
      <div className="sign-up__final-step">
        <SignUpFinalStep />
      </div>
    );
  }
}

export default FinalStepCompanyForm;
