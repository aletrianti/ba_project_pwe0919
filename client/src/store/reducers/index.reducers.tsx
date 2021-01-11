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
  storeInvitedEmployees,
} from './signUpSteps.reducers';
import {
  storeTaskOneReducer,
  storeTaskTwoReducer,
  storeTaskThreeReducer,
  storeTaskFourReducer,
  storeTaskFiveReducer,
} from './tasks.reducers';
import { storeUserEmailReducer } from './forms/user.reducers';
import { toggleModalReducer } from './forms.reducers';

// import redux method
import { combineReducers } from '@reduxjs/toolkit';

// combine reducers
// set to 'any' as it can't be set to 'void'
const reducers: any = combineReducers({
  // Auth
  auth: authReducer,
  // Sign in
  signIn: signInReducer,
  signInEmail: storeEmailReducer,
  signInPassword: storePasswordReducer,
  // Sign up
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
  // Modals
  formModal: toggleModalReducer,
  // Tasks
  taskOne: storeTaskOneReducer,
  taskTwo: storeTaskTwoReducer,
  taskThree: storeTaskThreeReducer,
  taskFour: storeTaskFourReducer,
  taskFive: storeTaskFiveReducer,
  // Users
  userEmail: storeUserEmailReducer,
  // ...
});

export default reducers;
