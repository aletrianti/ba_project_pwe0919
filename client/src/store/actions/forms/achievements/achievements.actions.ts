// import types + interfaces for payloads
import { IAchievementTitle, IAchievementDescription, IAchievementDate, IAchievement, IAchievementAction, IDeleteAchievement, IDeleteAchievementAction, IStoreAchievementDateAction, IStoreAchievementDescriptionAction, IStoreAchievementTitleAction } from "../../../interfaces/forms/achievements.interfaces";
import { DELETE_ACHIEVEMENT, ACHIEVEMENT, STORE_ACHIEVEMENT_DATE, STORE_ACHIEVEMENT_DESCRIPTION, STORE_ACHIEVEMENT_TITLE } from "./achievements.types";

// actions
export const StoreTitleAction = (data: IAchievementTitle): IStoreAchievementTitleAction => {
  return { type: STORE_ACHIEVEMENT_TITLE, payload: data };
};
export const StoreDescriptionAction = (data: IAchievementDescription): IStoreAchievementDescriptionAction => {
  return { type: STORE_ACHIEVEMENT_DESCRIPTION, payload: data };
};
export const StoreDateAction = (data: IAchievementDate): IStoreAchievementDateAction => {
  return { type: STORE_ACHIEVEMENT_DATE, payload: data };
};
export const StoreAchievementAction = (data: IAchievement): IAchievementAction => {
  return { type: ACHIEVEMENT, payload: data };
};
export const DeleteAchievementAction = (data: IDeleteAchievement): IDeleteAchievementAction => {
  return { type: DELETE_ACHIEVEMENT, payload: data };
};