// import actions
import { SIGN_IN, SIGN_OUT, STORE_EMAIL, STORE_PASSWORD } from '../actions/auth/auth.types';
import {
  IEmail,
  IStoreEmailAction,
  IPassword,
  IStorePasswordAction,
  ISignInAction,
  ISignInData,
  IAuth,
  IAuthUserAction,
} from '../interfaces/auth.interfaces';

// create reducers
export const storeEmailReducer = (state: IEmail = { email: '', isValid: false, errorMessage: '' }, action: IStoreEmailAction) => {
  switch (action.type) {
    case STORE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storePasswordReducer = (
  state: IPassword = { password: '', isValid: false, errorMessage: '' },
  action: IStorePasswordAction
) => {
  switch (action.type) {
    case STORE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const signInReducer = (
  state: ISignInData = { email: '', password: '', areAllFieldsValid: false },
  action: ISignInAction
) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        areAllFieldsValid: action.payload.areAllFieldsValid,
      };
    default:
      return state;
  }
};

export const authReducer = (
  state: IAuth = { isLoggedIn: false }, // token === null
  action: IAuthUserAction
) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
