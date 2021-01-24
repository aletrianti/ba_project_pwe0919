// import types + interfaces for payloads
import { SET_TASK_ONE, SET_TASK_TWO, SET_TASK_THREE, SET_TASK_FOUR, SET_TASK_FIVE } from './tasks.types';
import { ITask, ISetTask, ISetCustomTask, ICustomTasks } from '../../interfaces/tasks.interfaces';

// actions
export const setTaskOne = (data: ITask): ISetTask => {
  return { type: SET_TASK_ONE, payload: data };
};

export const setTaskTwo = (data: ITask): ISetTask => {
  return { type: SET_TASK_TWO, payload: data };
};

export const setTaskThree = (data: ITask): ISetTask => {
  return { type: SET_TASK_THREE, payload: data };
};

export const setTaskFour = (data: ITask): ISetTask => {
  return { type: SET_TASK_FOUR, payload: data };
};

export const setCustomTask = (data: ICustomTasks): ISetCustomTask => {
  return { type: SET_TASK_FIVE, payload: data };
};
