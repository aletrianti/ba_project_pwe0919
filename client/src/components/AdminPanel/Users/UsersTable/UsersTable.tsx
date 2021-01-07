import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

class UsersTable extends React.Component {
  data = [
    {
      name: 'Bob Ross',
      email: 'bob.ross@gmail.com',
      isAvailableToBuddy: true,
      assignedTo: '',
      department: 'Design',
      role: 'Painter',
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
    { title: 'First and last name', columnData: (data: any) => data.name },
    { title: 'Email', columnData: (data: any) => data.email },
    { title: 'Buddy availability', columnData: (data: any) => data.isAvailableToBuddy },
    { title: 'Assigned to', columnData: (data: any) => data.assignedTo },
    { title: 'Department', columnData: (data: any) => data.department },
    { title: 'Role', columnData: (data: any) => data.role },
    { title: '', columnData: (data: any) => data.actions },
  ];

  render() {
    return (
      <div id="users__table">
        <Table data={this.data} columns={this.columns} />
      </div>
    );
  }
}

export default UsersTable;
