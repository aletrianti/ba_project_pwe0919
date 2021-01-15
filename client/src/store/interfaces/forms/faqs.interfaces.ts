export interface IFaqQuestion {
  question: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreFaqQuestionAction {
  type: string;
  payload: IFaqQuestion;
}

export interface IFaqAnswer {
  answer: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreFaqAnswerAction {
  type: string;
  payload: IFaqAnswer;
}

export interface IFaq {
  question: IFaqQuestion;
  answer: IFaqAnswer;
}
export interface IFaqAction {
  type: string;
  payload: IFaq;
}

export interface IDeleteFaq {
  id: number;
}
export interface IDeleteFaqAction {
  type: string;
  payload: IDeleteFaq;
}

// Modals
export interface IAddFaqModal {
  isOpen: boolean;
}
export interface IToggleAddFaqModalAction {
  type: string;
  payload: IAddFaqModal;
}

export interface IFaqModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditFaqModalAction {
  type: string;
  payload: IFaqModal;
}

export interface IDeleteFaqModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleDeleteFaqModalAction {
  type: string;
  payload: IDeleteFaqModal;
}
