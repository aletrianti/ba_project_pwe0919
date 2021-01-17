// import types + interfaces for payloads
import {
  IDeleteUser,
  IDeleteUserAction,
  IUser,
  IUserAction,
  IStoreUserBuddyAction,
  IStoreUserDepartmentAction,
  IStoreUserEmailAction,
  IStoreUserRoleAction,
  IUserBuddy,
  IUserDepartment,
  IUserEmail,
  IUserRole,
} from '../../../interfaces/forms/users.interfaces';
import {
  DELETE_USER,
  USER,
  STORE_USER_BUDDY,
  STORE_USER_DEPARTMENT,
  STORE_USER_EMAIL,
  STORE_USER_ROLE,
} from './users.types';

// actions
export const StoreEmailAction = (data: IUserEmail): IStoreUserEmailAction => {
  return { type: STORE_USER_EMAIL, payload: data };
};

export const StoreBuddyAction = (data: IUserBuddy): IStoreUserBuddyAction => {
  return { type: STORE_USER_BUDDY, payload: data };
};

export const StoreDepartmentAction = (data: IUserDepartment): IStoreUserDepartmentAction => {
  return { type: STORE_USER_DEPARTMENT, payload: data };
};

export const StoreRoleAction = (data: IUserRole): IStoreUserRoleAction => {
  return { type: STORE_USER_ROLE, payload: data };
};

export const StoreUserAction = (data: IUser): IUserAction => {
  return { type: USER, payload: data };
};

export const DeleteUserAction = (data: IDeleteUser): IDeleteUserAction => {
  return { type: DELETE_USER, payload: data };
};
