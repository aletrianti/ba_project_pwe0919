import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableUser } from '../../../../store/interfaces/tables.interfaces';

interface UsersTableProps {
  users: ITableUser[];
}

class UsersTable extends React.Component<UsersTableProps> {
  actions = (
    <Actions
      actions={[
        { name: 'Edit', function: () => {} },
        { name: 'Delete', function: () => {} },
      ]}
    />
  );

  columns = [
    { title: 'First and last name', columnData: (data: any) => data.name },
    { title: 'Email', columnData: (data: any) => data.email },
    { title: 'Buddy availability', columnData: (data: any) => data.isAvailableToBuddy },
    { title: 'Assigned to', columnData: (data: any) => data.assignedTo },
    { title: 'Department', columnData: (data: any) => data.department },
    { title: 'Role', columnData: (data: any) => data.role },
    { title: '', columnData: () => this.actions },
  ];

  render() {
    return (
      <div id="users__table">
        <Table data={this.props.users} columns={this.columns} />
      </div>
    );
  }
}

export default UsersTable;
