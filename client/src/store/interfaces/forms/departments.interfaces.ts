export interface IDepartment {
  department: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IDepartmentAction {
  type: string;
  payload: IDepartment;
}

export interface IDeleteDepartment {
  id: number;
}
export interface IDeleteDepartmentAction {
  type: string;
  payload: IDeleteDepartment;
}

// Modals
export interface IAddDepartmentModal {
  isOpen: boolean;
}
export interface IToggleAddDepartmentModalAction {
  type: string;
  payload: IAddDepartmentModal;
}

export interface IEditDepartmentModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditDepartmentModalAction {
  type: string;
  payload: IEditDepartmentModal;
}

export interface IDeleteDepartmentModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleDeleteDepartmentModalAction {
  type: string;
  payload: IDeleteDepartmentModal;
}