import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleEditUserModalAction } from '../../../../store/actions/forms/forms.actions';
import { StoreBuddyAction, StoreDepartmentAction, StoreRoleAction } from '../../../../store/actions/forms/users/users.actions';
import {
  IUser,
  IEditUserModal,
  IUserBuddy,
  IUserDepartment,
  IUserRole,
} from '../../../../store/interfaces/forms/users.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';

interface EditUsersFormProps {
  user: IUser;
  editUserModal: IEditUserModal;
  storeUserBuddy: (userBuddy: IUserBuddy) => any;
  storeUserDepartment: (userDepartment: IUserDepartment) => any;
  storeUserRole: (userRole: IUserRole) => any;
  toggleEditUserModal: (userModal: IEditUserModal) => any;
}

interface EditUsersFormState {
  areFieldsValid: ICheckFields;
  userId: number;
}

class EditUsersForm extends React.Component<EditUsersFormProps, EditUsersFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
      userId: this.props.editUserModal.id,
    };
  }

  // Actions
  closeEditUserModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditUserModal({ id: 0, isOpen: false });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['userBuddy', 'userDepartment', 'userRole'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeBuddy = (data: number): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeUserBuddy({ buddy: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeDepartment = (data: number): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeUserDepartment({ department: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeRole = (data: number): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeUserRole({ role: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  // Form events
  editUser = (): void => {
    // TODO: add axios call here - use this.state.userId and this.props.user
    // the last one (it's an object containing these objects: buddy, department, role)
  };

  // Fields
  // TODO: Add dynamic data (options)
  userModalFields: IField[] = [
    { name: 'Assigned to (buddy)', type: 'select', onchange: this.storeBuddy, options: { list: [] } },
    {
      name: 'Department',
      type: 'select',
      onchange: this.storeDepartment,
      options: { list: [{ label: 'Engineering', value: 1 }] },
    },
    { name: 'Role', type: 'select', onchange: this.storeRole, options: { list: [] } },
  ];

  render() {
    return (
      <Form
        fields={this.userModalFields}
        header={'Edit a user'}
        submitFunction={this.editUser}
        closeFunction={this.closeEditUserModal}
        areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
        isModalOpen={this.props.editUserModal.isOpen}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    editUserModal: state.editUserModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeUserBuddy: (userBuddy: IUserBuddy) => dispatch(StoreBuddyAction(userBuddy)),
    storeUserDepartment: (userDepartment: IUserDepartment) => dispatch(StoreDepartmentAction(userDepartment)),
    storeUserRole: (userRole: IUserRole) => dispatch(StoreRoleAction(userRole)),
    toggleEditUserModal: (userModal: IEditUserModal) => dispatch(ToggleEditUserModalAction(userModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUsersForm);
