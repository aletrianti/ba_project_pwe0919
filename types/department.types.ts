export interface IDepartment {
  ID: number;
  name: string;
  companyID: number;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
}

export interface INewDepartmentInput {
  name: string;
}

export interface IDepartmentTable {
  value: number;
  label: string;
}
