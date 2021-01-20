export interface ICategory {
  ID: number;
  name: string;
  companyId: number;
  createdBy: number;
  createAt: string;
  updatedAt: string;
  deleted: boolean;
}

export interface INewCategoryInput {
  name: string;
}

export interface ICategoryUpdate {
  ID: number;
  body: {
    name: string;
  };
}
