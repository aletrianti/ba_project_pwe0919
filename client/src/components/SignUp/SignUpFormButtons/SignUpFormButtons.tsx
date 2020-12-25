import React from 'react';

import Button from '../../common/Button/Button';

interface SignUpFormButtonProps {
  isFinalStep?: boolean;
  areFieldsValid?: boolean;
}

class SignUpFormButtons extends React.Component<SignUpFormButtonProps> {
  render() {
    const { isFinalStep, areFieldsValid } = this.props;

    return (
      <div className="sign-up__form__btns">
        <Button btnText={'Back'} isRegular={true} isBackFormBtn={true} isConfirmBtn={false} />
        {isFinalStep ? (
          <Button btnText={'Confirm'} isLink={true} link={'/dashboard'} isRegular={false} isConfirmBtn={false} />
        ) : (
          <Button btnText={'Next'} isRegular={false} isConfirmBtn={true} areAllFieldsValid={areFieldsValid} />
        )}
      </div>
    );
  }
}

export default SignUpFormButtons;
