import React from 'react';
import { connect } from 'react-redux';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableAchievement } from '../../../../store/interfaces/tables.interfaces';
import {
  ToggleEditAchievementModalAction,
  ToggleDeleteAchievementModalAction,
} from '../../../../store/actions/forms/forms.actions';
import { IAchievementModal, IDeleteAchievementModal } from '../../../../store/interfaces/forms/achievements.interfaces';

interface AchievementsTableProps {
  achievements: ITableAchievement[];
  toggleEditAchievementModal: (editAchievementModal: IAchievementModal) => any;
  toggleDeleteAchievementModal: (deleteAchievementModal: IDeleteAchievementModal) => any;
}

class AchievementsTable extends React.Component<AchievementsTableProps> {
  editAchievement = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditAchievementModal({ id, isOpen: true });
  };

  deleteAchievement = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteAchievementModal({ id, isOpen: true });
  };

  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editAchievement(id, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteAchievement(id, e) },
      ]}
    />
  );

  columns = [
    { title: 'Title', columnData: (data: any) => data.title },
    { title: 'Description', columnData: (data: any) => data.description },
    { title: 'Date', columnData: (data: any) => data.date },
    { title: '', columnData: (data: any) => this.actions(data.id) },
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
    toggleEditAchievementModal: (editAchievementModal: IAchievementModal) =>
      dispatch(ToggleEditAchievementModalAction(editAchievementModal)),
    toggleDeleteAchievementModal: (deleteAchievementModal: IDeleteAchievementModal) =>
      dispatch(ToggleDeleteAchievementModalAction(deleteAchievementModal)),
  };
};

export default connect(null, mapDispatchToProps)(AchievementsTable);
