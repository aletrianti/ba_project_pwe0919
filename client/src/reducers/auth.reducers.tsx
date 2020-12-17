// import actions
import { SIGN_IN, SIGN_OUT } from '../actions/authActions/auth.types';
import { IAuth, IAuthAction } from '../types/auth.types';

// define default state
const initialState: IAuth = { isLoggedIn: false }; // userId === null

// create reducer
const authReducer = (state: IAuth = initialState, action: IAuthAction) => {
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

export default authReducer;
