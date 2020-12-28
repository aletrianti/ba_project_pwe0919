import React, { FormEvent } from 'react';
import SignUpFormOptions from './SignUpFormOptions/SignUpFormOptions';
import Button from '../../common/Button/Button';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './SignUpFormStart.scss';

// import store
import store from '../../../index';

import { SET_ACCOUNT_TYPE } from '../../../store/actions/signUpSteps/signUpSteps.types';
import { IAccountType, ISetAccountTypeAction } from '../../../store/interfaces/signUpSteps.interfaces';

import { goToNextStep } from '../../../utils/ChangeFormStep';

// Validators
import { validator, validatorTypes } from '../../../utils/formValidation';
import { checkFormFields, ICheckFields } from '../../../utils/checkFormFields';

interface SignUpFormStartState {
  areAllFieldsValid: boolean;
}

class SignUpFormStart extends React.Component<RouteComponentProps, SignUpFormStartState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areAllFieldsValid: false,
    };
  }

  render() {
    // Check that all fields are valid and enable confirm button
    const checkFields = (): void => {
      const formValues: string[] = ['signUpAccountType'];
      const areFieldsValid: ICheckFields = checkFormFields(formValues);

      this.setState(areFieldsValid);
    };

    const storeAccountType = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.REQUIRED);
      const payload: IAccountType = { accountType: data, isValid: isValid, errorMessage: message };
      const action: ISetAccountTypeAction = { type: SET_ACCOUNT_TYPE, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    return (
      <form id="sign-up__form__step1" onSubmit={(e: FormEvent, history = this.props.history) => goToNextStep(e, history)}>
        <h2>I want to create a...*</h2>

        <SignUpFormOptions onclick={(e: any) => storeAccountType(e)} />

        <span>* required field</span>

        <Button
          btnText={'Start'}
          isRegular={false}
          isSingleBtn={true}
          isConfirmBtn={true}
          areAllFieldsValid={this.state.areAllFieldsValid}
        />
      </form>
    );
  }
}

export default withRouter(SignUpFormStart);
