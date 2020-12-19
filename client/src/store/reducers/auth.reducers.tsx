// import actions
import { SIGN_IN, SIGN_OUT, STORE_EMAIL, STORE_PASSWORD } from '../actions/authActions/auth.types';
import { 
    IEmail, 
    IEmailAction, 
    IPassword, 
    IPasswordAction, 
    ISignInAction, 
    ISignInData,
    IAuth, 
    IAuthAction 
} from '../interfaces/auth.interfaces';

// define default states
const initialEmailState: IEmail = { email: '' };
const initialPasswordState: IPassword = { password: '' };
const initialSignInState: ISignInData = { email: '', password: '' };
const initialAuthState: IAuth = { isLoggedIn: false }; // userId === null

// create reducers
export const storeEmailReducer = (state: IEmail = initialEmailState, action: IEmailAction) => {
    switch(action.type) {
        case STORE_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
        default:
            return state;
    }
}

export const storePasswordReducer = (state: IPassword = initialPasswordState, action: IPasswordAction) => {
    switch(action.type) {
        case STORE_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            }
        default:
            return state;
    }
}

export const signInReducer = (state: ISignInData = initialSignInState, action: ISignInAction) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            };
        default:
            return state;
    }
}

export const authReducer = (state: IAuth = initialAuthState, action: IAuthAction) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload
            };
        case SIGN_OUT:
            return {
                ...state,
                isLoggedIn: false,
                userId: action.payload // should we store the userId on logout?
            };
        default:
            return state;
    }
};
