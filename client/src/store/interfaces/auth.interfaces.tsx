// auth interfaces

// TBD
export interface IUser {
    id?: number,
    email: string,
    created?: boolean,
    password?: string,
    firstName?: string,
    lastName?: string,
    jobPosition?: string,
    department?: string,
    buddy?: string,
    birthday?: string,
    companyDate?: string,
    description?: string,
    contactLink?: string,
    hasProfilePicture?: boolean,
    profilePicture?: string
}

// Sign In
export interface ISignInData {
    email: string,
    password: string
}
export interface ISignInAction {
    type: string,
    payload: ISignInData
}

// Auth
export interface IAuth {
    isLoggedIn: boolean,
    userId?: number
}
export interface IAuthAction {
    type: string,
    payload: number
}
