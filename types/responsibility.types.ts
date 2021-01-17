export interface IResponsibility {
  ID: number;
  description: string;
  companyId: number;
  roleId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IResponsibilityInput {
  description: string;
  roleId: number;
}
