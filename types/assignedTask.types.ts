export interface IAssignedTaskInput {
  taskId: number;
  completed: boolean;
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
