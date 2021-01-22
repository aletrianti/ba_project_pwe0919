import React, { MouseEvent } from 'react';
import './TasksItem.scss';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

interface TasksItemProps {
  taskName: string;
  deadline?: string;
  setDeadline: any;
  saveDeadline: any;
}

interface TasksItemState {
  deadline?: string;
}

class TasksItem extends React.Component<TasksItemProps, TasksItemState> {
  constructor(props: any) {
    super(props);

    this.state = {
      deadline: this.props.deadline,
    };
  }

  setDeadline = (e: any): void => {
    this.props.setDeadline(e);
  };

  saveDeadline = (e: MouseEvent): void => {
    e.preventDefault();

    this.props.saveDeadline();
  };

  render() {
    return (
      <div className="tasks__item__container">
        <div className="tasks__item__first-half">
          <h4 className="tasks__item__name">{this.props.taskName}</h4>
          <ArrowRightAltIcon />
        </div>
        <div className="tasks__item__second-half">
          <input
            type="text"
            className="tasks__item__input"
            defaultValue={this.state.deadline || ''}
            onChange={this.setDeadline}
          />
          <button onClick={(e: MouseEvent) => this.saveDeadline(e)} className="tasks__item__btn">
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default TasksItem;
