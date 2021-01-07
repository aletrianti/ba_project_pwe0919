import React from 'react';
//import './Tasks.scss';

class Tasks extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="admin-panel__tasks">
        <div id="admin-panel__tasks__content">tasks</div>
      </div>
    );
  }
}

export default Tasks;
