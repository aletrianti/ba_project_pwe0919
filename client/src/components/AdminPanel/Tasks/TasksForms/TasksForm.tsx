import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleAddTaskModalAction, ToggleEditTaskModalAction } from '../../../../store/actions/forms/forms.actions';
import {
  StoreDescriptionAction,
  StoreTaskAction,
  StoreNameAction,
  StoreDeadlineAction,
  StoreRoleAction,
} from '../../../../store/actions/forms/tasks/tasks.actions';
import {
  IAddTaskModal,
  ITaskName,
  ITaskDescription,
  IEditTaskModal,
  ITask,
  ITaskDeadline,
  ITaskRole,
} from '../../../../store/interfaces/forms/tasks.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';
import { setCustomTaskAsCompletedAction } from '../../../../store/actions/tasks/tasks.actions';
import { ICustomTasks, ITask as IITask } from '../../../../store/interfaces/tasks.interfaces';

interface TasksFormsProps {
  taskName: ITaskName;
  taskDescription: ITaskDescription;
  taskRole: ITaskRole;
  taskDeadline: ITaskDeadline;
  task: ITask;
  addTaskModal: IAddTaskModal;
  editTaskModal: IEditTaskModal;
  taskFive: ICustomTasks;
  storeTaskName: (taskName: ITaskName) => any;
  storeTaskDescription: (taskDescription: ITaskDescription) => any;
  storeTaskRole: (taskRole: ITaskRole) => any;
  storeTaskDeadline: (taskDeadline: ITaskDeadline) => any;
  storeTask: (task: ITask) => any;
  toggleAddTaskModal: (addTaskModal: IAddTaskModal) => any;
  toggleEditTaskModal: (editTaskModal: IEditTaskModal) => any;
  setTaskFive: (taskFive: ICustomTasks) => any;
}

interface TasksFormsState {
  areFieldsValid: ICheckFields;
}

class TasksForms extends React.Component<TasksFormsProps, TasksFormsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
    };
  }

  // Actions
  closeAddTaskModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleAddTaskModal({ isOpen: false });

    this.props.storeTaskName({ name: '', isValid: false, errorMessage: '' });
    this.props.storeTaskDescription({ description: '', isValid: false, errorMessage: '' });
    this.props.storeTaskRole({ role: '', isValid: false, errorMessage: '' });
    this.props.storeTaskDeadline({ deadline: '', isValid: false, errorMessage: '' });
  };
  closeEditTaskModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleEditTaskModal({ id: 0, isOpen: false });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['taskName', 'taskDescription'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeName = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeTaskName({ name: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeDescription = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeTaskDescription({ description: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeRole = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeTaskRole({ role: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeDeadline = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeTaskDeadline({ deadline: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  // Form events
  saveTaskToRedux = (): void => {
    this.props.storeTask({
      name: this.props.taskName,
      description: this.props.taskDescription,
      role: this.props.taskRole,
      deadline: this.props.taskDeadline,
    });
  };

  saveTaskToReduxAsTaskFive = (): void => {
    const objCopy: ICustomTasks = JSON.parse(JSON.stringify(this.props.taskFive));

    const newCustomTask: IITask = {
      num: 5,
      name: this.props.task.name.name,
      description: this.props.task.description.description,
      deadline: this.props.task.deadline.deadline,
      isCompleted: false,
      assignedTo: '',
    };

    objCopy.customTasks.push(newCustomTask);

    this.props.setTaskFive(objCopy);
  };

  saveTaskToDB = (): void => {
    // TODO: add axios call here - use this.state.roleId and this.props.role
    // the last one is an object containing these objects: title, description, responsibilities
  };

  saveEditedTaskToDB = (): void => {
    // TODO: add axios call here - use this.state.roleId and this.props.role
    // the last one is an object containing these objects: title, description, responsibilities
  };

  addTask = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveTaskToRedux();
    await this.saveTaskToDB();
    await this.saveTaskToReduxAsTaskFive();

    this.closeAddTaskModal(event);
  };

  editTask = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveEditedTaskToDB();
    await this.saveTaskToDB();
    await this.saveTaskToReduxAsTaskFive();

    this.closeEditTaskModal(event);
  };

  // Fields
  // TODO: Add dynamic data (options)
  addTaskModalFields: IField[] = [
    { name: 'Name', type: 'text', onchange: this.storeName },
    { name: 'Description', type: 'textarea', onchange: this.storeDescription },
    { name: 'Role', type: 'select', onchange: this.storeRole, options: { list: [] } },
    { name: 'Deadline', type: 'text', onchange: this.storeDeadline },
  ];
  // TODO: Add dynamic value depending on selected item
  // TODO: Add dynamic data (options)
  editTaskModalFields: IField[] = [
    { name: 'Name', type: 'text', onchange: this.storeName, value: '' },
    { name: 'Description', type: 'textarea', onchange: this.storeDescription, value: '' },
    { name: 'Role', type: 'select', onchange: this.storeRole, options: { list: [] }, value: '' },
    { name: 'Deadline', type: 'text', onchange: this.storeDeadline, value: '' },
  ];

  render() {
    return (
      <>
        <Form
          fields={this.addTaskModalFields}
          header={'Add a task'}
          submitFunction={this.addTask}
          closeFunction={this.closeAddTaskModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.addTaskModal.isOpen}
        />

        <Form
          fields={this.editTaskModalFields}
          header={'Edit a task'}
          submitFunction={this.editTask}
          closeFunction={this.closeEditTaskModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.editTaskModal.isOpen}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    taskName: state.taskName,
    taskDescription: state.taskDescription,
    taskRole: state.taskRole,
    taskDeadline: state.taskDeadline,
    task: state.task,
    addTaskModal: state.addTaskModal,
    editTaskModal: state.editTaskModal,
    taskFive: state.taskFive,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeTaskName: (taskName: ITaskName) => dispatch(StoreNameAction(taskName)),
    storeTaskDescription: (taskDescription: ITaskDescription) => dispatch(StoreDescriptionAction(taskDescription)),
    storeTaskRole: (taskRole: ITaskRole) => dispatch(StoreRoleAction(taskRole)),
    storeTaskDeadline: (taskDeadline: ITaskDeadline) => dispatch(StoreDeadlineAction(taskDeadline)),
    storeTask: (task: ITask) => dispatch(StoreTaskAction(task)),
    toggleAddTaskModal: (addTaskModal: IAddTaskModal) => dispatch(ToggleAddTaskModalAction(addTaskModal)),
    toggleEditTaskModal: (EditTaskModal: IEditTaskModal) => dispatch(ToggleEditTaskModalAction(EditTaskModal)),
    setTaskFive: (taskFive: ICustomTasks) => dispatch(setCustomTaskAsCompletedAction(taskFive)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(TasksForms);
