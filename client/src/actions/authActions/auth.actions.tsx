// import types + interfaces for payloads
import { SIGN_IN, SIGN_OUT } from './auth.types';
import { IAuthAction } from '../../types/auth.types';


// actions
export const SignInAction = (userId: number): IAuthAction => {
    return { type: SIGN_IN, payload: userId };
}

export const SignOutAction = (userId: number): IAuthAction => {
    return { type: SIGN_OUT, payload: userId };
}
