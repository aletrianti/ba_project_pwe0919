// Auth interfaces

// Sign In
export interface IEmail {
  email: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreEmailAction {
  type: string;
  payload: IEmail;
}

export interface IPassword {
  password: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStorePasswordAction {
  type: string;
  payload: IPassword;
}

export interface ISignInData {
  email: string;
  password: string;
  areAllFieldsValid: boolean;
}
export interface ISignInAction {
  type: string;
  payload: ISignInData;
}

// Auth
export interface IAuth {
  isLoggedIn: boolean;
  token?: string;
}
export interface IAuthUserAction {
  type: string;
  payload: IAuth;
}
