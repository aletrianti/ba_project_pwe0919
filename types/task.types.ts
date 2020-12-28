export interface ITask {
  ID: number;
  name: string;
  description: string;
}

export interface IAssignedTask {
  ID: number;
  taskId: number;
  userId: number;
  completed: boolean;
  finishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICompanyTask {
  ID: number;
  taskId: number;
  companyId: number;
  deadline: string;
  updatedAt: string;
}

export interface IUserTask {
  userId: number;
  taskName: string;
  taskDescription: string;
  deadline: string;
  completed: boolean;
}

export interface ITaskAssignedToCompanyInput {
  taskId: number
  deadline: string;
}
