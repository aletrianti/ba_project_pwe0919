export interface ICategory {
  ID: number;
  name: string;
  companyId: number;
  createdBy: number;
  createAt: string;
  updatedAt: string;
}

export interface INewCategoryInput {
  name: string;
}
