// Onboarding Tasks

export interface ITask {
  num: number;
  name: string;
  deadline: string;
  description: string;
  isCompleted: boolean;
  assignedTo: string; // optional only for now. TODO: add user to task
  role?: string;
}

export interface ISetTaskAsCompletedAction {
  type: string;
  payload: ITask;
}

export interface ISetCustomTaskAsCompletedAction {
  type: string;
  payload: ITask[];
}
