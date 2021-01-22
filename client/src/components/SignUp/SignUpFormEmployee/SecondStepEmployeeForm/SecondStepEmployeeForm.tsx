import React, { FormEvent } from 'react';
import axios from 'axios';
import './SecondStepEmployeeForm.scss';
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
  STORE_EMPLOYEE_ACCOUNT,
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
  IEmployeeAccount,
  IStoreEmployeeAccountAction,
} from '../../../../store/interfaces/signUpSteps.interfaces';

// Data from backend
import { INewEmployeeInput } from '../../../../../../types/auth.types';

// Validators
import { validator, validatorTypes } from '../../../../utils/formValidation';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';

// localStorage
import { storeTokenInLocalStorage } from '../../../../utils/localStorageActions';
import { registerEmployee } from '../../../../utils/httpRequests';

interface SecondStepEmployeeFormState {
  areAllFieldsValid: boolean;
}

class SecondStepEmployeeForm extends React.Component<RouteComponentProps, SecondStepEmployeeFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areAllFieldsValid: false,
    };
  }

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['signUpFirstName', 'signUpLastName', 'signUpEmail', 'signUpPassword'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState(areFieldsValid);
  };

  storeFirstName = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);
    const payload: IFirstName = { firstName: data, isValid: isValid, errorMessage: message };
    const action: IStoreFirstNameAction = { type: STORE_FIRST_NAME, payload };

    store.dispatch(action);

    this.checkFields();

    return { isValid, message };
  };

  storeLastName = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);
    const payload: ILastName = { lastName: data, isValid: isValid, errorMessage: message };
    const action: IStoreLastNameAction = { type: STORE_LAST_NAME, payload };

    store.dispatch(action);

    this.checkFields();

    return { isValid, message };
  };

  storeEmail = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.EMAIL);
    const payload: IEmail = { email: data, isValid: isValid, errorMessage: message };
    const action: IStoreEmailAction = { type: STORE_EMAIL, payload };

    store.dispatch(action);

    this.checkFields();

    return { isValid, message };
  };

  storePassword = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.PASSWORD);
    const payload: IPassword = { password: data, isValid: isValid, errorMessage: message };
    const action: IStorePasswordAction = { type: STORE_PASSWORD, payload };

    store.dispatch(action);

    this.checkFields();

    return { isValid, message };
  };

  dispatchSignUpAction = (): void => {
    // dispatch action
    const state = store.getState();

    const payload: IEmployeeAccount = {
      firstName: state.signUpFirstName.firstName,
      lastName: state.signUpLastName.lastName,
      email: state.signUpEmail.email,
      password: state.signUpPassword.password,
    };
    const action: IStoreEmployeeAccountAction = { type: STORE_EMPLOYEE_ACCOUNT, payload };

    store.dispatch(action);
  };

  signUpRequest = (event: FormEvent, history = this.props.history): void => {
    const state = store.getState();

    // add validation

    // add http request
    const data: INewEmployeeInput = {
      companyCode: state.signUpCompanyCode.code,
      email: state.signUpEmployeeInfo.email,
      userData: {
        firstName: state.signUpEmployeeInfo.firstName,
        lastName: state.signUpEmployeeInfo.lastName,
      },
      password: state.signUpEmployeeInfo.password,
    };

    registerEmployee(data, goToNextStep(event, history));
  };

  signUp = async (event: FormEvent): Promise<any> => {
    event.preventDefault();

    await this.dispatchSignUpAction();
    await this.signUpRequest(event);
  };

  render() {
    return (
      <form className="sign-up__form" onSubmit={this.signUp}>
        <div id="sign-up__form__name">
          <InputField name={'First name*'} onchange={this.storeFirstName} />
          <InputField name={'Last name*'} onchange={this.storeLastName} />
        </div>
        <InputField name={'Email*'} onchange={this.storeEmail} />
        <InputField name={'Password*'} onchange={this.storePassword} isPassword={true} />

        <span className="required-field__span">* required field</span>

        <SignUpFormButtons areFieldsValid={this.state.areAllFieldsValid} />

        <SignUpProgressCircles currentStep={2} signUpMode={'employee'} totalSteps={3} />
      </form>
    );
  }
}

export default withRouter(SecondStepEmployeeForm);
