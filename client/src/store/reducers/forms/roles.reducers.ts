import { STORE_ROLE_TITLE, STORE_ROLE_DESCRIPTION, STORE_ROLE_RESPONSIBILITIES, EDIT_ROLE, DELETE_ROLE } from "../../actions/forms/roles/roles.types";
import { TOGGLE_ADD_ROLE_MODAL, TOGGLE_EDIT_ROLE_MODAL, TOGGLE_DELETE_ROLE_MODAL } from "../../actions/forms/forms.types";
import { IRoleTitle, IStoreRoleTitleAction, IRoleDescription, IStoreRoleDescriptionAction, IRoleResponsibilities, IStoreRoleResponsibilitiesAction, IRole, IRoleAction, IAddRoleModal, IToggleAddRoleModalAction, IRoleModal, IToggleEditRoleModalAction, IDeleteRoleModal, IToggleDeleteRoleModalAction, IRoleResponsibility, IStoreRoleResponsibilityAction, IDeleteRole, IDeleteRoleAction } from "../../interfaces/forms/roles.interfaces";

// create reducers
export const storeRoleTitleReducer = (
  state: IRoleTitle = { title: '', isValid: false, errorMessage: '' },
  action: IStoreRoleTitleAction
) => {
  switch (action.type) {
    case STORE_ROLE_TITLE:
      return {
        ...state,
        title: action.payload.title,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeRoleDescriptionReducer = (
  state: IRoleDescription = { description: '', isValid: false, errorMessage: '' },
  action: IStoreRoleDescriptionAction
) => {
  switch (action.type) {
    case STORE_ROLE_DESCRIPTION:
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
export const storeRoleResponsibilityReducer = (
  state: IRoleResponsibility = { responsibility: '', isValid: false, errorMessage: '' },
  action: IStoreRoleResponsibilityAction
) => {
  switch (action.type) {
    case STORE_ROLE_DESCRIPTION:
      return {
        ...state,
        responsibility: action.payload.responsibility,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeRoleResponsibilitiesReducer = (
  state: IRoleResponsibilities = { responsibilities: [] },
  action: IStoreRoleResponsibilitiesAction
) => {
  switch (action.type) {
    case STORE_ROLE_RESPONSIBILITIES:
      return {
        ...state,
        responsibilities: action.payload.responsibilities,
      };
    default:
      return state;
  }
};

export const roleReducer = (
  state: IRole = {
    title: { title: '', isValid: false, errorMessage: '' },
    description: { description: '', isValid: false, errorMessage: '' },
    responsibilities: { responsibilities: [] },
  },
  action: IRoleAction
) => {
  switch (action.type) {
    case EDIT_ROLE:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        responsibilities: action.payload.responsibilities,
      };
    default:
      return state;
  }
};

export const deleteRoleReducer = (
  state: IDeleteRole = {
    id: 0,
  },
  action: IDeleteRoleAction
) => {
  switch (action.type) {
    case DELETE_ROLE:
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export const toggleAddRoleModalReducer = (state: IAddRoleModal = { isOpen: false }, action: IToggleAddRoleModalAction) => {
  switch (action.type) {
    case TOGGLE_ADD_ROLE_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleEditRoleModalReducer = (
  state: IRoleModal = { id: 0, isOpen: false },
  action: IToggleEditRoleModalAction
) => {
  switch (action.type) {
    case TOGGLE_EDIT_ROLE_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleDeleteRoleModalReducer = (
  state: IDeleteRoleModal = { id: 0, isOpen: false },
  action: IToggleDeleteRoleModalAction
) => {
  switch (action.type) {
    case TOGGLE_DELETE_ROLE_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
