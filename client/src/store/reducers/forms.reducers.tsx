import { TOGGLE_MODAL } from '../actions/forms/forms.types';
import { IModal, IToggleModalAction } from '../interfaces/forms.interfaces';

// create reducers
export const toggleModalReducer = (state: IModal = { isOpen: false }, action: IToggleModalAction) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
