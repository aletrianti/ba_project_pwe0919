// import types + interfaces for payloads
import { IAddUserModal, IToggleModalAction } from '../../interfaces/forms.interfaces';
import { TOGGLE_ADD_USER_MODAL } from './forms.types';

// actions
export const ToggleModalAction = (data: IAddUserModal): IToggleModalAction => {
  return { type: TOGGLE_ADD_USER_MODAL, payload: data };
};
