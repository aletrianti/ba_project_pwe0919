import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableUser } from '../../../../store/interfaces/tables.interfaces';
import { ToggleDeleteUserModalAction, ToggleEditUserModalAction } from '../../../../store/actions/forms/forms.actions';
import { IDeleteUserModal, IEditUserModal } from '../../../../store/interfaces/forms/users.interfaces';
import { connect } from 'react-redux';

interface UsersTableProps {
  users: ITableUser[];
  toggleEditUserModal: (editUserModal: IEditUserModal) => any;
  toggleDeleteUserModal: (deleteUserModal: IDeleteUserModal) => any;
}

class UsersTable extends React.Component<UsersTableProps> {
  editUser = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditUserModal({ id, isOpen: true });
  };

  deleteUser = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteUserModal({ id, isOpen: true });
  };

  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editUser(id, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteUser(id, e) },
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
    { title: '', columnData: (data: any) => this.actions(data.id) },
  ];

  render() {
    return (
      <div id="users__table">
        <Table data={this.props.users} columns={this.columns} />
      </div>
    );
  }
}

const mapDisparchToProps = (dispatch: any) => {
  return {
    toggleEditUserModal: (editUserModal: IEditUserModal) => dispatch(ToggleEditUserModalAction(editUserModal)),
    toggleDeleteUserModal: (deleteUserModal: IDeleteUserModal) => dispatch(ToggleDeleteUserModalAction(deleteUserModal)),
  };
};

export default connect(null, mapDisparchToProps)(UsersTable);
