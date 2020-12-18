// import types + interfaces for payloads
import { SIGN_IN, SIGN_OUT } from './auth.types';
import { ISignInAction, ISignInData, IAuthAction } from '../../interfaces/auth.interfaces';

// actions
export const SignInAction = (data: ISignInData): ISignInAction => {
    return { type: SIGN_IN, payload: data };
}

export const AuthAction = (userId: number): IAuthAction => {
    return { type: SIGN_OUT, payload: userId };
}
