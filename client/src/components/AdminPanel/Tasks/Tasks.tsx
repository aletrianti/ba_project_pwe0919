import React, { MouseEvent } from 'react';
import './Tasks.scss';

import Title from '../../common/Title/Title';
import TasksItem from './TasksItem/TasksItem';
import {
  setTaskOneAsCompletedAction,
  setTaskTwoAsCompletedAction,
  setTaskThreeAsCompletedAction,
  setTaskFourAsCompletedAction,
  setTaskFiveAsCompletedAction,
} from '../../../store/actions/tasks/tasks.actions';
import { ITask } from '../../../store/interfaces/tasks.interfaces';

import { connect } from 'react-redux';

interface TaskProps {
  taskOne: ITask;
  taskTwo: ITask;
  taskThree: ITask;
  taskFour: ITask;
  setTaskOne: (taskOne: ITask) => any;
  setTaskTwo: (taskTwo: ITask) => any;
  setTaskThree: (taskThree: ITask) => any;
  setTaskFour: (taskFour: ITask) => any;
  setTaskFive: (taskFive: ITask) => any;
}

class Tasks extends React.Component<TaskProps> {
  modalDescription: string = 'Give a general idea of how much time your new employee should spend on each task.';

  // TODO!! Send dynamic data to custom tasks div
  customTasks = [];

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

  saveDeadlineToDB = (task): void => {
    // TODO: add axios call here
  };

  saveDeadlineTaskOne = (task: ITask): void => {
    this.saveDeadlineToDB(task);
  };
  saveDeadlineTaskTwo = (task: ITask): void => {
    this.saveDeadlineToDB(task);
  };
  saveDeadlineTaskThree = (task: ITask): void => {
    this.saveDeadlineToDB(task);
  };
  saveDeadlineTaskFour = (task: ITask): void => {
    this.saveDeadlineToDB(task);
  };

  openModal = () => {};

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
              saveDeadline={this.saveDeadlineTaskOne(taskOne)}
            />
            <TasksItem
              taskName={taskTwo.name}
              deadline={taskTwo.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskTwo(taskTwo, e)}
              saveDeadline={this.saveDeadlineTaskTwo(taskTwo)}
            />
            <TasksItem
              taskName={taskThree.name}
              deadline={taskThree.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskThree(taskThree, e)}
              saveDeadline={this.saveDeadlineTaskThree(taskThree)}
            />
            <TasksItem
              taskName={taskFour.name}
              deadline={taskFour.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskFour(taskFour, e)}
              saveDeadline={this.saveDeadlineTaskFour(taskFour)}
            />

            <div id="admin-panel__tasks__content__custom">
              <h4 id="admin-panel__tasks__content__custom__title">Create custom tasks</h4>

              <div id="admin-panel__tasks__content__custom__tasks">
                <span className="admin-panel__tasks__content__custom__tasks__item">Custom task 1</span>
                <span className="admin-panel__tasks__content__custom__tasks__item">Custom task 2</span>
              </div>

              <button id="admin-panel__tasks__content__custom__btn" onClick={this.openModal}>
                Add a task
              </button>
            </div>
          </div>
        </div>
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
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTaskOne: (taskOne: ITask) => dispatch(setTaskOneAsCompletedAction(taskOne)),
    setTaskTwo: (taskTwo: ITask) => dispatch(setTaskTwoAsCompletedAction(taskTwo)),
    setTaskThree: (taskThree: ITask) => dispatch(setTaskThreeAsCompletedAction(taskThree)),
    setTaskFour: (taskFour: ITask) => dispatch(setTaskFourAsCompletedAction(taskFour)),
    setTaskFive: (taskFive: ITask) => dispatch(setTaskFiveAsCompletedAction(taskFive)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
