import React from 'react';
import { connect } from 'react-redux';

import { IAddUserModal } from '../../../store/interfaces/forms/users.interfaces';
import { ITableUser } from '../../../store/interfaces/tables.interfaces';
import { ToggleAddUserModalAction } from '../../../store/actions/forms/forms.actions';

import AddButton from '../../common/AddButton/AddButton';
import UsersTable from './UsersTable/UsersTable';
import AddUsersForm from './UsersForms/AddUsersForm';
import EditUsersForm from './UsersForms/EditUsersForm';
import DeleteUsersForm from './UsersForms/DeleteUsersForm';
import { IEmployeeTable } from '../../../../../types/company.types';
import { getEmployees } from '../../../utils/httpRequests';

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

  getCompanyUsers = async () => {
    const users: IEmployeeTable[] = await getEmployees();

    const employeesTable: ITableUser[] = users.map(employee => {
      const user: ITableUser = {
        id: employee.ID,
        name: employee.firstName
          ? employee.lastName
            ? `${employee.firstName} ${employee.lastName}`
            : `${employee.firstName}`
          : '',
        email: employee.email,
        isAvailableToBuddy: employee.availableToBuddy,
        assignedTo: employee?.availableToBuddy ? `${employee.buddyFirstName || ''}  ${employee.buddyLastName || ''}` : '',
        department: employee?.departmentId ? employee.departmentName : '',
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
