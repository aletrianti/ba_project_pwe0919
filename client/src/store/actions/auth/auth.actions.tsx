// import types + interfaces for payloads
import { SIGN_IN, SIGN_OUT, STORE_EMAIL, STORE_PASSWORD } from './auth.types';
import {
  IEmail,
  IStoreEmailAction,
  IPassword,
  IStorePasswordAction,
  ISignInAction,
  ISignInData,
  IAuth,
  IAuthUserAction,
} from '../../interfaces/auth.interfaces';

// actions
export const StoreEmailAction = (data: IEmail): IStoreEmailAction => {
  return { type: STORE_EMAIL, payload: data };
};

export const StorePasswordAction = (data: IPassword): IStorePasswordAction => {
  return { type: STORE_PASSWORD, payload: data };
};

export const SignInAction = (data: ISignInData): ISignInAction => {
  return { type: SIGN_IN, payload: data };
};

export const AuthAction = (data: IAuth): IAuthUserAction => {
  return { type: SIGN_OUT, payload: data };
};
