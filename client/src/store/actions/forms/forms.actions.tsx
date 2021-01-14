// import types + interfaces for payloads
import {
  IAddUserModal,
  IDeleteUserModal,
  IEditUserModal,
  IToggleAddUserModalAction,
  IToggleDeleteUserModalAction,
  IToggleEditUserModalAction,
} from '../../interfaces/forms.interfaces';
import { TOGGLE_ADD_USER_MODAL, TOGGLE_DELETE_USER_MODAL, TOGGLE_EDIT_USER_MODAL } from './forms.types';

// actions
export const ToggleAddUserModalAction = (data: IAddUserModal): IToggleAddUserModalAction => {
  return { type: TOGGLE_ADD_USER_MODAL, payload: data };
};

export const ToggleEditUserModalAction = (data: IEditUserModal): IToggleEditUserModalAction => {
  return { type: TOGGLE_EDIT_USER_MODAL, payload: data };
};

export const ToggleDeleteUserModalAction = (data: IDeleteUserModal): IToggleDeleteUserModalAction => {
  return { type: TOGGLE_DELETE_USER_MODAL, payload: data };
};
