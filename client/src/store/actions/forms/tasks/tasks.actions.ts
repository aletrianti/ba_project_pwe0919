// import types + interfaces for payloads
import { ITask, ITaskName, IStoreTaskNameAction, ITaskDescription, IStoreTaskDescriptionAction, ITaskRole, IStoreTaskRoleAction, ITaskDeadline, IStoreTaskDeadlineAction, ITaskAction, IDeleteTask, IDeleteTaskAction } from "../../../interfaces/forms/tasks.interfaces";
import { STORE_TASK_NAME, STORE_TASK_DESCRIPTION, STORE_TASK_ROLE, STORE_TASK_DEADLINE, TASK, DELETE_TASK } from "./tasks.types";

export const StoreNameAction = (data: ITaskName): IStoreTaskNameAction => {
  return { type: STORE_TASK_NAME, payload: data };
};
export const StoreDescriptionAction = (data: ITaskDescription): IStoreTaskDescriptionAction => {
  return { type: STORE_TASK_DESCRIPTION, payload: data };
};
export const StoreRoleAction = (data: ITaskRole): IStoreTaskRoleAction => {
  return { type: STORE_TASK_ROLE, payload: data };
};
export const StoreDeadlineAction = (data: ITaskDeadline): IStoreTaskDeadlineAction => {
  return { type: STORE_TASK_DEADLINE, payload: data };
};
export const StoreTaskAction = (data: ITask): ITaskAction => {
  return { type: TASK, payload: data };
};
export const DeleteTaskAction = (data: IDeleteTask): IDeleteTaskAction => {
  return { type: DELETE_TASK, payload: data };
};
