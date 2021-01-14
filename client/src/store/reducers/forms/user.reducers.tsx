// import actions
import { TOGGLE_ADD_USER_MODAL } from '../../actions/forms/forms.types';
import { STORE_USER_EMAIL } from '../../actions/forms/user/user.types';
import { IAddUserModal, IToggleModalAction } from '../../interfaces/forms.interfaces';
import { IStoreUserEmailAction, IUserEmail } from '../../interfaces/forms/user.interfaces';

// create reducers
export const storeUserEmailReducer = (
  state: IUserEmail = { email: '', isValid: false, errorMessage: '' },
  action: IStoreUserEmailAction
) => {
  switch (action.type) {
    case STORE_USER_EMAIL:
      return {
        ...state,
        email: action.payload.email,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const toggleAddUserModalReducer = (state: IAddUserModal = { isOpen: false }, action: IToggleModalAction) => {
  switch (action.type) {
    case TOGGLE_ADD_USER_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
