import React, { FormEvent } from 'react';
import { connect } from 'react-redux';

import { IField, IModal } from '../../../store/interfaces/forms.interfaces';
import { IUserEmail } from '../../../store/interfaces/forms/user.interfaces';
import { ITableUser } from '../../../store/interfaces/tables.interfaces';
import { checkFormFields, ICheckFields } from '../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../utils/formValidation';
import { ToggleModalAction } from '../../../store/actions/forms/forms.actions';
import { StoreEmailAction } from '../../../store/actions/forms/user/user.actions';
import { INewEmployees } from '../../../../../types/auth.types';

import AddButton from '../../common/AddButton/AddButton';
import Form from '../../common/Form/Form';
import UsersTable from './UsersTable/UsersTable';

import axios from 'axios';

interface UsersProps {
  userEmail: IUserEmail;
  storeUserEmail: (userEmail: IUserEmail) => any;
  toggleFormModal: (formModal: IModal) => any;
}

interface UsersState {
  areFieldsValid: ICheckFields;
}

class Users extends React.Component<UsersProps, UsersState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
    };
  }

  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleFormModal({ isOpen: true });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['userEmail'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  storeEmail = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.EMAIL);

    this.props.storeUserEmail({ email: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  inviteUser = (): void => {
    const data: INewEmployees = {
      newUsers: [this.props.userEmail.email],
      companyId: '43', // TODO: Get current company id
    };

    axios
      .post('/api/auth/invite-employees', data)
      .then(() => {
        console.log('Sent emails!');

        this.props.toggleFormModal({ isOpen: false });
      })
      .catch(err => console.error(err));
  };

  fields: IField[] = [{ name: 'Email', type: 'text', onchange: this.storeEmail }];

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

        <Form
          fields={this.fields}
          header={'Add a user'}
          confirmBtnName={'Invite'}
          submitFunction={this.inviteUser}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userEmail: state.userEmail,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeUserEmail: (userEmail: IUserEmail) => dispatch(StoreEmailAction(userEmail)),
    toggleFormModal: (formModal: IModal) => dispatch(ToggleModalAction(formModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(Users);
