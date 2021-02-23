import React, { MouseEvent } from 'react';

import Button from '../../common/Button/Button';

interface SignUpFormButtonProps {
  isFirstStep?: boolean;
  isFinalStep?: boolean;
  areFieldsValid?: boolean;
}

class SignUpFormButtons extends React.Component<SignUpFormButtonProps> {
  setLocalStorageItem = (e: MouseEvent): void => {
    e.preventDefault();

    localStorage['hasJustSignedIn'] = true;
  };

  render() {
    const { isFirstStep, isFinalStep, areFieldsValid } = this.props;

    return (
      <div className="sign-up__form__btns">
        {!isFirstStep ? <Button btnText={'Back'} isRegular={true} isBackFormBtn={true} isConfirmBtn={false} /> : <div></div>}

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
