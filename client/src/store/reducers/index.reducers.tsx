// import all reducers
import { authReducer, signInReducer, storeEmailReducer, storePasswordReducer } from './auth.reducers';
import {
    changeSignUpStep,
    setAccountType,
    storeCompanyCode,
    storeEmployeeAccount,
    storeCompany,
    storeAdminAccount,
    storeInvitedEmployee
} from './signUpSteps.reducers';

// import redux method
import { combineReducers } from '@reduxjs/toolkit';

// combine reducers
// set to 'any' as it can't be set to 'void'
const reducers: any = combineReducers({
    auth: authReducer,
    signIn: signInReducer,
    email: storeEmailReducer,
    password: storePasswordReducer,
    signUpInfo: changeSignUpStep,
    signUpAccountType: setAccountType,
    signUpCompanyCode: storeCompanyCode,
    signUpEmployeeInfo: storeEmployeeAccount,
    signUpCompanyInfo: storeCompany,
    signUpAdminInfo: storeAdminAccount,
    signUpLastInvitedEmployee: storeInvitedEmployee,
    // ...
});

export default reducers;
