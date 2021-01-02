import React, { MouseEvent } from 'react';
import './Achievements.scss';

import AddButton from '../../common/AddButton/AddButton';
import AchievementsTable from './AchievementsTable/AchievementsTable';

class Achievements extends React.Component {
  constructor(props: any) {
    super(props);
  }

  openAddUserModal = () => {};

  render() {
    return (
      <div className="admin-panel__achievements">
        <AddButton name={'Add achievement'} function={this.openAddUserModal} />

        <div id="admin-panel__achievements__content">
          <AchievementsTable />
        </div>
      </div>
    );
  }
}

export default Achievements;
