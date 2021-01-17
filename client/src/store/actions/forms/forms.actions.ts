// import types + interfaces for payloads
import { IAddAchievementModal, IToggleAddAchievementModalAction, IToggleEditAchievementModalAction, IDeleteAchievementModal, IToggleDeleteAchievementModalAction, IEditAchievementModal } from '../../interfaces/forms/achievements.interfaces';
import { IAddCategoryModal, IToggleAddCategoryModalAction, IToggleEditCategoryModalAction, IDeleteCategoryModal, IToggleDeleteCategoryModalAction, IEditCategoryModal } from '../../interfaces/forms/categories.interfaces';
import { IAddDepartmentModal, IToggleAddDepartmentModalAction, IToggleEditDepartmentModalAction, IDeleteDepartmentModal, IToggleDeleteDepartmentModalAction, IEditDepartmentModal } from '../../interfaces/forms/departments.interfaces';
import { IAddFaqModal, IToggleAddFaqModalAction, IToggleEditFaqModalAction, IDeleteFaqModal, IToggleDeleteFaqModalAction, IEditFaqModal } from '../../interfaces/forms/faqs.interfaces';
import { IEditProfileModal, IToggleEditProfileModalAction } from '../../interfaces/forms/profile.interfaces';
import { IAddRoleModal, IToggleAddRoleModalAction, IEditRoleModal, IToggleEditRoleModalAction, IDeleteRoleModal, IToggleDeleteRoleModalAction } from '../../interfaces/forms/roles.interfaces';
import { IAddTaskModal, IToggleAddTaskModalAction, IEditTaskModal, IToggleEditTaskModalAction, IDeleteTaskModal, IToggleDeleteTaskModalAction } from '../../interfaces/forms/tasks.interfaces';
import {
  IAddUserModal,
  IDeleteUserModal,
  IEditUserModal,
  IToggleAddUserModalAction,
  IToggleDeleteUserModalAction,
  IToggleEditUserModalAction,
} from '../../interfaces/forms/users.interfaces';
import { TOGGLE_ADD_ACHIEVEMENT_MODAL, TOGGLE_ADD_CATEGORY_MODAL, TOGGLE_ADD_DEPARTMENT_MODAL, TOGGLE_ADD_FAQ_MODAL, TOGGLE_ADD_ROLE_MODAL, TOGGLE_ADD_TASK_MODAL, TOGGLE_ADD_USER_MODAL, TOGGLE_DELETE_ACHIEVEMENT_MODAL, TOGGLE_DELETE_CATEGORY_MODAL, TOGGLE_DELETE_DEPARTMENT_MODAL, TOGGLE_DELETE_FAQ_MODAL, TOGGLE_DELETE_ROLE_MODAL, TOGGLE_DELETE_TASK_MODAL, TOGGLE_DELETE_USER_MODAL, TOGGLE_EDIT_ACHIEVEMENT_MODAL, TOGGLE_EDIT_CATEGORY_MODAL, TOGGLE_EDIT_DEPARTMENT_MODAL, TOGGLE_EDIT_FAQ_MODAL, TOGGLE_EDIT_PROFILE_MODAL, TOGGLE_EDIT_ROLE_MODAL, TOGGLE_EDIT_TASK_MODAL, TOGGLE_EDIT_USER_MODAL } from './forms.types';

// actions
export const ToggleAddUserModalAction = (data: IAddUserModal): IToggleAddUserModalAction => {
  return { type: TOGGLE_ADD_USER_MODAL, payload: data };
};
export const ToggleEditUserModalAction = (data: IEditUserModal): IToggleEditUserModalAction => {
  return { type: TOGGLE_EDIT_USER_MODAL, payload: data };
};
export const ToggleDeleteUserModalAction = (data: IDeleteUserModal): IToggleDeleteUserModalAction => {
  return { type: TOGGLE_DELETE_USER_MODAL, payload: data };
};

