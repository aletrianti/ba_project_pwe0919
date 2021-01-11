import React from 'react';
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

  setDeadline = (): void => {
    this.props.setDeadline();
  };

  saveDeadline = (): void => {
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
          <button onClick={this.saveDeadline} className="tasks__item__btn">
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default TasksItem;
