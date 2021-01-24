import {
  SET_TASK_ONE,
  SET_TASK_TWO,
  SET_TASK_THREE,
  SET_TASK_FOUR,
  SET_TASK_FIVE,
} from '../actions/tasks/tasks.types';
import { ITask, ISetTask, ISetCustomTask, ICustomTasks } from '../interfaces/tasks.interfaces';

// create reducers
// no dispatching is needed to store Tasks themselves, as the only property that changes it "isCompleted"
// Tasks will be added directly as default state
export const storeTaskOneReducer = (
  state: ITask = {
    num: 1,
    name: 'Complete your profile ',
    deadline: 'within 1 day',
    description:
      'On the top-right corner, you will find your name and profile picture: click there to go to your profile. Once you’re there, go to the “Settings” section and complete your profile to get started!',
    isCompleted: false,
    assignedTo: '',
  },
  action: ISetTask
) => {
  switch (action.type) {
    case SET_TASK_ONE:
      return {
        ...state,
        num: action.payload.num,
        name: action.payload.name,
        deadline: action.payload.deadline,
        description: action.payload.description,
        isCompleted: action.payload.isCompleted,
        assignedTo: action.payload.assignedTo,
      };
    default:
      return state;
  }
};

export const storeTaskTwoReducer = (
  state: ITask = {
    num: 2,
    name: 'Say hi to your buddy ',
    deadline: 'within 1 day',
    description:
      'On the right side, you will find the name of a fellow team member under the “Buddy” category.  That person has been assigned to you to help you integrate into the company: you can ask them for help at any time during your onboarding process, and they will be right there to help you. Start by presenting yourself to them!',
    isCompleted: false,
    assignedTo: '',
  },
  action: ISetTask
) => {
  switch (action.type) {
    case SET_TASK_TWO:
      return {
        ...state,
        num: action.payload.num,
        name: action.payload.name,
        deadline: action.payload.deadline,
        description: action.payload.description,
        isCompleted: action.payload.isCompleted,
        assignedTo: action.payload.assignedTo,
      };
    default:
      return state;
  }
};

export const storeTaskThreeReducer = (
  state: ITask = {
    num: 3,
    name: 'Get to know your new company ',
    deadline: 'within 2 days',
    description:
      'In the “Company & Team” section, you will find your team members and some information about your company, such as roles and responsibilities, and achievements. Take some time to explore this section and don’t hesitate to ask for more information to your buddy!',
    isCompleted: false,
    assignedTo: '',
  },
  action: ISetTask
) => {
  switch (action.type) {
    case SET_TASK_THREE:
      return {
        ...state,
        num: action.payload.num,
        name: action.payload.name,
        deadline: action.payload.deadline,
        description: action.payload.description,
        isCompleted: action.payload.isCompleted,
        assignedTo: action.payload.assignedTo,
      };
    default:
      return state;
  }
};

export const storeTaskFourReducer = (
  state: ITask = {
    num: 4,
    name: 'Read documents ',
    deadline: 'within 4 days',
    description:
      'In the “Documents” section, you will find files under some categories. Take your time to go through them and, when you’re done reading a file, check the corresponding “Read” box. Have fun learning!',
    isCompleted: false,
    assignedTo: '',
  },
  action: ISetTask
) => {
  switch (action.type) {
    case SET_TASK_FOUR:
      return {
        ...state,
        num: action.payload.num,
        name: action.payload.name,
        deadline: action.payload.deadline,
        description: action.payload.description,
        isCompleted: action.payload.isCompleted,
        assignedTo: action.payload.assignedTo,
      };
    default:
      return state;
  }
};

export const storeTaskFiveReducer = (state: ICustomTasks = { customTasks: [] }, action: ISetCustomTask) => {
  switch (action.type) {
    case SET_TASK_FIVE:
      return {
        ...state,
        customTasks: action.payload.customTasks,
      };
    default:
      return state;
  }
};
