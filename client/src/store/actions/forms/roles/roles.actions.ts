// import types + interfaces for payloads
import { IRoleTitle, IStoreRoleTitleAction, IRoleDescription, IStoreRoleDescriptionAction, IRoleResponsibility, IStoreRoleResponsibilityAction, IRoleResponsibilities, IStoreRoleResponsibilitiesAction, IRole, IRoleAction } from "../../../interfaces/forms/roles.interfaces";
import { STORE_ROLE_TITLE, STORE_ROLE_DESCRIPTION, STORE_ROLE_RESPONSIBILITY, STORE_ROLE_RESPONSIBILITIES, EDIT_ROLE } from "./roles.types";

// actions
export const StoreTitleAction = (data: IRoleTitle): IStoreRoleTitleAction => {
  return { type: STORE_ROLE_TITLE, payload: data };
};
export const StoreDescriptionAction = (data: IRoleDescription): IStoreRoleDescriptionAction => {
  return { type: STORE_ROLE_DESCRIPTION, payload: data };
};
export const StoreLastResponsibilityAction = (data: IRoleResponsibility): IStoreRoleResponsibilityAction => {
  return { type: STORE_ROLE_RESPONSIBILITY, payload: data };
};
export const StoreResponsibilitiesAction = (data: IRoleResponsibilities): IStoreRoleResponsibilitiesAction => {
  return { type: STORE_ROLE_RESPONSIBILITIES, payload: data };
};
export const EditROLEAction = (data: IRole): IRoleAction => {
  return { type: EDIT_ROLE, payload: data };
};
