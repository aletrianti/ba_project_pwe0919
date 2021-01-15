// import types + interfaces for payloads
import { IFaqQuestion, IStoreFaqQuestionAction, IFaqAnswer, IStoreFaqAnswerAction, IFaq, IFaqAction, IDeleteFaq, IDeleteFaqAction } from "../../../interfaces/forms/faqs.interfaces";
import { STORE_FAQ_QUESTION, STORE_FAQ_ANSWER, FAQ, DELETE_FAQ } from "./faqs.types";

export const StoreQuestionAction = (data: IFaqQuestion): IStoreFaqQuestionAction => {
  return { type: STORE_FAQ_QUESTION, payload: data };
};
export const StoreAnswerAction = (data: IFaqAnswer): IStoreFaqAnswerAction => {
  return { type: STORE_FAQ_ANSWER, payload: data };
};
export const StoreFaqAction = (data: IFaq): IFaqAction => {
  return { type: FAQ, payload: data };
};
export const DeleteFaqAction = (data: IDeleteFaq): IDeleteFaqAction => {
  return { type: DELETE_FAQ, payload: data };
};
