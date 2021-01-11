import React from 'react';

import store from '../../../index';
import { TOGGLE_MODAL } from '../../../store/actions/forms/forms.types';
import { STORE_USER_EMAIL } from '../../../store/actions/forms/user/user.actions';
import { IField, IModal, IToggleModalAction } from '../../../store/interfaces/forms.interfaces';
import { IStoreUserEmailAction, IUserEmail } from '../../../store/interfaces/forms/user.interfaces';
import { checkFormFields, ICheckFields } from '../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../utils/formValidation';

import AddButton from '../../common/AddButton/AddButton';
import Form from '../../common/Form/Form';
import UsersTable from './UsersTable/UsersTable';

class Users extends React.Component {
  openModal = (e: MouseEvent) => {
    e.preventDefault();

    const payload: IModal = { isOpen: true };
    const action: IToggleModalAction = { type: TOGGLE_MODAL, payload };

    store.dispatch(action);
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['userEmail'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  storeEmail = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.EMAIL);
    const payload: IUserEmail = { email: data, isValid: isValid, errorMessage: message };
    const action: IStoreUserEmailAction = { type: STORE_USER_EMAIL, payload };

    store.dispatch(action);

    this.checkFields();

    return { isValid, message };
  };

  // Add user form data
  fields: IField[] = [{ name: 'Email', type: 'text', onchange: this.storeEmail }];

  render() {
    return (
      <div id="admin-panel__users">
        <AddButton name={'Add user'} function={(e: MouseEvent) => this.openModal(e)} />

        <div id="admin-panel__users__content" className="admin-panel__content">
          <UsersTable />
        </div>

        <Form fields={this.fields} header={'Add a user'} confirmBtnName={'Invite'} />
      </div>
    );
  }
}

export default Users;
