import React, { FormEvent } from 'react';
import axios from 'axios';
import './SecondStepEmployeeForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

import { goToNextStep } from '../../../../utils/ChangeFormStep';

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

class SecondStepEmployeeForm extends React.Component<RouteComponentProps> {
  render() {
    const storeFirstName = (data: string): void => {
      const payload: IFirstName = { firstName: data };
      const action: IStoreFirstNameAction = { type: STORE_FIRST_NAME, payload };

      store.dispatch(action);
    };

    const storeLastName = (data: string): void => {
      const payload: ILastName = { lastName: data };
      const action: IStoreLastNameAction = { type: STORE_LAST_NAME, payload };

      store.dispatch(action);
    };

    const storeEmail = (data: string): void => {
      const payload: IEmail = { email: data };
      const action: IStoreEmailAction = { type: STORE_EMAIL, payload };

      store.dispatch(action);
    };

    const storePassword = (data: string): void => {
      const payload: IPassword = { password: data };
      const action: IStorePasswordAction = { type: STORE_PASSWORD, payload };

      store.dispatch(action);
    };

    const dispatchSignUpAction = (): void => {
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

    const signUpRequest = (event: FormEvent, history = this.props.history): void => {
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

      console.log(data);

      axios
        .post('http://localhost:4000/api/auth/register-employee', data)
        .then(response => {
          localStorage['user_token'] = response.data.token;
        })
        .then(() => goToNextStep(event, history))
        .catch(err => console.error(err));
    };

    const signUp = async (event: FormEvent): Promise<any> => {
      event.preventDefault();

      await dispatchSignUpAction();
      await signUpRequest(event);
    };

    return (
      <form className="sign-up__form" onSubmit={signUp}>
        <div id="sign-up__form__name">
          <InputField name={'First name*'} onchange={storeFirstName} />
          <InputField name={'Last name*'} onchange={storeLastName} />
        </div>
        <InputField name={'Email*'} onchange={storeEmail} />
        <InputField name={'Password*'} onchange={storePassword} isPassword={true} />

        <span className="required-field__span">* required field</span>

        <SignUpFormButtons />

        <SignUpProgressCircles currentStep={2} signUpMode={'employee'} totalSteps={3} />
      </form>
    );
  }
}

export default withRouter(SecondStepEmployeeForm);
