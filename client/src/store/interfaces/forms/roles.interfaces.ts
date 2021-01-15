export interface IRoleTitle {
  title: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreRoleTitleAction {
  type: string;
  payload: IRoleTitle;
}

export interface IRoleDescription {
  description: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreRoleDescriptionAction {
  type: string;
  payload: IRoleDescription;
}

export interface IRoleResponsibility {
  responsibility: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreRoleResponsibilityAction {
  type: string;
  payload: IRoleResponsibility;
}

export interface IRoleResponsibilities {
  responsibilities: string[];
}
export interface IStoreRoleResponsibilitiesAction {
  type: string;
  payload: IRoleResponsibilities;
}

export interface IRole {
  title: IRoleTitle;
  description: IRoleDescription;
  responsibilities: IRoleResponsibilities;
}
export interface IRoleAction {
  type: string;
  payload: IRole;
}

export interface IDeleteRole {
  id: number;
}
export interface IDeleteRoleAction {
  type: string;
  payload: IDeleteRole;
}


// Modals
export interface IAddRoleModal {
  isOpen: boolean;
}
export interface IToggleAddRoleModalAction {
  type: string;
  payload: IAddRoleModal;
}

export interface IEditRoleModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditRoleModalAction {
  type: string;
  payload: IEditRoleModal;
}

export interface IDeleteRoleModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleDeleteRoleModalAction {
  type: string;
  payload: IDeleteRoleModal;
}
