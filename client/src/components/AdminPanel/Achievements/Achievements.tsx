import React from 'react';
import { connect } from 'react-redux';

import { ToggleAddAchievementModalAction } from '../../../store/actions/forms/forms.actions';
import { IAddAchievementModal } from '../../../store/interfaces/forms/achievements.interfaces';
import { ITableAchievement } from '../../../store/interfaces/tables.interfaces';

import AddButton from '../../common/AddButton/AddButton';
import AchievementsForms from './AchievementsForms/AchievementsForms';
import DeleteAchievementsForm from './AchievementsForms/DeleteAchievementsForm';
import AchievementsTable from './AchievementsTable/AchievementsTable';

interface AchievementsProps {
  toggleAddAchievementModal: (addAchievementModal: IAddAchievementModal) => any;
}

class Achievements extends React.Component<AchievementsProps> {
  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddAchievementModal({ isOpen: true });
  };

  // TODO: Add dynamic achievement data for the table
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
        <AddButton name={'Add achievement'} function={(e: MouseEvent) => this.openModal(e)} />

        <div id="admin-panel__achievements__content" className="admin-panel__content">
          <AchievementsTable achievements={this.achievements} />
        </div>

        <AchievementsForms />
        <DeleteAchievementsForm />
      </div>
    );
  }
}

const mapDisparchToProps = (dispatch: any) => {
  return {
    toggleAddAchievementModal: (addAchievementModal: IAddAchievementModal) =>
      dispatch(ToggleAddAchievementModalAction(addAchievementModal)),
  };
};

export default connect(null, mapDisparchToProps)(Achievements);
