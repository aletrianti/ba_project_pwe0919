import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { INewEmployees } from '../../../../../../types/auth.types';
import { ToggleAddUserModalAction } from '../../../../store/actions/forms/forms.actions';
import { StoreEmailAction } from '../../../../store/actions/forms/user/user.actions';
import { IAddUserModal, IField } from '../../../../store/interfaces/forms.interfaces';
import { IUserEmail } from '../../../../store/interfaces/forms/user.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';

interface AddUsersFormProps {
  userEmail: IUserEmail;
  addUserModal: IAddUserModal;
  storeUserEmail: (userEmail: IUserEmail) => any;
  toggleAddUserModal: (addUserModal: IAddUserModal) => any;
}

interface AddUsersFormState {
  areFieldsValid: ICheckFields;
}

class AddUsersForm extends React.Component<AddUsersFormProps, AddUsersFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
    };
  }

  // Actions
  closeAddUserModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddUserModal({ isOpen: false });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['userEmail'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeEmail = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.EMAIL);

    this.props.storeUserEmail({ email: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  // Form events
  inviteUser = (): void => {
    const data: INewEmployees = {
      newUsers: [this.props.userEmail.email],
      companyId: '43', // TODO: Get current company id
    };

    axios
      .post('/api/auth/invite-employees', data)
      .then(() => {
        console.log('Sent emails!');

        this.props.toggleAddUserModal({ isOpen: false });
      })
      .catch(err => console.error(err));
  };

  // Fields
  addUserModalFields: IField[] = [{ name: 'Email', type: 'text', onchange: this.storeEmail }];

  render() {
    return (
      <Form
        fields={this.addUserModalFields}
        header={'Add a user'}
        confirmBtnName={'Invite'}
        submitFunction={this.inviteUser}
        closeFunction={this.closeAddUserModal}
        areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
        isModalOpen={this.props.addUserModal.isOpen}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userEmail: state.userEmail,
    addUserModal: state.addUserModal,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeUserEmail: (userEmail: IUserEmail) => dispatch(StoreEmailAction(userEmail)),
    toggleAddUserModal: (addUserModal: IAddUserModal) => dispatch(ToggleAddUserModalAction(addUserModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(AddUsersForm);
