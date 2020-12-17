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

// interfaces for actions
export interface IAuthAction {
    type: string,
    payload: number
}

// type for auth state
export interface IAuth {
    isLoggedIn: boolean,
    userId?: number
}
