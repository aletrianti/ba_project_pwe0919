export interface IRole {
  ID: number;
  title: string;
  companyId: number;
  createdAt: string;
  updatedAt: string;
}

export interface INewRoleInput {
  title: string;
}
