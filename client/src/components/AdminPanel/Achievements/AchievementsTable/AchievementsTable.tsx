import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableAchievement } from '../../../../store/interfaces/tables.interfaces';

interface AchievementsTableProps {
  achievements: ITableAchievement[];
}

class AchievementsTable extends React.Component<AchievementsTableProps> {
  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: () => {} },
        { name: 'Delete', function: () => {} },
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

export default AchievementsTable;
