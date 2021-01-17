// import types + interfaces for payloads
import { IDepartmentAction, IDeleteDepartment, IDeleteDepartmentAction, IDepartment } from "../../../interfaces/forms/departments.interfaces";
import { DELETE_DEPARTMENT, DEPARTMENT } from "./departments.types";

export const StoreDepartmentAction = (data: IDepartment): IDepartmentAction => {
  return { type: DEPARTMENT, payload: data };
};
export const DeleteDepartmentAction = (data: IDeleteDepartment): IDeleteDepartmentAction => {
  return { type: DELETE_DEPARTMENT, payload: data };
};