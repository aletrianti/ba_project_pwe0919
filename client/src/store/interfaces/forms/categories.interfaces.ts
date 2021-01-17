export interface ICategory {
  category: string;
  isValid: boolean;
  errorMessage: string;
}
export interface ICategoryAction {
  type: string;
  payload: ICategory;
}

export interface IDeleteCategory {
  id: number;
}
export interface IDeleteCategoryAction {
  type: string;
  payload: IDeleteCategory;
}

// Modals
export interface IAddCategoryModal {
  isOpen: boolean;
}
export interface IToggleAddCategoryModalAction {
  type: string;
  payload: IAddCategoryModal;
}

export interface IEditCategoryModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditCategoryModalAction {
  type: string;
  payload: IEditCategoryModal;
}

export interface IDeleteCategoryModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleDeleteCategoryModalAction {
  type: string;
  payload: IDeleteCategoryModal;
}