export interface IFaq {
  ID: number;
  question: string;
  answer: string;
  companyId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IFAQInput {
  question: string;
  answer: string;
}
export interface IFAQUpdate {
  ID: number;
  body: {
    question: string;
    answer: string;
  };
}
