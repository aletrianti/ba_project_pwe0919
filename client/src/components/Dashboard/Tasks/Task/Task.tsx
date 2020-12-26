import React from 'react';

import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

interface TaskProps {
  name: string;
  deadline: string;
  description: string;
  taskNum: number;
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
      isConfirmed: false,
      divHeight: undefined,
    };
  }

  render() {
    const { name, deadline, description, taskNum } = this.props;

    const toggleInfo = (): void => {
      this.setState({
        isOpen: !this.state.isOpen,
        divHeight: document.getElementById(`name__task__${this.props.taskNum}`)?.offsetHeight,
      });
    };

    // TODO: don't store in the components's state, but in redux with the tasks
    const confirmTask = (): void => {
      this.setState({ isConfirmed: true });
    };

    return (
      <div className="dashboard__tasks__item">
        <span className="task__num">{taskNum}</span>
        <div className="task__info">
          <div id={`name__task__${taskNum}`} className={!this.state.isOpen ? 'task__name' : 'task__name task__name--open'}>
            <h3>
              {name} <span>{deadline}</span>
            </h3>
            <div className="task__info__actions">
              {!this.state.isConfirmed ? (
                <span className="confirm__btn" onClick={confirmTask}>
                  Confirm
                </span>
              ) : (
                <div className="confirmed__btn">
                  <CheckCircleIcon />
                </div>
              )}
              <div className="task__arrow" onClick={toggleInfo}>
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
