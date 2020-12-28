import React, { MouseEvent } from 'react';
import './Achievements.scss';

import AddButton from '../../common/AddButton/AddButton';

class Achievements extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const openAddUserModal = () => {};

    return (
      <div className="admin-panel__achievements">
        <AddButton name={'Add achievement'} function={openAddUserModal} />
      </div>
    );
  }
}

export default Achievements;
