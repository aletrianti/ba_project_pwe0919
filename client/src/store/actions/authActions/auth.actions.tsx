// import types + interfaces for payloads
import { SIGN_IN, SIGN_OUT, STORE_EMAIL, STORE_PASSWORD } from './auth.types';
import { 
    IEmail, 
    IEmailAction, 
    IPassword, 
    IPasswordAction, 
    ISignInAction, 
    ISignInData, 
    IAuthAction 
} from '../../interfaces/auth.interfaces';

// actions
export const StoreEmailAction = (data: IEmail): IEmailAction => {
    return { type: STORE_EMAIL, payload: data };
}

export const StorePasswordAction = (data: IPassword): IPasswordAction => {
    return { type: STORE_PASSWORD, payload: data };
}

export const SignInAction = (data: ISignInData): ISignInAction => {
    return { type: SIGN_IN, payload: data };
}

export const AuthAction = (userId: number): IAuthAction => {
    return { type: SIGN_OUT, payload: userId };
}
