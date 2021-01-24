import React, { MouseEvent } from 'react';

import Button from '../../common/Button/Button';

interface SignUpFormButtonProps {
  isFinalStep?: boolean;
  areFieldsValid?: boolean;
}

class SignUpFormButtons extends React.Component<SignUpFormButtonProps> {
  setLocalStorageItem = (e: MouseEvent): void => {
    e.preventDefault();

    localStorage['hasJustSignedIn'] = true;
  };

  render() {
    const { isFinalStep, areFieldsValid } = this.props;

    return (
      <div className="sign-up__form__btns">
        <Button btnText={'Back'} isRegular={true} isBackFormBtn={true} isConfirmBtn={false} />
        {isFinalStep ? (
          <div onClick={(e: MouseEvent) => this.setLocalStorageItem(e)}>
            <Button btnText={'Confirm'} isLink={true} link={'/dashboard'} isRegular={false} isConfirmBtn={false} />
          </div>
        ) : (
          <Button btnText={'Next'} isRegular={false} isConfirmBtn={true} areAllFieldsValid={areFieldsValid} />
        )}
      </div>
    );
  }
}

export default SignUpFormButtons;
