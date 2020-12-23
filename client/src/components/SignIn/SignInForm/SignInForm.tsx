import React, { FormEvent } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import InputField from '../../common/InputField/InputField';
import Button from '../../common/Button/Button';
import './SignInForm.scss';

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

class SignInForm extends React.Component {
  render() {
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

    const signIn = (event: FormEvent): void => {
      event.preventDefault();

      const state: AnyAction = store.getState();

      const payload: ISignInData = {
        email: state.email.email,
        password: state.password.password,
      };

      const action: ISignInAction = { type: SIGN_IN, payload };

      store.dispatch(action);
      // include validation, then send data to the backend if everything is okay
      // ...
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

export default SignInForm;
