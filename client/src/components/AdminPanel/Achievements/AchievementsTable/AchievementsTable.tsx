import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

class AchievementsTable extends React.Component {
  data = [
    {
      title: 'Achievement 1',
      description: 'This is an achievement',
      date: '10-02-18',
      actions: (
        <Actions
          actions={[
            { name: 'Edit', function: () => {} },
            { name: 'Delete', function: () => {} },
          ]}
        />
      ),
    },
  ];

  columns = [
    { title: 'Title', columnData: (data: any) => data.title },
    { title: 'Description', columnData: (data: any) => data.description },
    { title: 'Date', columnData: (data: any) => data.date },
    { title: '', columnData: (data: any) => data.actions },
  ];

  render() {
    return (
      <div id="achievements__table">
        <Table data={this.data} columns={this.columns} />
      </div>
    );
  }
}

export default AchievementsTable;
