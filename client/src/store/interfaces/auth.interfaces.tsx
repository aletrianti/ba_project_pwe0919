// auth interfaces

// Sign In
export interface IEmail {
    email: string
}

export interface IPassword {
    password: string
}

export interface ISignInData {
    email: string,
    password: string
}

export interface IEmailAction {
    type: string,
    payload: IEmail
}

export interface IPasswordAction {
    type: string,
    payload: IPassword
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
