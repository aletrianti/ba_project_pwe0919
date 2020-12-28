export interface IDepartment {
  ID: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface INewDepartmentInput {
  name: string;
}
