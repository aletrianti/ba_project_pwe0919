import { 
    CHANGE_STEP, 
    SET_ACCOUNT_TYPE, 
    STORE_COMPANY_CODE,
    STORE_EMPLOYEE_ACCOUNT, 
    STORE_COMPANY,
    STORE_ADMIN_ACCOUNT,
    STORE_INVITED_EMPLOYEE
} from '../actions/signUpSteps/signUpSteps.types';
import {
    ISignUpStep, IChangeStepAction,
    IAccountType, ISetAccountTypeAction,
    ICompanyCode, IStoreCompanyCodeAction,
    IEmployeeAccount, IStoreEmployeeAccountAction,
    ICompany, IStoreCompanyAction,
    IAdminAccount, IStoreAdminAccountAction,
    IInvitedEmployee, IStoreInvitedEmployeeAction
} from '../interfaces/signUpSteps.interfaces';

// create reducers
export const changeSignUpStep = (
    state: ISignUpStep = { currentStep: 0, accountType: '' },
    action: IChangeStepAction
) => {
    switch(action.type) {
        case CHANGE_STEP:
            return {
                ...state,
                currentStep: action.payload.currentStep,
                accountType: action.payload.accountType
            };
        default:
            return state;
    }
};

export const setAccountType = (
    state: IAccountType = { accountType: '' },
    action: ISetAccountTypeAction
) => {
    switch(action.type) {
        case SET_ACCOUNT_TYPE:
            return {
                ...state,
                accountType: action.payload.accountType,
            };
        default:
            return state;
    }
};

export const storeCompanyCode = (
    state: ICompanyCode = { code: '' },
    action: IStoreCompanyCodeAction
) => {
    switch(action.type) {
        case STORE_COMPANY_CODE:
            return {
                ...state,
                code: action.payload.code,
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
        password: ''
    },
    action: IStoreEmployeeAccountAction
) => {
    switch(action.type) {
        case STORE_EMPLOYEE_ACCOUNT:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password
            };
        default:
            return state;
    }
};

export const storeCompany = (
    state: ICompany = { name: '', size: '' },
    action: IStoreCompanyAction
) => {
    switch(action.type) {
        case STORE_COMPANY:
            return {
                ...state,
                name: action.payload.name,
                size: action.payload.size
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
        role: ''
    },
    action: IStoreAdminAccountAction
) => {
    switch(action.type) {
        case STORE_ADMIN_ACCOUNT:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role
            };
        default:
            return state;
    }
};

export const storeInvitedEmployee = (
    state: IInvitedEmployee = { email: '' },
    action: IStoreInvitedEmployeeAction
) => {
    switch(action.type) {
        case STORE_INVITED_EMPLOYEE:
            return {
                ...state,
                email: action.payload.email,
            };
        default:
            return state;
    }
};
