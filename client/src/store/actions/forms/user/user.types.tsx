// import types + interfaces for payloads
import { IStoreUserEmailAction, IUserEmail } from '../../../interfaces/forms/user.interfaces';
import { STORE_USER_EMAIL } from './user.actions';

// actions
export const StoreEmailAction = (data: IUserEmail): IStoreUserEmailAction => {
  return { type: STORE_USER_EMAIL, payload: data };
};
