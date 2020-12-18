// import actions
import { SIGN_IN, SIGN_OUT } from '../actions/authActions/auth.types';
import { ISignInAction, ISignInData, IAuthAction, IAuth } from '../interfaces/auth.interfaces';

// define default states
const initialSignInState: ISignInData = { email: '', password: '' };
const initialAuthState: IAuth = { isLoggedIn: false }; // userId === null

// create reducers
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
