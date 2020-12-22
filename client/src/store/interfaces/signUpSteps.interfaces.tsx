// Sign up steps interfaces

// General
export interface ISignUpStep {
    currentStep: number,
    accountType: string
}
export interface IChangeStepAction {
    type: string,
    payload: ISignUpStep
}

export interface IFirstName {
    firstName: string
}
export interface IStoreFirstNameAction {
    type: string,
    payload: IFirstName
}

export interface ILastName {
    lastName: string
}
export interface IStoreLastNameAction {
    type: string,
    payload: ILastName
}

export interface IEmail {
    email: string
}
export interface IStoreEmailAction {
    type: string,
    payload: IEmail
}

export interface IPassword {
    password: string
}
export interface IStorePasswordAction {
    type: string,
    payload: IPassword
}

export interface IRole {
    role: string
}
export interface IStoreRoleAction {
    type: string,
    payload: IRole
}

// Step 0 (general step)
export interface IAccountType {
    accountType: string
}
export interface ISetAccountTypeAction {
    type: string,
    payload: IAccountType
}

// Step 1 - Employee
export interface ICompanyCode {
    code: string
}
export interface IStoreCompanyCodeAction {
    type: string,
    payload: ICompanyCode
}

// Step 2 - Employee
export interface IEmployeeAccount {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
export interface IStoreEmployeeAccountAction {
    type: string,
    payload: IEmployeeAccount
}

// Step 1 - Company
export interface ICompany {
    name: string,
    size: string
}
export interface IStoreCompanyAction {
    type: string,
    payload: ICompany
}

export interface ICompanyName {
    name: string
}
export interface IStoreCompanyNameAction {
    type: string,
    payload: ICompanyName
}

export interface ICompanySize {
    size: string
}
export interface IStoreCompanySizeAction {
    type: string,
    payload: ICompanySize
}

// Step 2 - Company
export interface IAdminAccount {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: string
}
export interface IStoreAdminAccountAction {
    type: string,
    payload: IAdminAccount
}

// Step 3 - Company
export interface IInvitedEmployee {
    email: string
}
export interface IStoreInvitedEmployeeAction {
    type: string,
    payload: IInvitedEmployee
}

export interface IInvitedEmployees {
    emails: string[]
}
export interface IStoreInvitedEmployeesAction {
    type: string,
    payload: IInvitedEmployees
}
