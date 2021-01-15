// import types + interfaces for payloads
import { IAddAchievementModal, IToggleAddAchievementModalAction, IEditAchievementModal, IToggleEditAchievementModalAction, IDeleteAchievementModal, IToggleDeleteAchievementModalAction } from '../../interfaces/forms/achievements.interfaces';
import { IAddFaqModal, IToggleAddFaqModalAction, IEditFaqModal, IToggleEditFaqModalAction, IDeleteFaqModal, IToggleDeleteFaqModalAction } from '../../interfaces/forms/faqs.interfaces';
import {
  IAddUserModal,
  IDeleteUserModal,
  IEditUserModal,
  IToggleAddUserModalAction,
  IToggleDeleteUserModalAction,
  IToggleEditUserModalAction,
} from '../../interfaces/forms/users.interfaces';
import { TOGGLE_ADD_ACHIEVEMENT_MODAL, TOGGLE_ADD_FAQ_MODAL, TOGGLE_ADD_USER_MODAL, TOGGLE_DELETE_ACHIEVEMENT_MODAL, TOGGLE_DELETE_FAQ_MODAL, TOGGLE_DELETE_USER_MODAL, TOGGLE_EDIT_ACHIEVEMENT_MODAL, TOGGLE_EDIT_FAQ_MODAL, TOGGLE_EDIT_USER_MODAL } from './forms.types';

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
