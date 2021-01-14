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

export interface IUserBuddy {
  buddy: number;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreUserBuddyAction {
  type: string;
  payload: IUserBuddy;
}
export interface IUserDepartment {
  department: number;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreUserDepartmentAction {
  type: string;
  payload: IUserDepartment;
}
export interface IUserRole {
  role: number;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreUserRoleAction {
  type: string;
  payload: IUserRole;
}
export interface IEditUser {
  buddy: IUserBuddy;
  department: IUserDepartment;
  role: IUserRole;
}
export interface IEditUserAction {
  type: string;
  payload: IEditUser;
}

export interface IDeleteUser {
  id: number;
}
export interface IDeleteUserAction {
  type: string;
  payload: IDeleteUser; // id
}
