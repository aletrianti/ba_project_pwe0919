import { TOGGLE_ADD_TASK_MODAL, TOGGLE_EDIT_TASK_MODAL, TOGGLE_DELETE_TASK_MODAL } from "../../actions/forms/forms.types";
import { STORE_TASK_NAME, STORE_TASK_DESCRIPTION, STORE_TASK_ROLE, STORE_TASK_DEADLINE, TASK, DELETE_TASK } from "../../actions/forms/tasks/tasks.types";
import { ITask, ITaskName, IStoreTaskNameAction, ITaskDescription, IStoreTaskDescriptionAction, ITaskRole, IStoreTaskRoleAction, ITaskDeadline, IStoreTaskDeadlineAction, ITaskAction, IDeleteTask, IDeleteTaskAction, IAddTaskModal, IToggleAddTaskModalAction, IEditTaskModal, IToggleEditTaskModalAction, IDeleteTaskModal, IToggleDeleteTaskModalAction } from "../../interfaces/forms/tasks.interfaces";

// create reducers
export const storeTaskNameReducer = (
  state: ITaskName = { name: '', isValid: false, errorMessage: '' },
  action: IStoreTaskNameAction
) => {
  switch (action.type) {
    case STORE_TASK_NAME:
      return {
        ...state,
        name: action.payload.name,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeTaskDescriptionReducer = (
  state: ITaskDescription = { description: '', isValid: false, errorMessage: '' },
  action: IStoreTaskDescriptionAction
) => {
  switch (action.type) {
    case STORE_TASK_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeTaskRoleReducer = (
  state: ITaskRole = { role: '', isValid: false, errorMessage: '' },
  action: IStoreTaskRoleAction
) => {
  switch (action.type) {
    case STORE_TASK_ROLE:
      return {
        ...state,
        role: action.payload.role,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const storeTaskDeadlineReducer = (
  state: ITaskDeadline = { deadline: '', isValid: false, errorMessage: '' },
  action: IStoreTaskDeadlineAction
) => {
  switch (action.type) {
    case STORE_TASK_DEADLINE:
      return {
        ...state,
        deadline: action.payload.deadline,
        isValid: action.payload.isValid,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export const taskReducer = (
  state: ITask = {
    name: { name: '', isValid: false, errorMessage: '' },
    description: { description: '', isValid: false, errorMessage: '' }, 
    role: { role: '', isValid: false, errorMessage: '' }, 
    deadline: { deadline: '', isValid: false, errorMessage: '' }, 
  },
  action: ITaskAction
) => {
  switch (action.type) {
    case TASK:
      return {
        ...state,
        name: action.payload.name,
        description: action.payload.description,
        role: action.payload.role,
        deadline: action.payload.deadline,
      };
    default:
      return state;
  }
};

export const deleteTaskReducer = (
  state: IDeleteTask = {
    id: 0,
  },
  action: IDeleteTaskAction
) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

// Modals
export const toggleAddTaskModalReducer = (state: IAddTaskModal = { isOpen: false }, action: IToggleAddTaskModalAction) => {
  switch (action.type) {
    case TOGGLE_ADD_TASK_MODAL:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleEditTaskModalReducer = (
  state: IEditTaskModal = { id: 0, isOpen: false },
  action: IToggleEditTaskModalAction
) => {
  switch (action.type) {
    case TOGGLE_EDIT_TASK_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
export const toggleDeleteTaskModalReducer = (
  state: IDeleteTaskModal = { id: 0, isOpen: false },
  action: IToggleDeleteTaskModalAction
) => {
  switch (action.type) {
    case TOGGLE_DELETE_TASK_MODAL:
      return {
        ...state,
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
