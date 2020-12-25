import React, { FormEvent } from 'react';
import axios from 'axios';
import './SignInForm.scss';
import { AnyAction } from '@reduxjs/toolkit';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../common/InputField/InputField';
import Button from '../../common/Button/Button';

// import store
import store from '../../../index';

import { STORE_EMAIL, STORE_PASSWORD, SIGN_IN } from '../../../store/actions/auth/auth.types';
import {
  IEmail,
  IPassword,
  IStoreEmailAction,
  IStorePasswordAction,
  ISignInData,
  ISignInAction,
} from '../../../store/interfaces/auth.interfaces';

// Data from backend
import { ILoginInput } from '../../../../../types/auth.types';

// Validator
import { validator } from '../../../formValidation';

class SignInForm extends React.Component<RouteComponentProps> {
  render() {
    const storeEmail = (data: string): any => {
      const { isValid, message } = validator(data, 'email');
      const payload: IEmail = { email: data, isValid: isValid, errorMessage: message };
      const action: IStoreEmailAction = { type: STORE_EMAIL, payload };

      store.dispatch(action);

      return { isValid, message };
    };

    const storePassword = (data: string): any => {
      const { isValid, message } = validator(data, 'password');
      const payload: IPassword = { password: data, isValid: isValid, errorMessage: message };
      const action: IStorePasswordAction = { type: STORE_PASSWORD, payload };

      store.dispatch(action);

      return { isValid, message };
    };

    const dispatchSignInAction = (): void => {
      const state: AnyAction = store.getState();

      const payload: ISignInData = {
        email: state.signInEmail.email,
        password: state.signInPassword.password,
        areAllFieldsValid: true,
      };

      const action: ISignInAction = { type: SIGN_IN, payload };

      store.dispatch(action);
    };

    const signInRequest = (history = this.props.history) => {
      const state: AnyAction = store.getState();

      // include validation, then send data to the backend if everything is okay

      const data: ILoginInput = {
        email: state.signIn.email,
        password: state.signIn.password,
      };

      axios
        .post('http://localhost:4000/api/auth/login', data)
        .then(response => {
          localStorage['user_token'] = response.data.token;
        })
        .then(() => {
          console.log('Logged in!');
          history.push('/dashboard');
        })
        .catch(err => console.error(err));
    };

    const signIn = async (event: FormEvent): Promise<any> => {
      event.preventDefault();

      await dispatchSignInAction();
      await signInRequest();
    };

    return (
      <form className="sign-in__form" onSubmit={signIn}>
        <InputField name={'Email'} onchange={(e: any) => storeEmail(e)} />
        <InputField name={'Password'} isPassword={true} onchange={(e: any) => storePassword(e)} />
        <Button btnText={'Sign in'} isRegular={false} isSingleBtn={true} />
      </form>
    );
  }
}

export default withRouter(SignInForm);
