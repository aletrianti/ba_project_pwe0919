// import types + interfaces for payloads
import { IModal, IToggleModalAction } from '../../interfaces/forms.interfaces';
import { TOGGLE_MODAL } from './forms.types';

// actions
export const ToggleModalAction = (data: IModal): IToggleModalAction => {
  return { type: TOGGLE_MODAL, payload: data };
};
