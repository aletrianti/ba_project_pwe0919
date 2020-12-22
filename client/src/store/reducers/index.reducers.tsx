// import all reducers
import { authReducer, signInReducer, storeEmailReducer, storePasswordReducer } from './auth.reducers';
import {
    changeSignUpStep,
    setAccountType,
    storeCompanyCode,
    storeFirstName,
    storeLastName,
    storeEmail,
    storePassword,
    storeRole,
    storeEmployeeAccount,
    storeCompany,
    storeCompanyName,
    storeCompanySize,
    storeAdminAccount,
    storeInvitedEmployee,
    storeInvitedEmployees
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
    signUpFirstName: storeFirstName,
    signUpLastName: storeLastName,
    signUpEmail: storeEmail,
    signUpPassword: storePassword,
    signUpRole: storeRole,
    signUpEmployeeInfo: storeEmployeeAccount,
    signUpCompanyInfo: storeCompany,
    signUpCompanyName: storeCompanyName,
    signUpCompanySize: storeCompanySize,
    signUpAdminInfo: storeAdminAccount,
    signUpLastInvitedEmployee: storeInvitedEmployee,
    signUpLastInvitedEmployees: storeInvitedEmployees,
    // ...
});

export default reducers;
