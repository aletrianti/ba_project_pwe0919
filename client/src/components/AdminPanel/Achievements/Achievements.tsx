import React from 'react';

import { ITableAchievement } from '../../../store/interfaces/tables.interfaces';

import AddButton from '../../common/AddButton/AddButton';
import AchievementsTable from './AchievementsTable/AchievementsTable';

class Achievements extends React.Component {
  openModal = () => {};

  achievements: ITableAchievement[] = [
    {
      id: 1,
      title: 'Achievement 1',
      description: 'This is an achievement',
      date: '10-02-18',
    },
  ];

  render() {
    return (
      <div id="admin-panel__achievements">
        <AddButton name={'Add achievement'} function={this.openModal} />

        <div id="admin-panel__achievements__content" className="admin-panel__content">
          <AchievementsTable achievements={this.achievements} />
        </div>
      </div>
    );
  }
}

export default Achievements;
