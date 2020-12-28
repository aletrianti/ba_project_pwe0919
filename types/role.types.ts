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
}

export interface INewRoleInput {
  title: string;
  customTaskName: string;
  customTaskDescription: string;
}
