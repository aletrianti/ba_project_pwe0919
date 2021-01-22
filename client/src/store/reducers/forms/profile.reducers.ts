import { getUserInfoFromLocalStorage } from "../../../utils/localStorageActions";
import { TOGGLE_EDIT_PROFILE_MODAL } from "../../actions/forms/forms.types";
import { STORE_PROFILE_FIRST_NAME, STORE_PROFILE_LAST_NAME, STORE_PROFILE_EMAIL, STORE_PROFILE_PASSWORD, STORE_PROFILE_BIRTHDAY, STORE_PROFILE_AT_COMPANY_SINCE, STORE_PROFILE_DESCRIPTION, STORE_PROFILE_CONTACT_LINK, PROFILE } from "../../actions/forms/profile/profile.types";
import { IProfileFirstName, IStoreProfileFirstNameAction, IProfileLastName, IStoreProfileLastNameAction, IProfileEmail, IStoreProfileEmailAction, IProfilePassword, IStoreProfilePasswordAction, IProfileBirthday, IStoreProfileBirthdayAction, IProfileAtCompanySince, IStoreProfileAtCompanySinceAction, IProfileDescription, IStoreProfileDescriptionAction, IProfileContactLink, IStoreProfileContactLinkAction, IEditProfileModal, IToggleEditProfileModalAction, IStoreProfileAction, IProfile } from "../../interfaces/forms/profile.interfaces";

const currentUser = getUserInfoFromLocalStorage;

export const storeProfileFirstNameReducer = (
  state: IProfileFirstName = { firstName: '', isValid: false, errorMessage: '' },
  action: IStoreProfileFirstNameAction
) => {
  switch (action.type) {
    case STORE_PROFILE_FIRST_NAME:
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
export const storeProfileLastNameReducer = (
  state: IProfileLastName = { lastName: '', isValid: false, errorMessage: '' },
  action: IStoreProfileLastNameAction
) => {
  switch (action.type) {
    case STORE_PROFILE_LAST_NAME:
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
export const storeProfileEmailReducer = (
  state: IProfileEmail = { email: '', isValid: false, errorMessage: '' },
  action: IStoreProfileEmailAction
) => {
  switch (action.type) {
    case STORE_PROFILE_EMAIL:
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
export const storeProfilePasswordReducer = (
  state: IProfilePassword = { password: '', isValid: false, errorMessage: '' },
  action: IStoreProfilePasswordAction
) => {
  switch (action.type) {
    case STORE_PROFILE_PASSWORD:
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
export const storeProfileBirthdayReducer = (
  state: IProfileBirthday = { birthday: '', isValid: false, errorMessage: '' },
  action: IStoreProfileBirthdayAction
) => {
  switch (action.type) {
    case STORE_PROFILE_BIRTHDAY:
      return {
        ...state,
        birthday: action.payload.birthday,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeProfileAtCompanySinceReducer = (
  state: IProfileAtCompanySince = { atCompanySince: '', isValid: false, errorMessage: '' },
  action: IStoreProfileAtCompanySinceAction
) => {
  switch (action.type) {
    case STORE_PROFILE_AT_COMPANY_SINCE:
      return {
        ...state,
        atCompanySince: action.payload.atCompanySince,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeProfileDescriptionReducer = (
  state: IProfileDescription = { description: '', isValid: false, errorMessage: '' },
  action: IStoreProfileDescriptionAction
) => {
  switch (action.type) {
    case STORE_PROFILE_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeProfileContactLinkReducer = (
  state: IProfileContactLink = { contactLink: '', isValid: false, errorMessage: '' },
  action: IStoreProfileContactLinkAction
) => {
  switch (action.type) {
    case STORE_PROFILE_CONTACT_LINK:
      return {
        ...state,
        contactLink: action.payload.contactLink,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeProfileReducer = (
  state: IProfile = {
    firstName: { firstName: currentUser.firstName, isValid: true, errorMessage: '' },
    lastName: { lastName: currentUser.lastName, isValid: true, errorMessage: '' },
    email: { email: '', isValid: true, errorMessage: '' },
    password: { password: '', isValid: true, errorMessage: '' },
    birthday: { birthday: currentUser.birthday || '', isValid: true, errorMessage: '' },
    atCompanySince: { atCompanySince: currentUser.memberSince || '', isValid: true, errorMessage: '' },
    description: { description: currentUser.description || '', isValid: true, errorMessage: '' },
    contactLink: { contactLink: '', isValid: true, errorMessage: '' }
  },
  action: IStoreProfileAction
) => {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
        birthday: action.payload.birthday,
        atCompanySince: action.payload.atCompanySince,
        description: action.payload.description,
        contactLink: action.payload.contactLink,
      };
    default:
      return state;
  }
};

export const toggleEditProfileModalReducer = (
  state: IEditProfileModal = { id: 0, isOpen: false },
  action: IToggleEditProfileModalAction
) => {
  switch (action.type) {
    case TOGGLE_EDIT_PROFILE_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};