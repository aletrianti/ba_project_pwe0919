import React from 'react';
import { connect } from 'react-redux';

import { IAddUserModal } from '../../../store/interfaces/forms.interfaces';
import { ITableUser } from '../../../store/interfaces/tables.interfaces';
import { ToggleAddUserModalAction } from '../../../store/actions/forms/forms.actions';

import AddButton from '../../common/AddButton/AddButton';
import UsersTable from './UsersTable/UsersTable';
import AddUsersForm from './UsersForms/AddUsersForm';
import EditUsersForm from './UsersForms/EditUsersForm';

interface UsersProps {
  toggleAddUserModal: (addUserModal: IAddUserModal) => any;
}

class Users extends React.Component<UsersProps> {
  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddUserModal({ isOpen: true });
  };

  // TODO: Add dynamic user data for the table
  users: ITableUser[] = [
    {
      id: 1,
      name: 'Bob Ross',
      email: 'bob.ross@gmail.com',
      isAvailableToBuddy: true,
      assignedTo: '',
      department: 'Design',
      role: 'Painter',
    },
  ];

  render() {
    return (
      <div id="admin-panel__users">
        <AddButton name={'Add user'} function={(e: MouseEvent) => this.openModal(e)} />

        <div id="admin-panel__users__content" className="admin-panel__content">
          <UsersTable users={this.users} />
        </div>

        <AddUsersForm />
        <EditUsersForm />
      </div>
    );
  }
}

const mapDisparchToProps = (dispatch: any) => {
  return {
    toggleAddUserModal: (addUserModal: IAddUserModal) => dispatch(ToggleAddUserModalAction(addUserModal)),
  };
};

export default connect(null, mapDisparchToProps)(Users);
