import React from 'react';

import AddButton from '../../common/AddButton/AddButton';
import AchievementsTable from './AchievementsTable/AchievementsTable';

class Achievements extends React.Component {
  openModal = () => {};

  render() {
    return (
      <div id="admin-panel__achievements">
        <AddButton name={'Add achievement'} function={this.openModal} />

        <div id="admin-panel__achievements__content" className="admin-panel__content">
          <AchievementsTable />
        </div>
      </div>
    );
  }
}

export default Achievements;
