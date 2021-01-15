export interface IAchievementTitle {
  title: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreAchievementTitleAction {
  type: string;
  payload: IAchievementTitle;
}

export interface IAchievementDescription {
  description: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreAchievementDescriptionAction {
  type: string;
  payload: IAchievementDescription;
}

export interface IAchievementDate {
  date: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreAchievementDateAction {
  type: string;
  payload: IAchievementDate;
}

export interface IEditAchievement {
  title: IAchievementTitle;
  description: IAchievementDescription;
  date: IAchievementDate;
}
export interface IEditAchievementAction {
  type: string;
  payload: IEditAchievement;
}

export interface IAchievementDate {
  date: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IAchievementDateAction {
  type: string;
  payload: IAchievementDate;
}

export interface IDeleteAchievement {
  id: number;
}
export interface IDeleteAchievementAction {
  type: string;
  payload: IDeleteAchievement; // id
}

// Modals
export interface IAddAchievementModal {
  isOpen: boolean;
}
export interface IToggleAddAchievementModalAction {
  type: string;
  payload: IAddAchievementModal;
}

export interface IEditAchievementModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditAchievementModalAction {
  type: string;
  payload: IEditAchievementModal;
}

export interface IDeleteAchievementModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleDeleteAchievementModalAction {
  type: string;
  payload: IDeleteAchievementModal;
}
