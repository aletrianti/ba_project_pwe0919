// Forms interfaces

import { IOptions } from './selectOptions.interfaces';

export interface IField {
  name: string;
  type: string; // ex. "input" or "textarea"
  onchange: any;
  value?: string;
  options?: IOptions;
}

export interface IAddUserModal {
  isOpen: boolean;
}
export interface IToggleAddUserModalAction {
  type: string;
  payload: IAddUserModal;
}

export interface IEditUserModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditUserModalAction {
  type: string;
  payload: IEditUserModal;
}

export interface IDeleteUserModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleDeleteUserModalAction {
  type: string;
  payload: IDeleteUserModal;
}
