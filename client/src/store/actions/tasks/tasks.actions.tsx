// import types + interfaces for payloads
import {
  SET_TASK_ONE_AS_COMPLETED,
  SET_TASK_TWO_AS_COMPLETED,
  SET_TASK_THREE_AS_COMPLETED,
  SET_TASK_FOUR_AS_COMPLETED,
  SET_TASK_FIVE_AS_COMPLETED,
} from './tasks.types';
import {
  ITask,
  ISetTaskAsCompletedAction,
  ISetCustomTaskAsCompletedAction,
  ICustomTasks,
} from '../../interfaces/tasks.interfaces';

// actions
export const setTaskOneAsCompletedAction = (data: ITask): ISetTaskAsCompletedAction => {
  return { type: SET_TASK_ONE_AS_COMPLETED, payload: data };
};

export const setTaskTwoAsCompletedAction = (data: ITask): ISetTaskAsCompletedAction => {
  return { type: SET_TASK_TWO_AS_COMPLETED, payload: data };
};

export const setTaskThreeAsCompletedAction = (data: ITask): ISetTaskAsCompletedAction => {
  return { type: SET_TASK_THREE_AS_COMPLETED, payload: data };
};

export const setTaskFourAsCompletedAction = (data: ITask): ISetTaskAsCompletedAction => {
  return { type: SET_TASK_FOUR_AS_COMPLETED, payload: data };
};

export const setCustomTaskAsCompletedAction = (data: ICustomTasks): ISetCustomTaskAsCompletedAction => {
  return { type: SET_TASK_FIVE_AS_COMPLETED, payload: data };
};
