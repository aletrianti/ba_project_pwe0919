// import actions
import { STORE_USER_EMAIL } from '../../actions/forms/user/user.actions';
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
