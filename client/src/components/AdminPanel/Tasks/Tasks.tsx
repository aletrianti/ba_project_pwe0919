import React, { MouseEvent } from 'react';
import './Tasks.scss';

import Title from '../../common/Title/Title';
import TasksItem from './TasksItem/TasksItem';
import { setTaskOne, setTaskTwo, setTaskThree, setTaskFour, setCustomTask } from '../../../store/actions/tasks/tasks.actions';
import { ICustomTasks, ITask } from '../../../store/interfaces/tasks.interfaces';

import { connect } from 'react-redux';
import TasksForm from './TasksForms/TasksForm';
import {
  ToggleAddTaskModalAction,
  ToggleDeleteTaskModalAction,
  ToggleEditTaskModalAction,
} from '../../../store/actions/forms/forms.actions';
import { IAddTaskModal, IDeleteTaskModal, IEditTaskModal } from '../../../store/interfaces/forms/tasks.interfaces';
import DeleteTasksForms from './TasksForms/DeleteTasksForms';
import Actions from '../../common/Actions/Actions';
import { postCompanyTask } from '../../../utils/httpRequests';

interface TaskProps {
  taskOne: ITask;
  taskTwo: ITask;
  taskThree: ITask;
  taskFour: ITask;
  taskFive: ICustomTasks;
  setTaskOne: (taskOne: ITask) => any;
  setTaskTwo: (taskTwo: ITask) => any;
  setTaskThree: (taskThree: ITask) => any;
  setTaskFour: (taskFour: ITask) => any;
  setTaskFive: (taskFive: ICustomTasks) => any;
  toggleAddTaskModal: (addTaskModal: IAddTaskModal) => any;
  toggleEditTaskModal: (editTaskModal: IEditTaskModal) => any;
  toggleDeleteTaskModal: (deleteTaskModal: IDeleteTaskModal) => any;
}

class Tasks extends React.Component<TaskProps> {
  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddTaskModal({ isOpen: true });
  };

  editCustomTask = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditTaskModal({ id, isOpen: true });
  };

  deleteCustomTask = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteTaskModal({ id, isOpen: true });
  };

  setDeadline = (task: ITask, specificTask: ITask, value: string, action: any): void => {
    const taskCopy = { ...task };

    if (specificTask.deadline !== value) {
      taskCopy.deadline = value;
      action(taskCopy);
    }
  };

  setDeadlineTaskOne = (task: ITask, e: any): void => {
    this.setDeadline(task, this.props.taskOne, e.target.value, this.props.setTaskOne);
  };
  setDeadlineTaskTwo = (task: ITask, e: any): void => {
    this.setDeadline(task, this.props.taskTwo, e.target.value, this.props.setTaskTwo);
  };
  setDeadlineTaskThree = (task: ITask, e: any): void => {
    this.setDeadline(task, this.props.taskThree, e.target.value, this.props.setTaskThree);
  };
  setDeadlineTaskFour = (task: ITask, e: any): void => {
    this.setDeadline(task, this.props.taskFour, e.target.value, this.props.setTaskFour);
  };

  saveDeadlineToDB = async (task): Promise<void> => {
    const data = {
      taskId: task.num,
      deadline: task.deadline,
    };

    await postCompanyTask(data);
  };

  modalDescription: string = 'Give a general idea of how much time your new employee should spend on each task.';

  // TODO!! Send dynamic data to custom tasks div
  customTasks = [];

  render() {
    const { taskOne, taskTwo, taskThree, taskFour } = this.props;

    return (
      <div id="admin-panel__tasks">
        <Title title={'Set deadlines for onboarding tasks'} description={this.modalDescription} itemKey={0} />

        <div id="admin-panel__tasks__content">
          <div id="admin-panel__tasks__content__headers">
            <h3>Onboarding Tasks</h3>
            <h3>Deadline for completion</h3>
          </div>
          <div id="admin-panel__tasks__content__items">
            <TasksItem
              taskName={taskOne.name}
              deadline={taskOne.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskOne(taskOne, e)}
              saveDeadline={() => this.saveDeadlineToDB(taskOne)}
            />
            <TasksItem
              taskName={taskTwo.name}
              deadline={taskTwo.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskTwo(taskTwo, e)}
              saveDeadline={() => this.saveDeadlineToDB(taskTwo)}
            />
            <TasksItem
              taskName={taskThree.name}
              deadline={taskThree.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskThree(taskThree, e)}
              saveDeadline={() => this.saveDeadlineToDB(taskThree)}
            />
            <TasksItem
              taskName={taskFour.name}
              deadline={taskFour.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskFour(taskFour, e)}
              saveDeadline={() => this.saveDeadlineToDB(taskFour)}
            />

            <div id="admin-panel__tasks__content__custom">
              <h4 id="admin-panel__tasks__content__custom__title">Create custom tasks</h4>

              <div id="admin-panel__tasks__content__custom__tasks">
                {this.props.taskFive.customTasks.map((task, i) => {
                  return task ? (
                    <div className="admin-panel__tasks__content__custom__tasks__item" key={i}>
                      <span>{task.name}</span>
                      <Actions
                        actions={[
                          { name: 'Edit', function: (e: MouseEvent) => this.editCustomTask(task.num, e) },
                          { name: 'Delete', function: (e: MouseEvent) => this.deleteCustomTask(task.num, e) },
                        ]}
                      />
                    </div>
                  ) : null;
                })}
              </div>

              <button id="admin-panel__tasks__content__custom__btn" onClick={(e: MouseEvent) => this.openModal(e)}>
                Add a task
              </button>
            </div>
          </div>
        </div>

        <TasksForm />
        <DeleteTasksForms />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    taskOne: state.taskOne,
    taskTwo: state.taskTwo,
    taskThree: state.taskThree,
    taskFour: state.taskFour,
    taskFive: state.taskFive,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTaskOne: (taskOne: ITask) => dispatch(setTaskOne(taskOne)),
    setTaskTwo: (taskTwo: ITask) => dispatch(setTaskTwo(taskTwo)),
    setTaskThree: (taskThree: ITask) => dispatch(setTaskThree(taskThree)),
    setTaskFour: (taskFour: ITask) => dispatch(setTaskFour(taskFour)),
    setTaskFive: (taskFive: ICustomTasks) => dispatch(setCustomTask(taskFive)),
    toggleAddTaskModal: (addTaskModal: IAddTaskModal) => dispatch(ToggleAddTaskModalAction(addTaskModal)),
    toggleEditTaskModal: (editTaskModal: IEditTaskModal) => dispatch(ToggleEditTaskModalAction(editTaskModal)),
    toggleDeleteTaskModal: (deleteTaskModal: IDeleteTaskModal) => dispatch(ToggleDeleteTaskModalAction(deleteTaskModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
