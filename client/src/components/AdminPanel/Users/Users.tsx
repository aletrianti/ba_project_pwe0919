import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { IAddUserModal } from '../../../store/interfaces/forms/users.interfaces';
import { ITableUser } from '../../../store/interfaces/tables.interfaces';
import { ToggleAddUserModalAction } from '../../../store/actions/forms/forms.actions';

import AddButton from '../../common/AddButton/AddButton';
import UsersTable from './UsersTable/UsersTable';
import AddUsersForm from './UsersForms/AddUsersForm';
import EditUsersForm from './UsersForms/EditUsersForm';
import DeleteUsersForm from './UsersForms/DeleteUsersForm';
import { getTokenFromLocalStorage } from '../../../utils/localStorageActions';
import { ICompanyEmployee } from '../../../../../types/company.types';

interface UsersProps {
  toggleAddUserModal: (addUserModal: IAddUserModal) => any;
}

interface UserState {
  companyUsers: ITableUser[];
}

class Users extends React.Component<UsersProps, UserState> {
  constructor(props: any) {
    super(props);

    this.state = {
      companyUsers: [],
    };
  }

  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddUserModal({ isOpen: true });
  };

  // TODO: Add dynamic user data for the table
  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  getCompanyUsers = async () => {
    const users: ICompanyEmployee[] = await axios.get('/api/company/employees', this.config).then(res => {
      return res.data;
    });

    const employeesTable: ITableUser[] = users.map(employee => {
      console.log(employee.title);

      const user: ITableUser = {
        id: employee.ID,
        name: `${employee.firstName} ${employee.lastName}`,
        email: employee.email,
        isAvailableToBuddy: employee.availableToBuddy,
        assignedTo: '',
        department: '',
        role: employee?.title ? employee.title : '',
      };
      return user;
    });

    this.setState({ companyUsers: employeesTable });
  };

  componentDidMount() {
    this.getCompanyUsers();
  }
  render() {
    return (
      <div id="admin-panel__users">
        <AddButton name={'Add user'} function={(e: MouseEvent) => this.openModal(e)} />

        <div id="admin-panel__users__content" className="admin-panel__content">
          <UsersTable users={this.state.companyUsers} />
        </div>

        <AddUsersForm />
        <EditUsersForm />
        <DeleteUsersForm />
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
