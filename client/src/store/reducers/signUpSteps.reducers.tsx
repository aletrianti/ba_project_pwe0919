import {
  CHANGE_STEP,
  SET_ACCOUNT_TYPE,
  STORE_COMPANY_CODE,
  STORE_FIRST_NAME,
  STORE_LAST_NAME,
  STORE_EMAIL,
  STORE_PASSWORD,
  STORE_ROLE,
  STORE_EMPLOYEE_ACCOUNT,
  STORE_COMPANY,
  STORE_COMPANY_NAME,
  STORE_COMPANY_SIZE,
  STORE_ADMIN_ACCOUNT,
  STORE_INVITED_EMPLOYEE,
  STORE_INVITED_EMPLOYEES,
} from '../actions/signUpSteps/signUpSteps.types';
import {
  ISignUpStep,
  IChangeStepAction,
  IAccountType,
  ISetAccountTypeAction,
  ICompanyCode,
  IStoreCompanyCodeAction,
  IFirstName,
  IStoreFirstNameAction,
  ILastName,
  IStoreLastNameAction,
  IEmail,
  IStoreEmailAction,
  IPassword,
  IStorePasswordAction,
  IRole,
  IStoreRoleAction,
  IEmployeeAccount,
  IStoreEmployeeAccountAction,
  ICompany,
  IStoreCompanyAction,
  ICompanyName,
  IStoreCompanyNameAction,
  ICompanySize,
  IStoreCompanySizeAction,
  IAdminAccount,
  IStoreAdminAccountAction,
  IInvitedEmployee,
  IStoreInvitedEmployeeAction,
  IInvitedEmployees,
  IStoreInvitedEmployeesAction,
} from '../interfaces/signUpSteps.interfaces';

// create reducers
export const changeSignUpStep = (state: ISignUpStep = { currentStep: 0, accountType: '' }, action: IChangeStepAction) => {
  switch (action.type) {
    case CHANGE_STEP:
      return {
        ...state,
        currentStep: action.payload.currentStep,
        accountType: action.payload.accountType,
      };
    default:
      return state;
  }
};

export const setAccountType = (
  state: IAccountType = { accountType: '', isValid: false, errorMessage: '' },
  action: ISetAccountTypeAction
) => {
  switch (action.type) {
    case SET_ACCOUNT_TYPE:
      return {
        ...state,
        accountType: action.payload.accountType,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeCompanyCode = (
  state: ICompanyCode = { code: '', isValid: false, errorMessage: '' },
  action: IStoreCompanyCodeAction
) => {
  switch (action.type) {
    case STORE_COMPANY_CODE:
      return {
        ...state,
        code: action.payload.code,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeFirstName = (
  state: IFirstName = { firstName: '', isValid: false, errorMessage: '' },
  action: IStoreFirstNameAction
) => {
  switch (action.type) {
    case STORE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload.firstName,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeLastName = (
  state: ILastName = { lastName: '', isValid: false, errorMessage: '' },
  action: IStoreLastNameAction
) => {
  switch (action.type) {
    case STORE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload.lastName,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeEmail = (state: IEmail = { email: '', isValid: false, errorMessage: '' }, action: IStoreEmailAction) => {
  switch (action.type) {
    case STORE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storePassword = (
  state: IPassword = { password: '', isValid: false, errorMessage: '' },
  action: IStorePasswordAction
) => {
  switch (action.type) {
    case STORE_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeRole = (state: IRole = { role: '', isValid: false, errorMessage: '' }, action: IStoreRoleAction) => {
  switch (action.type) {
    case STORE_ROLE:
      return {
        ...state,
        role: action.payload.role,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeEmployeeAccount = (
  state: IEmployeeAccount = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  action: IStoreEmployeeAccountAction
) => {
  switch (action.type) {
    case STORE_EMPLOYEE_ACCOUNT:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export const storeCompany = (state: ICompany = { name: '', size: '' }, action: IStoreCompanyAction) => {
  switch (action.type) {
    case STORE_COMPANY:
      return {
        ...state,
        name: action.payload.name,
        size: action.payload.size,
      };
    default:
      return state;
  }
};

export const storeCompanyName = (
  state: ICompanyName = { name: '', isValid: false, errorMessage: '' },
  action: IStoreCompanyNameAction
) => {
  switch (action.type) {
    case STORE_COMPANY_NAME:
      return {
        ...state,
        name: action.payload.name,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeCompanySize = (
  state: ICompanySize = { size: '', isValid: false, errorMessage: '' },
  action: IStoreCompanySizeAction
) => {
  switch (action.type) {
    case STORE_COMPANY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeAdminAccount = (
  state: IAdminAccount = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  },
  action: IStoreAdminAccountAction
) => {
  switch (action.type) {
    case STORE_ADMIN_ACCOUNT:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        role: action.payload.role,
      };
    default:
      return state;
  }
};

export const storeInvitedEmployee = (
  state: IInvitedEmployee = { email: '', isValid: false, errorMessage: '' },
  action: IStoreInvitedEmployeeAction
) => {
  switch (action.type) {
    case STORE_INVITED_EMPLOYEE:
      return {
        ...state,
        email: action.payload.email,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeInvitedEmployees = (state: IInvitedEmployees = { emails: [] }, action: IStoreInvitedEmployeesAction) => {
  switch (action.type) {
    case STORE_INVITED_EMPLOYEES:
      return {
        ...state,
        emails: [...state.emails, action.payload.emails],
      };
    default:
      return state;
  }
};
