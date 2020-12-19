import { 
    CHANGE_STEP, 
    SET_ACCOUNT_TYPE, 
    STORE_COMPANY_CODE,
    STORE_EMPLOYEE_ACCOUNT, 
    STORE_COMPANY,
    STORE_ADMIN_ACCOUNT,
    STORE_INVITED_EMPLOYEE
} from './signUpSteps.types';
import {
    ISignUpStep, IChangeStepAction,
    IAccountType, ISetAccountTypeAction,
    ICompanyCode, IStoreCompanyCodeAction,
    IEmployeeAccount, IStoreEmployeeAccountAction,
    ICompany, IStoreCompanyAction,
    IAdminAccount, IStoreAdminAccountAction,
    IInvitedEmployee, IStoreInvitedEmployeeAction
} from '../../interfaces/signUpSteps.interfaces';

// actions
export const ChangeStepAction = (data: ISignUpStep): IChangeStepAction => {
    return { type: CHANGE_STEP, payload: data };
}

export const SetAccountTypeAction = (data: IAccountType): ISetAccountTypeAction => {
    return { type: SET_ACCOUNT_TYPE, payload: data };
}

export const StoreCompanyCodeAction = (data: ICompanyCode): IStoreCompanyCodeAction => {
    return { type: STORE_COMPANY_CODE, payload: data };
}

export const StoreEmployeeAccountAction = (data: IEmployeeAccount): IStoreEmployeeAccountAction => {
    return { type: STORE_EMPLOYEE_ACCOUNT, payload: data };
}

export const StoreCompanyAction = (data: ICompany): IStoreCompanyAction => {
    return { type: STORE_COMPANY, payload: data };
}

export const StoreAdminAccountAction = (data: IAdminAccount): IStoreAdminAccountAction => {
    return { type: STORE_ADMIN_ACCOUNT, payload: data };
}

export const StoreInvitedEmployeeAction = (data: IInvitedEmployee): IStoreInvitedEmployeeAction => {
    return { type: STORE_INVITED_EMPLOYEE, payload: data };
}
