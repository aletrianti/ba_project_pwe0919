export interface ICompanyTask {
  ID: number;
  taskID: number;
  companyID: number;
  deadline: string;
  updatedAt?: string;
}

export interface ICompanyTaskInput {
  taskId: number;
  deadline: string;
}
