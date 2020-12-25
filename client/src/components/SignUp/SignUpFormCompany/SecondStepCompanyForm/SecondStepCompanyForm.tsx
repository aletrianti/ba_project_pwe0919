import React, { FormEvent } from 'react';
import './SecondStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

import { goToNextStep } from '../../../../utils/changeFormStep';

// import store
import store from '../../../../index';

import {
  STORE_FIRST_NAME,
  STORE_LAST_NAME,
  STORE_EMAIL,
  STORE_PASSWORD,
  STORE_ROLE,
  STORE_ADMIN_ACCOUNT,
} from '../../../../store/actions/signUpSteps/signUpSteps.types';
import {
  IFirstName,
  IStoreFirstNameAction,
  ILastName,
  IStoreLastNameAction,
  IEmail,
  IStoreEmailAction,
  IPassword,
  IStorePasswordAction,
  IRole,
  IStoreRoleAction,
  IAdminAccount,
  IStoreAdminAccountAction,
} from '../../../../store/interfaces/signUpSteps.interfaces';

// Validators
import { validator, validatorTypes } from '../../../../utils/formValidation';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';

interface SecondStepCompanyFormState {
  areAllFieldsValid: boolean;
}

class SecondStepCompanyForm extends React.Component<RouteComponentProps, SecondStepCompanyFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areAllFieldsValid: false,
    };
  }

  render() {
    // Check that all fields are valid and enable confirm button
    const checkFields = (): any => {
      const formValues: string[] = ['signUpFirstName', 'signUpLastName', 'signUpEmail', 'signUpPassword', 'signUpRole'];
      const areFieldsValid: ICheckFields = checkFormFields(formValues);

      this.setState(areFieldsValid);
    };

    const storeFirstName = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.REQUIRED);
      const payload: IFirstName = { firstName: data, isValid: isValid, errorMessage: message };
      const action: IStoreFirstNameAction = { type: STORE_FIRST_NAME, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const storeLastName = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.REQUIRED);
      const payload: ILastName = { lastName: data, isValid: isValid, errorMessage: message };
      const action: IStoreLastNameAction = { type: STORE_LAST_NAME, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const storeEmail = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.EMAIL);
      const payload: IEmail = { email: data, isValid: isValid, errorMessage: message };
      const action: IStoreEmailAction = { type: STORE_EMAIL, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const storePassword = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.PASSWORD);
      const payload: IPassword = { password: data, isValid: isValid, errorMessage: message };
      const action: IStorePasswordAction = { type: STORE_PASSWORD, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const storeRole = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.REQUIRED);
      const payload: IRole = { role: data, isValid: isValid, errorMessage: message };
      const action: IStoreRoleAction = { type: STORE_ROLE, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const signUpAdmin = (event: FormEvent, history = this.props.history): void => {
      // dispatch action
      const state = store.getState();
      const payload: IAdminAccount = {
        firstName: state.signUpFirstName.firstName,
        lastName: state.signUpLastName.lastName,
        email: state.signUpEmail.email,
        password: state.signUpPassword.password,
        role: state.signUpRole.role,
      };
      const action: IStoreAdminAccountAction = { type: STORE_ADMIN_ACCOUNT, payload };

      store.dispatch(action);

      // add validation

      return goToNextStep(event, history);
    };

    return (
      <form className="sign-up__form" onSubmit={signUpAdmin}>
        <div className="sign-up__form__subheaders">
          <h3 className="sign-up__form__subheader">A bit about you...</h3>
        </div>

        <div id="sign-up__form__name">
          <InputField name={'First name*'} onchange={storeFirstName} />
          <InputField name={'Last name*'} onchange={storeLastName} />
        </div>
        <InputField name={'Email*'} onchange={storeEmail} />
        <InputField name={'Password*'} onchange={storePassword} />
        <InputField name={'Role*'} onchange={storeRole} />

        <span className="required-field__span">* required field</span>

        <SignUpFormButtons areFieldsValid={this.state.areAllFieldsValid} />

        <SignUpProgressCircles currentStep={2} signUpMode={'company'} totalSteps={4} />
      </form>
    );
  }
}

export default withRouter(SecondStepCompanyForm);
