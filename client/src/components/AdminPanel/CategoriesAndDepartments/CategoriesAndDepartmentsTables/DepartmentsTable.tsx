import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

class DepartmentsTable extends React.Component {
  data = [
    {
      department: 'Engineering',
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
    { title: 'Department', columnData: (data: any) => data.department },
    { title: '', columnData: (data: any) => data.actions },
  ];

  render() {
    return (
      <div id="departments__table">
        <Table data={this.data} columns={this.columns} />
      </div>
    );
  }
}

export default DepartmentsTable;
