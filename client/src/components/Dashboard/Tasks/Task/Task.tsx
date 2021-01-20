import React from 'react';

import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import store from '../../../..';
import { ISetTask, ITask } from '../../../../store/interfaces/tasks.interfaces';
import { submitAssignedTask } from '../../../../utils/httpRequests';
import { IAssignedTaskInput } from '../../../../../../types/assignedTask.types';

interface TaskProps {
  name: string;
  deadline: string;
  description: string;
  taskNum: number;
  isCompleted: boolean;
  assignedTo: string;
  actionType: string;
}

interface TaskState {
  isOpen: boolean;
  isConfirmed: boolean;
  divHeight?: number;
}

class Task extends React.Component<TaskProps, TaskState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      isConfirmed: props.isCompleted,
      divHeight: undefined,
    };
  }

  toggleInfo = (): void => {
    this.setState({
      isOpen: !this.state.isOpen,
      divHeight: document.getElementById(`name__task__${this.props.taskNum}`)?.offsetHeight,
    });
  };

  confirmTask = async (): Promise<void> => {
    const payload: ITask = {
      num: this.props.taskNum,
      name: this.props.name,
      deadline: this.props.deadline,
      description: this.props.description,
      isCompleted: true,
      assignedTo: this.props.assignedTo,
    };

    const data: IAssignedTaskInput = {
      taskId: payload.num,
      completed: payload.isCompleted,
    };

    await submitAssignedTask(data);

    const action: ISetTask = { type: this.props.actionType, payload };

    store.dispatch(action);
  };

  render() {
    const { name, deadline, description, taskNum, isCompleted } = this.props;

    return (
      <div className="dashboard__tasks__item">
        <span className={!isCompleted ? 'task__num' : 'task__num task__num--confirmed'}>{taskNum}</span>
        <div className="task__info">
          <div id={`name__task__${taskNum}`} className={!this.state.isOpen ? 'task__name' : 'task__name task__name--open'}>
            <h3>
              {name} <span>{`(${deadline})`}</span>
            </h3>
            <div className="task__info__actions">
              {!isCompleted ? (
                <span className="confirm__btn" onClick={this.confirmTask}>
                  Confirm
                </span>
              ) : (
                <div className="confirmed__btn">
                  <CheckCircleIcon />
                </div>
              )}
              <div className="task__arrow" onClick={this.toggleInfo}>
                {!this.state.isOpen ? <ExpandMore /> : <ExpandLess />}
              </div>
            </div>
          </div>
          <div className={!this.state.isOpen ? 'task__description' : 'task__description task__description--open'}>
            <p style={{ paddingTop: `calc(-${this.state.divHeight}px + 50px)` }}>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
