import React, { MouseEvent } from 'react';
import './Tasks.scss';
import axios from 'axios';

import Title from '../../common/Title/Title';
import TasksItem from './TasksItem/TasksItem';
import {
  setTaskOneAsCompletedAction,
  setTaskTwoAsCompletedAction,
  setTaskThreeAsCompletedAction,
  setTaskFourAsCompletedAction,
  setCustomTaskAsCompletedAction,
} from '../../../store/actions/tasks/tasks.actions';
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
import { getTokenFromLocalStorage } from '../../../utils/localStorageActions';
import { ICompanyTask } from '../../../../../types/companyTask.types';

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

interface TaskDeadlineState {
  taskOneDeadline: string;
  taskTwoDeadline: string;
  taskThreeDeadline: string;
  taskFourDeadline: string;
}

class Tasks extends React.Component<TaskProps, TaskDeadlineState> {
  constructor(props: any) {
    super(props);

    this.state = {
      taskOneDeadline: '',
      taskTwoDeadline: '',
      taskThreeDeadline: '',
      taskFourDeadline: '',
    };
  }
  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddTaskModal({ isOpen: true });
  };

  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  getDeadlines = async () => {
    const tasks: ICompanyTask[] = await axios.get('/api/companytask', this.config).then(res => {
      return res.data;
    });

    return tasks;
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

  saveDeadlineToDB = (task): void => {
    // TODO: add axios call here
  };
  async componentDidMount() {
    const tasks = await this.getDeadlines();

    tasks.forEach(task => {
      switch (task.taskID) {
        case 1:
          this.setState({ taskOneDeadline: task.deadline });
          break;
        case 2:
          this.setState({ taskTwoDeadline: task.deadline });
          break;
        case 3:
          this.setState({ taskThreeDeadline: task.deadline });
          break;
        case 4:
          this.setState({ taskFourDeadline: task.deadline });
          break;
      }
    });
  }

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
              deadline={this.state.taskOneDeadline ? this.state.taskOneDeadline : taskOne.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskOne(taskOne, e)}
              saveDeadline={this.saveDeadlineToDB(taskOne)}
            />
            <TasksItem
              taskName={taskTwo.name}
              deadline={this.state.taskTwoDeadline ? this.state.taskTwoDeadline : taskTwo.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskTwo(taskTwo, e)}
              saveDeadline={this.saveDeadlineToDB(taskTwo)}
            />
            <TasksItem
              taskName={taskThree.name}
              deadline={this.state.taskThreeDeadline ? this.state.taskThreeDeadline : taskThree.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskThree(taskThree, e)}
              saveDeadline={this.saveDeadlineToDB(taskThree)}
            />
            <TasksItem
              taskName={taskFour.name}
              deadline={this.state.taskFourDeadline ? this.state.taskFourDeadline : taskFour.deadline}
              setDeadline={(e: any) => this.setDeadlineTaskFour(taskFour, e)}
              saveDeadline={this.saveDeadlineToDB(taskFour)}
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
    setTaskOne: (taskOne: ITask) => dispatch(setTaskOneAsCompletedAction(taskOne)),
    setTaskTwo: (taskTwo: ITask) => dispatch(setTaskTwoAsCompletedAction(taskTwo)),
    setTaskThree: (taskThree: ITask) => dispatch(setTaskThreeAsCompletedAction(taskThree)),
    setTaskFour: (taskFour: ITask) => dispatch(setTaskFourAsCompletedAction(taskFour)),
    setTaskFive: (taskFive: ICustomTasks) => dispatch(setCustomTaskAsCompletedAction(taskFive)),
    toggleAddTaskModal: (addTaskModal: IAddTaskModal) => dispatch(ToggleAddTaskModalAction(addTaskModal)),
    toggleEditTaskModal: (editTaskModal: IEditTaskModal) => dispatch(ToggleEditTaskModalAction(editTaskModal)),
    toggleDeleteTaskModal: (deleteTaskModal: IDeleteTaskModal) => dispatch(ToggleDeleteTaskModalAction(deleteTaskModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
