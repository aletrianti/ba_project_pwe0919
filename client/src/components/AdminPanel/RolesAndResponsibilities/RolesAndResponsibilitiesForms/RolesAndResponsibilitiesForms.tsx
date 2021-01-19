import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import {
  StoreTitleAction,
  StoreDescriptionAction,
  StoreResponsibilityAction,
  StoreResponsibilitiesAction,
  StoreRoleAction,
} from '../../../../store/actions/forms/roles/roles.actions';
import { ToggleAddRoleModalAction, ToggleEditRoleModalAction } from '../../../../store/actions/forms/forms.actions';
import { IField } from '../../../../store/interfaces/forms.interfaces';
import {
  IRoleTitle,
  IRoleDescription,
  IRoleResponsibility,
  IAddRoleModal,
  IEditRoleModal,
  IRoleResponsibilities,
  IRole,
} from '../../../../store/interfaces/forms/roles.interfaces';
import { validator, validatorTypes } from '../../../../utils/formValidation';
import Form from '../../../common/Form/Form';

interface RolesAndResponsibilitiesFormsProps {
  roleTitle: IRoleTitle;
  roleDescription: IRoleDescription;
  roleResponsibility: IRoleResponsibility;
  roleResponsibilities: IRoleResponsibilities;
  role: IRole;
  addRoleModal: IAddRoleModal;
  editRoleModal: IEditRoleModal;
  storeRoleTitle: (roleTitle: IRoleTitle) => any;
  storeRoleDescription: (roleDescription: IRoleDescription) => any;
  storeRoleResponsibility: (roleResponsibility: IRoleResponsibility) => any;
  storeRoleResponsibilities: (roleResponsibilities: IRoleResponsibilities) => any;
  storeRole: (role: IRole) => any;
  toggleAddRoleModal: (addRoleModal: IAddRoleModal) => any;
  toggleEditRoleModal: (editRoleModal: IEditRoleModal) => any;
}

interface RolesAndResponsibilitiesFormsState {
  areFieldsValid: ICheckFields;
  responsibilities: any[];
}

class RolesAndResponsibilitiesForms extends React.Component<
  RolesAndResponsibilitiesFormsProps,
  RolesAndResponsibilitiesFormsState
