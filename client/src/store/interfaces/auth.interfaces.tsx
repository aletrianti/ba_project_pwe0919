// Auth interfaces

// Sign In
export interface IEmail {
  email: string;
}
export interface IStoreEmailAction {
  type: string;
  payload: IEmail;
}

export interface IPassword {
  password: string;
}
export interface IStorePasswordAction {
  type: string;
  payload: IPassword;
}

export interface ISignInData {
  email: string;
  password: string;
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
