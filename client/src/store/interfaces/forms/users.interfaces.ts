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
export interface IUser {
  buddy: IUserBuddy;
  department: IUserDepartment;
  role: IUserRole;
}
export interface IUserAction {
  type: string;
  payload: IUser;
}

export interface IDeleteUser {
  id: number;
}
export interface IDeleteUserAction {
  type: string;
  payload: IDeleteUser; // id
}

// Modals
export interface IAddUserModal {
  isOpen: boolean;
}
export interface IToggleAddUserModalAction {
  type: string;
  payload: IAddUserModal;
}

export interface IEditUserModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditUserModalAction {
  type: string;
  payload: IEditUserModal;
}

export interface IDeleteUserModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleDeleteUserModalAction {
  type: string;
  payload: IDeleteUserModal;
}
