import React from 'react';
import './Tasks.scss';

import Title from '../../common/Title/Title';
import TasksItem from './TasksItem/TasksItem';

class Tasks extends React.Component {
  modalDescription: string = 'Give a general idea of how much time your new employee should spend on each task.';

  // TODO!! Send dynamic data to TasksItem && custom tasks div

  setDeadline = () => {};

  saveDeadline = () => {};

  openModal = () => {};

  render() {
    return (
      <div className="admin-panel__tasks">
        <Title title={'Set deadlines for onboarding tasks'} description={this.modalDescription} itemKey={0} />

        <div className="admin-panel__tasks__content">
          <div className="admin-panel__tasks__content__headers">
            <h3>Onboarding Tasks</h3>
            <h3>Deadline for completion</h3>
          </div>
          <div className="admin-panel__tasks__content__items">
            <TasksItem taskName={'Task'} deadline={'3 days'} setDeadline={this.setDeadline} saveDeadline={this.saveDeadline} />

            <div className="admin-panel__tasks__content__custom">
              <h4 className="admin-panel__tasks__content__custom__title">Create custom tasks</h4>

              <div className="admin-panel__tasks__content__custom__tasks">
                <span className="admin-panel__tasks__content__custom__tasks__item">Custom task 1</span>
                <span className="admin-panel__tasks__content__custom__tasks__item">Custom task 2</span>
              </div>

              <button className="admin-panel__tasks__content__custom__btn" onClick={this.openModal}>
                Add a task
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
