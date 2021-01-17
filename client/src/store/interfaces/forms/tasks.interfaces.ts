export interface ITaskName {
  name: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreTaskNameAction {
  type: string;
  payload: ITaskName;
}

export interface ITaskDescription {
  description: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreTaskDescriptionAction {
  type: string;
  payload: ITaskDescription;
}

export interface ITaskRole {
  role: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreTaskRoleAction {
  type: string;
  payload: ITaskRole;
}

export interface ITaskDeadline {
  deadline: string;
  isValid: boolean;
  errorMessage: string;
}
export interface IStoreTaskDeadlineAction {
  type: string;
  payload: ITaskDeadline;
}

export interface ITask {
  name: ITaskName;
  description: ITaskDescription;
  role: ITaskRole;
  deadline: ITaskDeadline;
}
export interface ITaskAction {
  type: string;
  payload: ITask;
}

export interface IDeleteTask {
  id: number;
}
export interface IDeleteTaskAction {
  type: string;
  payload: IDeleteTask;
}

// Modals
export interface IAddTaskModal {
  isOpen: boolean;
}
export interface IToggleAddTaskModalAction {
  type: string;
  payload: IAddTaskModal;
}

export interface IEditTaskModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleEditTaskModalAction {
  type: string;
  payload: IEditTaskModal;
}

export interface IDeleteTaskModal {
  isOpen: boolean;
  id: number;
}
export interface IToggleDeleteTaskModalAction {
  type: string;
  payload: IDeleteTaskModal;
}