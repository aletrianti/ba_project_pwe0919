import React from 'react';
import './FinalStepEmployeeForm.scss';

import SignUpFinalStep from '../../SignUpFinalStep/SignUpFinalStep';

class FinalStepEmployeeForm extends React.Component {
  render() {
    return (
      <div className="sign-up__final-step">
        <SignUpFinalStep />
      </div>
    );
  }
}

export default FinalStepEmployeeForm;
