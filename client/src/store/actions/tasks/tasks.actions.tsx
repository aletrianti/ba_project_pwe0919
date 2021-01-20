// import types + interfaces for payloads
import {
  SET_TASK_ONE_AS_COMPLETED,
  SET_TASK_TWO_AS_COMPLETED,
  SET_TASK_THREE_AS_COMPLETED,
  SET_TASK_FOUR_AS_COMPLETED,
  SET_TASK_FIVE_AS_COMPLETED,
} from './tasks.types';
import { ITask, ISetTask, ISetCustomTask, ICustomTasks } from '../../interfaces/tasks.interfaces';

// actions
export const setTaskOne = (data: ITask): ISetTask => {
  return { type: SET_TASK_ONE_AS_COMPLETED, payload: data };
};

export const setTaskTwo = (data: ITask): ISetTask => {
  return { type: SET_TASK_TWO_AS_COMPLETED, payload: data };
};

export const setTaskThree = (data: ITask): ISetTask => {
  return { type: SET_TASK_THREE_AS_COMPLETED, payload: data };
};

export const setTaskFour = (data: ITask): ISetTask => {
  return { type: SET_TASK_FOUR_AS_COMPLETED, payload: data };
};

export const setCustomTask = (data: ICustomTasks): ISetCustomTask => {
  return { type: SET_TASK_FIVE_AS_COMPLETED, payload: data };
};
