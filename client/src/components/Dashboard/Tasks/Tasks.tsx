import React from 'react';
import './Tasks.scss';

import Task from './Task/Task';

import {
  SET_TASK_ONE,
  SET_TASK_TWO,
  SET_TASK_THREE,
  SET_TASK_FOUR,
  SET_TASK_FIVE,
} from '../../../store/actions/tasks/tasks.types';
import { ICustomTasks, ITask } from '../../../store/interfaces/tasks.interfaces';
import { connect } from 'react-redux';
import { getUserInfoFromLocalStorage } from '../../../utils/localStorageActions';

interface TasksProps {
  tasks?: ITask[];
  taskFive?: ICustomTasks;
}

class Tasks extends React.Component<TasksProps> {
  setActionType = (num: number): string => {
    switch (num) {
      case 1:
        return SET_TASK_ONE;
      case 2:
        return SET_TASK_TWO;
      case 3:
        return SET_TASK_THREE;
      case 4:
        return SET_TASK_FOUR;
      case 5:
        return SET_TASK_FIVE;
      default:
        return '';
    }
  };

  render() {
    const { tasks, taskFive } = this.props;
    const currentUser = getUserInfoFromLocalStorage();

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
          {taskFive?.customTasks.map((task, i) => {
            return task && task.role === currentUser.jobTitle ? (
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
            ) : null;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): any => {
  const { taskOne, taskTwo, taskThree, taskFour, taskFive } = state;

  return { tasks: [taskOne, taskTwo, taskThree, taskFour], taskFive };
};

export default connect(mapStateToProps)(Tasks);
