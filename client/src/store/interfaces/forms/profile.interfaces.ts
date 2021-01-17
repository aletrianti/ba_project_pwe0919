export interface IProfileFirstName {
  firstName: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreProfileFirstNameAction {
  type: string;
  payload: IProfileFirstName;
}
export interface IProfileLastName {
  lastName: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreProfileLastNameAction {
  type: string;
  payload: IProfileLastName;
}
export interface IProfileEmail {
  email: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreProfileEmailAction {
  type: string;
  payload: IProfileEmail;
}
export interface IProfilePassword {
  password: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreProfilePasswordAction {
  type: string;
  payload: IProfilePassword;
}
export interface IProfileBirthday {
  birthday: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreProfileBirthdayAction {
  type: string;
  payload: IProfileBirthday;
}
export interface IProfileAtCompanySince {
  atCompanySince: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreProfileAtCompanySinceAction {
  type: string;
  payload: IProfileAtCompanySince;
}
export interface IProfileDescription {
  description: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreProfileDescriptionAction {
  type: string;
  payload: IProfileDescription;
}
export interface IProfileContactLink {
  contactLink: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreProfileContactLinkAction {
  type: string;
  payload: IProfileContactLink;
}
// TODO: interface for profile picture

export interface IProfile {
  firstName: IProfileFirstName;
  lastName: IProfileLastName;
  email: IProfileEmail;
  password: IProfilePassword;
  birthday: IProfileBirthday;
  atCompanySince: IProfileAtCompanySince;
  description: IProfileDescription;
  contactLink: IProfileContactLink;
}
export interface IStoreProfileAction {
  type: string;
  payload: IProfile;
}

export interface IEditProfileModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditProfileModalAction {
  type: string;
  payload: IEditProfileModal;
}