> {
  constructor(props: any) {
    super(props);

    const responsibilitiesArray = this.props.role.responsibilities.responsibilities;
    const responsibilities = responsibilitiesArray.map(item => item.description);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
      responsibilities: responsibilities || [],
    };
  }

  // Actions
  closeAddRoleModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleAddRoleModal({ isOpen: false });

    this.props.storeRole({
      title: { title: '', isValid: false, errorMessage: '' },
      description: { description: '', isValid: false, errorMessage: '' },
      responsibilities: { responsibilities: [] },
    });
    this.props.storeRoleTitle({ title: '', isValid: false, errorMessage: '' });
    this.props.storeRoleDescription({ description: '', isValid: false, errorMessage: '' });
    this.props.storeRoleResponsibility({ responsibility: '', isValid: false, errorMessage: '' });
    this.props.storeRoleResponsibilities({ responsibilities: [] });
  };
  closeEditRoleModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.storeRole({
      title: { title: '', isValid: false, errorMessage: '' },
      description: { description: '', isValid: false, errorMessage: '' },
      responsibilities: { responsibilities: [] },
    });
    this.props.storeRoleTitle({ title: '', isValid: false, errorMessage: '' });
    this.props.storeRoleDescription({ description: '', isValid: false, errorMessage: '' });
    this.props.storeRoleResponsibility({ responsibility: '', isValid: false, errorMessage: '' });
    this.props.storeRoleResponsibilities({ responsibilities: [] });
    this.props.toggleEditRoleModal({ id: 0, isOpen: false });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['roleTitle', 'roleDescription', 'roleResponsibility'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeTitle = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeRoleTitle({ title: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeDescription = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeRoleDescription({ description: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeResponsibility = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeRoleResponsibility({ responsibility: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  addResponsibility = (): void => {
    const responsibility = this.props.roleResponsibility.responsibility;

    this.setState({ responsibilities: [...this.state.responsibilities, responsibility] });
  };
  storeResponsibilities = (): any => {
    this.props.storeRoleResponsibilities({ responsibilities: this.state.responsibilities });
  };
  displayResponsibilities = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.addResponsibility();
    await this.storeResponsibilities();
  };

  // Form events
  saveRoleToRedux = (): void => {
    this.props.storeRole({
      title: this.props.roleTitle,
      description: this.props.roleDescription,
      responsibilities: this.props.roleResponsibilities,
    });
  };

  saveRoleToDB = (): void => {
    // TODO: add axios call here - use this.props.role
    // the last one is an object containing these objects: title, description, responsibilities
  };

  saveEditedRoleToDB = (): void => {
    // TODO: add axios call here - use this.state.roleId and this.props.role
    // the last one is an object containing these objects: title, description, responsibilities
  };

  addRole = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveRoleToRedux();
    await this.saveRoleToDB();

    this.closeAddRoleModal(event);
  };

  editRole = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveEditedRoleToDB();
    await this.saveRoleToDB();

    this.closeEditRoleModal(event);
  };

  render() {
    // Fields
    const addRoleModalFields: IField[] = [
      { name: 'Title', type: 'text', onchange: this.storeTitle },
      { name: 'Description', type: 'textarea', onchange: this.storeDescription },
      { name: 'Responsibility', type: 'text', onchange: this.storeResponsibility, isShortField: true },
    ];
    // TODO: Add dynamic value depending on selected item
    const editRoleModalFields: IField[] = [
      { name: 'Title', type: 'text', onchange: this.storeTitle, value: this.props.role.title.title },
      { name: 'Description', type: 'textarea', onchange: this.storeDescription, value: this.props.role.description.description },
      {
        name: 'Responsibility',
        type: 'text',
        onchange: this.storeResponsibility,
        isShortField: true,
      },
    ];

    return (
      <>
        <Form
          fields={addRoleModalFields}
          header={'Add a role'}
          submitFunction={this.addRole}
          closeFunction={this.closeAddRoleModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.addRoleModal.isOpen}
          shortFieldFunction={this.displayResponsibilities}
          list={this.state.responsibilities}
        />

        <Form
          fields={editRoleModalFields}
          header={'Edit a role'}
          submitFunction={this.editRole}
          closeFunction={this.closeEditRoleModal}
          areFieldsValid={true}
          isModalOpen={this.props.editRoleModal.isOpen}
          shortFieldFunction={this.displayResponsibilities}
          list={this.state.responsibilities}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    roleTitle: state.roleTitle,
    roleDescription: state.roleDescription,
    roleResponsibility: state.roleResponsibility,
    roleResponsibilities: state.roleResponsibilities,
    role: state.role,
    addRoleModal: state.addRoleModal,
    editRoleModal: state.editRoleModal,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeRoleTitle: (roleTitle: IRoleTitle) => dispatch(StoreTitleAction(roleTitle)),
    storeRoleDescription: (roleDescription: IRoleDescription) => dispatch(StoreDescriptionAction(roleDescription)),
    storeRoleResponsibility: (roleResponsibility: IRoleResponsibility) => dispatch(StoreResponsibilityAction(roleResponsibility)),
    storeRoleResponsibilities: (roleResponsibilities: IRoleResponsibilities) =>
      dispatch(StoreResponsibilitiesAction(roleResponsibilities)),
    storeRole: (role: IRole) => dispatch(StoreRoleAction(role)),
    toggleAddRoleModal: (addRoleModal: IAddRoleModal) => dispatch(ToggleAddRoleModalAction(addRoleModal)),
    toggleEditRoleModal: (editRoleModal: IEditRoleModal) => dispatch(ToggleEditRoleModalAction(editRoleModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(RolesAndResponsibilitiesForms);
