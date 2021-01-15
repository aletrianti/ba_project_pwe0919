// import actions
import { TOGGLE_ADD_USER_MODAL, TOGGLE_DELETE_USER_MODAL, TOGGLE_EDIT_USER_MODAL } from '../../actions/forms/forms.types';
import {
  DELETE_USER,
  EDIT_USER,
  STORE_USER_BUDDY,
  STORE_USER_DEPARTMENT,
  STORE_USER_EMAIL,
  STORE_USER_ROLE,
} from '../../actions/forms/users/users.types';
import {
  IAddUserModal,
  IDeleteUserModal,
  IEditUserModal,
  IToggleAddUserModalAction,
  IToggleDeleteUserModalAction,
  IToggleEditUserModalAction,
} from '../../interfaces/forms/users.interfaces';
import {
  IDeleteUser,
  IDeleteUserAction,
  IEditUser,
  IEditUserAction,
  IStoreUserBuddyAction,
  IStoreUserDepartmentAction,
  IStoreUserEmailAction,
  IStoreUserRoleAction,
  IUserBuddy,
  IUserDepartment,
  IUserEmail,
  IUserRole,
} from '../../interfaces/forms/users.interfaces';

// create reducers
export const storeUserEmailReducer = (
  state: IUserEmail = { email: '', isValid: false, errorMessage: '' },
  action: IStoreUserEmailAction
) => {
  switch (action.type) {
    case STORE_USER_EMAIL:
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
export const storeUserBuddyReducer = (
  state: IUserBuddy = { buddy: 0, isValid: false, errorMessage: '' },
  action: IStoreUserBuddyAction
) => {
  switch (action.type) {
    case STORE_USER_BUDDY:
      return {
        ...state,
        buddy: action.payload.buddy,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeUserDepartmentReducer = (
  state: IUserDepartment = { department: 0, isValid: false, errorMessage: '' },
  action: IStoreUserDepartmentAction
) => {
  switch (action.type) {
    case STORE_USER_DEPARTMENT:
      return {
        ...state,
        department: action.payload.department,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeUserRoleReducer = (
  state: IUserRole = { role: 0, isValid: false, errorMessage: '' },
  action: IStoreUserRoleAction
) => {
  switch (action.type) {
    case STORE_USER_ROLE:
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

export const editUserReducer = (
  state: IEditUser = {
    buddy: { buddy: 0, isValid: false, errorMessage: '' },
    department: { department: 0, isValid: false, errorMessage: '' },
    role: { role: 0, isValid: false, errorMessage: '' },
  },
  action: IEditUserAction
) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        buddy: action.payload.buddy,
        department: action.payload.department,
        role: action.payload.role,
      };
    default:
      return state;
  }
};

export const deleteUserReducer = (
  state: IDeleteUser = {
    id: 0,
  },
  action: IDeleteUserAction
) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export const toggleAddUserModalReducer = (state: IAddUserModal = { isOpen: false }, action: IToggleAddUserModalAction) => {
  switch (action.type) {
    case TOGGLE_ADD_USER_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleEditUserModalReducer = (
  state: IEditUserModal = { id: 0, isOpen: false },
  action: IToggleEditUserModalAction
) => {
  switch (action.type) {
    case TOGGLE_EDIT_USER_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleDeleteUserModalReducer = (
  state: IDeleteUserModal = { id: 0, isOpen: false },
  action: IToggleDeleteUserModalAction
) => {
  switch (action.type) {
    case TOGGLE_DELETE_USER_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
