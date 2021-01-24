export interface IRole {
  ID: number;
  title: string;
  description: string;
  example: string;
  customTaskName: string;
  customTaskDescription: string;
  companyId: number;
  createdAt: string;
  updatedAt: string;
  deleted: boolean;
}

export interface INewRoleInput {
  title: string;
}

export interface IRoleTable {
  label: string;
  value: number;
}
