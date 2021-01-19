import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { ToggleAddAchievementModalAction } from '../../../store/actions/forms/forms.actions';
import { IAddAchievementModal } from '../../../store/interfaces/forms/achievements.interfaces';
import { ITableAchievement } from '../../../store/interfaces/tables.interfaces';
import { getTokenFromLocalStorage } from '../../../utils/localStorageActions';

import AddButton from '../../common/AddButton/AddButton';
import AchievementsForms from './AchievementsForms/AchievementsForms';
import DeleteAchievementsForm from './AchievementsForms/DeleteAchievementsForm';
import AchievementsTable from './AchievementsTable/AchievementsTable';

interface AchievementsProps {
  toggleAddAchievementModal: (addAchievementModal: IAddAchievementModal) => any;
}

interface AchievevementsState {
  achievements: ITableAchievement[];
}

class Achievements extends React.Component<AchievementsProps, AchievevementsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      achievements: [],
    };
  }
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

  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  getAchievements = async () => {
    return await axios.get('/api/company-achievement', this.config).then(res => {
      return res.data;
    });
  };

  async componentDidMount() {
    const achievements = await this.getAchievements();

    this.setState({ achievements: achievements });
  }

  render() {
    return (
      <div id="admin-panel__achievements">
        <AddButton name={'Add achievement'} function={(e: MouseEvent) => this.openModal(e)} />

        <div id="admin-panel__achievements__content" className="admin-panel__content">
          <AchievementsTable achievements={this.state.achievements} />
        </div>

        <AchievementsForms />
        <DeleteAchievementsForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleAddAchievementModal: (addAchievementModal: IAddAchievementModal) =>
      dispatch(ToggleAddAchievementModalAction(addAchievementModal)),
  };
};

export default connect(null, mapDispatchToProps)(Achievements);