export const ToggleAddAchievementModalAction = (data: IAddAchievementModal): IToggleAddAchievementModalAction => {
  return { type: TOGGLE_ADD_ACHIEVEMENT_MODAL, payload: data };
};
export const ToggleEditAchievementModalAction = (data: IEditAchievementModal): IToggleEditAchievementModalAction => {
  return { type: TOGGLE_EDIT_ACHIEVEMENT_MODAL, payload: data };
};
export const ToggleDeleteAchievementModalAction = (data: IDeleteAchievementModal): IToggleDeleteAchievementModalAction => {
  return { type: TOGGLE_DELETE_ACHIEVEMENT_MODAL, payload: data };
};

export const ToggleAddFaqModalAction = (data: IAddFaqModal): IToggleAddFaqModalAction => {
  return { type: TOGGLE_ADD_FAQ_MODAL, payload: data };
};
export const ToggleEditFaqModalAction = (data: IEditFaqModal): IToggleEditFaqModalAction => {
  return { type: TOGGLE_EDIT_FAQ_MODAL, payload: data };
};
export const ToggleDeleteFaqModalAction = (data: IDeleteFaqModal): IToggleDeleteFaqModalAction => {
  return { type: TOGGLE_DELETE_FAQ_MODAL, payload: data };
};

export const ToggleAddRoleModalAction = (data: IAddRoleModal): IToggleAddRoleModalAction => {
  return { type: TOGGLE_ADD_ROLE_MODAL, payload: data };
};
export const ToggleEditRoleModalAction = (data: IEditRoleModal): IToggleEditRoleModalAction => {
  return { type: TOGGLE_EDIT_ROLE_MODAL, payload: data };
};
export const ToggleDeleteRoleModalAction = (data: IDeleteRoleModal): IToggleDeleteRoleModalAction => {
  return { type: TOGGLE_DELETE_ROLE_MODAL, payload: data };
};

export const ToggleAddCategoryModalAction = (data: IAddCategoryModal): IToggleAddCategoryModalAction => {
  return { type: TOGGLE_ADD_CATEGORY_MODAL, payload: data };
};
export const ToggleEditCategoryModalAction = (data: IEditCategoryModal): IToggleEditCategoryModalAction => {
  return { type: TOGGLE_EDIT_CATEGORY_MODAL, payload: data };
};
export const ToggleDeleteCategoryModalAction = (data: IDeleteCategoryModal): IToggleDeleteCategoryModalAction => {
  return { type: TOGGLE_DELETE_CATEGORY_MODAL, payload: data };
};

export const ToggleAddDepartmentModalAction = (data: IAddDepartmentModal): IToggleAddDepartmentModalAction => {
  return { type: TOGGLE_ADD_DEPARTMENT_MODAL, payload: data };
};
export const ToggleEditDepartmentModalAction = (data: IEditDepartmentModal): IToggleEditDepartmentModalAction => {
  return { type: TOGGLE_EDIT_DEPARTMENT_MODAL, payload: data };
};
export const ToggleDeleteDepartmentModalAction = (data: IDeleteDepartmentModal): IToggleDeleteDepartmentModalAction => {
  return { type: TOGGLE_DELETE_DEPARTMENT_MODAL, payload: data };
};

export const ToggleAddTaskModalAction = (data: IAddTaskModal): IToggleAddTaskModalAction => {
  return { type: TOGGLE_ADD_TASK_MODAL, payload: data };
};
export const ToggleEditTaskModalAction = (data: IEditTaskModal): IToggleEditTaskModalAction => {
  return { type: TOGGLE_EDIT_TASK_MODAL, payload: data };
};
export const ToggleDeleteTaskModalAction = (data: IDeleteTaskModal): IToggleDeleteTaskModalAction => {
  return { type: TOGGLE_DELETE_TASK_MODAL, payload: data };
};

export const ToggleEditProfileModalAction = (data: IEditProfileModal): IToggleEditProfileModalAction => {
  return { type: TOGGLE_EDIT_PROFILE_MODAL, payload: data };
};
