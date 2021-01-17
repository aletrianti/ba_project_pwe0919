// import types + interfaces for payloads

import { IProfile, IProfileFirstName, IStoreProfileFirstNameAction, IProfileLastName, IStoreProfileLastNameAction, IProfileEmail, IStoreProfileEmailAction, IProfilePassword, IStoreProfilePasswordAction, IProfileAtCompanySince, IStoreProfileAtCompanySinceAction, IProfileContactLink, IStoreProfileContactLinkAction, IProfileDescription, IStoreProfileAction, IStoreProfileDescriptionAction } from "../../../interfaces/forms/profile.interfaces";
import { PROFILE, STORE_PROFILE_AT_COMPANY_SINCE, STORE_PROFILE_CONTACT_LINK, STORE_PROFILE_DESCRIPTION, STORE_PROFILE_EMAIL, STORE_PROFILE_FIRST_NAME, STORE_PROFILE_LAST_NAME, STORE_PROFILE_PASSWORD } from "./profile.types";

// actions
export const StoreFirstNameAction = (data: IProfileFirstName): IStoreProfileFirstNameAction => {
  return { type: STORE_PROFILE_FIRST_NAME, payload: data };
};

export const StoreLastNameAction = (data: IProfileLastName): IStoreProfileLastNameAction => {
  return { type: STORE_PROFILE_LAST_NAME, payload: data };
};

export const StoreEmailAction = (data: IProfileEmail): IStoreProfileEmailAction => {
  return { type: STORE_PROFILE_EMAIL, payload: data };
};

export const StorePasswordAction = (data: IProfilePassword): IStoreProfilePasswordAction => {
  return { type: STORE_PROFILE_PASSWORD, payload: data };
};

export const StoreAtCompanySinceAction = (data: IProfileAtCompanySince): IStoreProfileAtCompanySinceAction => {
  return { type: STORE_PROFILE_AT_COMPANY_SINCE, payload: data };
};

export const StoreDescriptionAction = (data: IProfileDescription): IStoreProfileDescriptionAction => {
  return { type: STORE_PROFILE_DESCRIPTION, payload: data };
};

export const StoreContactLinkAction = (data: IProfileContactLink): IStoreProfileContactLinkAction => {
  return { type: STORE_PROFILE_CONTACT_LINK, payload: data };
};

export const StoreProfileAction = (data: IProfile): IStoreProfileAction => {
  return { type: PROFILE, payload: data };
};
