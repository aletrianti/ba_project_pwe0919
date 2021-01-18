import React from 'react';
import { connect } from 'react-redux';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableAchievement } from '../../../../store/interfaces/tables.interfaces';
import {
  ToggleEditAchievementModalAction,
  ToggleDeleteAchievementModalAction,
} from '../../../../store/actions/forms/forms.actions';
import {
  IEditAchievementModal,
  IDeleteAchievementModal,
  IAchievement,
} from '../../../../store/interfaces/forms/achievements.interfaces';
import { StoreAchievementAction } from '../../../../store/actions/forms/achievements/achievements.actions';

interface AchievementsTableProps {
  achievements: ITableAchievement[];
  storeAchievement: (achievement: IAchievement) => any;
  toggleEditAchievementModal: (editAchievementModal: IEditAchievementModal) => any;
  toggleDeleteAchievementModal: (deleteAchievementModal: IDeleteAchievementModal) => any;
}

class AchievementsTable extends React.Component<AchievementsTableProps> {
  editAchievement = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.storeAchievement({
      title: { title: data.title, isValid: true, errorMessage: '' },
      description: { description: data.description, isValid: true, errorMessage: '' },
      date: { date: data.date, isValid: true, errorMessage: '' },
    });
    this.props.toggleEditAchievementModal({ id: data.id, isOpen: true });
  };

  deleteAchievement = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteAchievementModal({ id: data.id, isOpen: true });
  };

  actions = (data: any) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editAchievement(data, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteAchievement(data, e) },
      ]}
    />
  );

  columns = [
    { title: 'Title', columnData: (data: any) => data.title },
    { title: 'Description', columnData: (data: any) => data.description },
    { title: 'Date', columnData: (data: any) => data.date },
    { title: '', columnData: (data: any) => this.actions(data) },
  ];

  render() {
    return (
      <div id="achievements__table">
        <Table data={this.props.achievements} columns={this.columns} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeAchievement: (achievement: IAchievement) => dispatch(StoreAchievementAction(achievement)),
    toggleEditAchievementModal: (editAchievementModal: IEditAchievementModal) =>
      dispatch(ToggleEditAchievementModalAction(editAchievementModal)),
    toggleDeleteAchievementModal: (deleteAchievementModal: IDeleteAchievementModal) =>
      dispatch(ToggleDeleteAchievementModalAction(deleteAchievementModal)),
  };
};

export default connect(null, mapDispatchToProps)(AchievementsTable);
