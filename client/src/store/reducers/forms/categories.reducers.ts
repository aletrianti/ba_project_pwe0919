import { CATEGORY, DELETE_CATEGORY } from "../../actions/forms/categories/categories.types";
import { TOGGLE_ADD_CATEGORY_MODAL, TOGGLE_EDIT_CATEGORY_MODAL, TOGGLE_DELETE_CATEGORY_MODAL } from "../../actions/forms/forms.types";
import { ICategory, ICategoryAction, IDeleteCategory, IDeleteCategoryAction, IAddCategoryModal, IToggleAddCategoryModalAction, IToggleEditCategoryModalAction, IDeleteCategoryModal, IToggleDeleteCategoryModalAction, IEditCategoryModal } from "../../interfaces/forms/categories.interfaces";

// create reducers
export const categoryReducer = (
  state: ICategory = { category: '', isValid: false, errorMessage: '' },
  action: ICategoryAction
) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        category: action.payload.category,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const deleteCategoryReducer = (
  state: IDeleteCategory = { id: 0 },
  action: IDeleteCategoryAction
) => {
  switch (action.type) {
    case DELETE_CATEGORY:
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export const toggleAddCategoryModalReducer = (state: IAddCategoryModal = { isOpen: false }, action: IToggleAddCategoryModalAction) => {
  switch (action.type) {
    case TOGGLE_ADD_CATEGORY_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleEditCategoryModalReducer = (
  state: IEditCategoryModal = { id: 0, isOpen: false },
  action: IToggleEditCategoryModalAction
) => {
  switch (action.type) {
    case TOGGLE_EDIT_CATEGORY_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleDeleteCategoryModalReducer = (
  state: IDeleteCategoryModal = { id: 0, isOpen: false },
  action: IToggleDeleteCategoryModalAction
) => {
  switch (action.type) {
    case TOGGLE_DELETE_CATEGORY_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
