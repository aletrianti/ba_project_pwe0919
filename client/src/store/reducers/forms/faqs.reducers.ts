import { STORE_FAQ_QUESTION, STORE_FAQ_ANSWER, EDIT_FAQ, DELETE_FAQ } from "../../actions/forms/faqs/faqs.types";
import { TOGGLE_ADD_FAQ_MODAL, TOGGLE_EDIT_FAQ_MODAL, TOGGLE_DELETE_FAQ_MODAL } from "../../actions/forms/forms.types";
import { IFaqQuestion, IStoreFaqQuestionAction, IFaqAnswer, IStoreFaqAnswerAction, IFaq, IFaqAction, IDeleteFaq, IDeleteFaqAction, IAddFaqModal, IToggleAddFaqModalAction, IFaqModal, IToggleEditFaqModalAction, IDeleteFaqModal, IToggleDeleteFaqModalAction } from "../../interfaces/forms/faqs.interfaces";

// create reducers
export const storeFaqQuestionReducer = (
  state: IFaqQuestion = { question: '', isValid: false, errorMessage: '' },
  action: IStoreFaqQuestionAction
) => {
  switch (action.type) {
    case STORE_FAQ_QUESTION:
      return {
        ...state,
        question: action.payload.question,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export const storeFaqAnswerReducer = (
  state: IFaqAnswer = { answer: '', isValid: false, errorMessage: '' },
  action: IStoreFaqAnswerAction
) => {
  switch (action.type) {
    case STORE_FAQ_ANSWER:
      return {
        ...state,
        answer: action.payload.answer,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const faqReducer = (
  state: IFaq = {
    question: { question: '', isValid: false, errorMessage: '' },
    answer: { answer: '', isValid: false, errorMessage: '' }, 
  },
  action: IFaqAction
) => {
  switch (action.type) {
    case EDIT_FAQ:
      return {
        ...state,
        question: action.payload.question,
        answer: action.payload.answer,
      };
    default:
      return state;
  }
};

export const deleteFaqReducer = (
  state: IDeleteFaq = {
    id: 0,
  },
  action: IDeleteFaqAction
) => {
  switch (action.type) {
    case DELETE_FAQ:
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export const toggleAddFaqModalReducer = (state: IAddFaqModal = { isOpen: false }, action: IToggleAddFaqModalAction) => {
  switch (action.type) {
    case TOGGLE_ADD_FAQ_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleEditFaqModalReducer = (
  state: IFaqModal = { id: 0, isOpen: false },
  action: IToggleEditFaqModalAction
) => {
  switch (action.type) {
    case TOGGLE_EDIT_FAQ_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleDeleteFaqModalReducer = (
  state: IDeleteFaqModal = { id: 0, isOpen: false },
  action: IToggleDeleteFaqModalAction
) => {
  switch (action.type) {
    case TOGGLE_DELETE_FAQ_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
