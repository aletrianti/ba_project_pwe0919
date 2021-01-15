import { STORE_ACHIEVEMENT_TITLE, STORE_ACHIEVEMENT_DESCRIPTION, STORE_ACHIEVEMENT_DATE, EDIT_ACHIEVEMENT, DELETE_ACHIEVEMENT } from "../../actions/forms/achievements/achievements.types";
import { TOGGLE_ADD_ACHIEVEMENT_MODAL, TOGGLE_EDIT_ACHIEVEMENT_MODAL, TOGGLE_DELETE_ACHIEVEMENT_MODAL } from "../../actions/forms/forms.types";
import { IAchievementTitle, IStoreAchievementTitleAction, IAchievementDescription, IStoreAchievementDescriptionAction, IAchievementDate, IStoreAchievementDateAction, IEditAchievement, IEditAchievementAction, IDeleteAchievement, IDeleteAchievementAction, IAddAchievementModal, IToggleAddAchievementModalAction, IEditAchievementModal, IToggleEditAchievementModalAction, IDeleteAchievementModal, IToggleDeleteAchievementModalAction } from "../../interfaces/forms/achievements.interfaces";


// create reducers
export const storeAchievementTitleReducer = (
  state: IAchievementTitle = { title: '', isValid: false, errorMessage: '' },
  action: IStoreAchievementTitleAction
) => {
  switch (action.type) {
    case STORE_ACHIEVEMENT_TITLE:
      return {
        ...state,
        title: action.payload.title,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeAchievementDescriptionReducer = (
  state: IAchievementDescription = { description: '', isValid: false, errorMessage: '' },
  action: IStoreAchievementDescriptionAction
) => {
  switch (action.type) {
    case STORE_ACHIEVEMENT_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeAchievementDateReducer = (
  state: IAchievementDate = { date: '', isValid: false, errorMessage: '' },
  action: IStoreAchievementDateAction
) => {
  switch (action.type) {
    case STORE_ACHIEVEMENT_DATE:
      return {
        ...state,
        date: action.payload.date,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const editAchievementReducer = (
  state: IEditAchievement = {
    title: { title: '', isValid: false, errorMessage: '' },
    description: { description: '', isValid: false, errorMessage: '' },
    date: { date: '', isValid: false, errorMessage: '' },
  },
  action: IEditAchievementAction
) => {
  switch (action.type) {
    case EDIT_ACHIEVEMENT:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
      };
    default:
      return state;
  }
};

export const deleteAchievementReducer = (
  state: IDeleteAchievement = {
    id: 0,
  },
  action: IDeleteAchievementAction
) => {
  switch (action.type) {
    case DELETE_ACHIEVEMENT:
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export const toggleAddAchievementModalReducer = (state: IAddAchievementModal = { isOpen: false }, action: IToggleAddAchievementModalAction) => {
  switch (action.type) {
    case TOGGLE_ADD_ACHIEVEMENT_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleEditAchievementModalReducer = (
  state: IEditAchievementModal = { id: 0, isOpen: false },
  action: IToggleEditAchievementModalAction
) => {
  switch (action.type) {
    case TOGGLE_EDIT_ACHIEVEMENT_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleDeleteAchievementModalReducer = (
  state: IDeleteAchievementModal = { id: 0, isOpen: false },
  action: IToggleDeleteAchievementModalAction
) => {
  switch (action.type) {
    case TOGGLE_DELETE_ACHIEVEMENT_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
