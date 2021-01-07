import React from 'react';
import './Tasks.scss';

import Task from './Task/Task';

import store from '../../../index';
import {
  SET_TASK_ONE_AS_COMPLETED,
  SET_TASK_TWO_AS_COMPLETED,
  SET_TASK_THREE_AS_COMPLETED,
  SET_TASK_FOUR_AS_COMPLETED,
  SET_TASK_FIVE_AS_COMPLETED,
} from '../../../store/actions/tasks/tasks.types';
import { ITask } from '../../../store/interfaces/tasks.interfaces';
import { connect } from 'react-redux';

interface TasksProps {
  tasks?: ITask[];
}

class Tasks extends React.Component<TasksProps> {
  setActionType = (num: number): string => {
    switch (num) {
      case 1:
        return SET_TASK_ONE_AS_COMPLETED;
      case 2:
        return SET_TASK_TWO_AS_COMPLETED;
      case 3:
        return SET_TASK_THREE_AS_COMPLETED;
      case 4:
        return SET_TASK_FOUR_AS_COMPLETED;
      case 5:
        return SET_TASK_FIVE_AS_COMPLETED;
      default:
        return '';
    }
  };

  render() {
    const { tasks } = this.props;

    return (
      <div id="dashboard__tasks">
        <div id="tasks__container">
          {tasks
            ? tasks.map((task, i) => {
                return (
                  <Task
                    name={task.name}
                    deadline={task.deadline}
                    description={task.description}
                    taskNum={task.num}
                    isCompleted={task.isCompleted}
                    assignedTo={task.assignedTo}
                    actionType={this.setActionType(task.num)}
                    key={i}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any = store.getState()): any => {
  const { taskOne, taskTwo, taskThree, taskFour, taskFive } = state;

  return { tasks: [taskOne, taskTwo, taskThree, taskFour, taskFive] };
};

export default connect(mapStateToProps)(Tasks);
