// User form (Add)
export interface IUserEmail {
  email: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreUserEmailAction {
  type: string;
  payload: IUserEmail;
}
