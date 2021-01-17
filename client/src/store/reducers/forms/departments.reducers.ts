import { DEPARTMENT, DELETE_DEPARTMENT } from "../../actions/forms/departments/departments.types";
import { TOGGLE_ADD_DEPARTMENT_MODAL, TOGGLE_EDIT_DEPARTMENT_MODAL, TOGGLE_DELETE_DEPARTMENT_MODAL } from "../../actions/forms/forms.types";
import { IAddDepartmentModal, IDeleteDepartment, IDeleteDepartmentAction, IDeleteDepartmentModal, IDepartment, IDepartmentAction, IEditDepartmentModal, IToggleAddDepartmentModalAction, IToggleDeleteDepartmentModalAction, IToggleEditDepartmentModalAction } from "../../interfaces/forms/departments.interfaces";

// create reducers
export const departmentReducer = (
  state: IDepartment = { department: '', isValid: false, errorMessage: '' },
  action: IDepartmentAction
) => {
  switch (action.type) {
    case DEPARTMENT:
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

export const deleteDepartmentReducer = (
  state: IDeleteDepartment = { id: 0 },
  action: IDeleteDepartmentAction
) => {
  switch (action.type) {
    case DELETE_DEPARTMENT:
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export const toggleAddDepartmentModalReducer = (state: IAddDepartmentModal = { isOpen: false }, action: IToggleAddDepartmentModalAction) => {
  switch (action.type) {
    case TOGGLE_ADD_DEPARTMENT_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleEditDepartmentModalReducer = (
  state: IEditDepartmentModal = { id: 0, isOpen: false },
  action: IToggleEditDepartmentModalAction
) => {
  switch (action.type) {
    case TOGGLE_EDIT_DEPARTMENT_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleDeleteDepartmentModalReducer = (
  state: IDeleteDepartmentModal = { id: 0, isOpen: false },
  action: IToggleDeleteDepartmentModalAction
) => {
  switch (action.type) {
    case TOGGLE_DELETE_DEPARTMENT_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
