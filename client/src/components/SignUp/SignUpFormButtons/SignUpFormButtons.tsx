import React from 'react';

import Button from '../../common/Button/Button';

interface SignUpFormButtonProps {
  isFinalStep?: boolean;
}

class SignUpFormButtons extends React.Component<SignUpFormButtonProps> {
  render() {
    const { isFinalStep } = this.props;

    return (
      <div className="sign-up__form__btns">
        <Button btnText={'Back'} isRegular={true} isBackFormBtn={true} isConfirmBtn={false} />
        {isFinalStep ? (
          <Button btnText={'Confirm'} isLink={true} link={'/dashboard'} isRegular={false} isConfirmBtn={true} />
        ) : (
          <Button btnText={'Next'} isRegular={false} isConfirmBtn={false} />
        )}
      </div>
    );
  }
}

export default SignUpFormButtons;
