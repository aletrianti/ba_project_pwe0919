import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleAddDepartmentModalAction, ToggleEditDepartmentModalAction } from '../../../../store/actions/forms/forms.actions';
import { StoreDepartmentAction } from '../../../../store/actions/forms/departments/departments.actions';
import {
  IAddDepartmentModal,
  IEditDepartmentModal,
  IDepartment,
} from '../../../../store/interfaces/forms/departments.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';

interface CategoriesFormsProps {
  department: IDepartment;
  addDepartmentModal: IAddDepartmentModal;
  editDepartmentModal: IEditDepartmentModal;
  storeDepartment: (department: IDepartment) => any;
  toggleAddDepartmentModal: (addDepartmentModal: IAddDepartmentModal) => any;
  toggleEditDepartmentModal: (editDepartmentModal: IEditDepartmentModal) => any;
}

interface CategoriesFormsState {
  areFieldsValid: ICheckFields;
}

class CategoriesForms extends React.Component<CategoriesFormsProps, CategoriesFormsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
    };
  }

  // Actions
  closeAddDepartmentModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleAddDepartmentModal({ isOpen: false });

    this.props.storeDepartment({ department: '', isValid: false, errorMessage: '' });
  };
  closeEditDepartmentModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleEditDepartmentModal({ id: 0, isOpen: false });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['department'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeDepartment = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeDepartment({ department: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  // Form events
  saveDepartmentToDB = (event: FormEvent): void => {
    // TODO: add axios call here - use this.state.roleId and this.props.role
    // the last one is an object containing these objects: title, description, responsibilities
    // call this after the request succeeds: this.closeAddDepartmentModal(event)
  };

  saveEditedDepartmentToDB = (event: FormEvent): void => {
    // TODO: add axios call here - use this.state.roleId and this.props.role
    // the last one is an object containing these objects: title, description, responsibilities
    // call this after the request succeeds: this.closeEditDepartmentModal(event)
  };

  // Fields
  addDepartmentModalFields: IField[] = [{ name: 'Department', type: 'text', onchange: this.storeDepartment }];
  // TODO: Add dynamic value depending on selected item
  editDepartmentModalFields: IField[] = [{ name: 'Department', type: 'text', onchange: this.storeDepartment, value: '' }];

  render() {
    return (
      <>
        <Form
          fields={this.addDepartmentModalFields}
          header={'Add a department'}
          submitFunction={this.saveDepartmentToDB}
          closeFunction={this.closeAddDepartmentModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.addDepartmentModal.isOpen}
        />

        <Form
          fields={this.editDepartmentModalFields}
          header={'Edit a department'}
          submitFunction={this.saveEditedDepartmentToDB}
          closeFunction={this.closeEditDepartmentModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.editDepartmentModal.isOpen}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    department: state.department,
    addDepartmentModal: state.addDepartmentModal,
    editDepartmentModal: state.editDepartmentModal,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeDepartment: (department: IDepartment) => dispatch(StoreDepartmentAction(department)),
    toggleAddDepartmentModal: (addDepartmentModal: IAddDepartmentModal) =>
      dispatch(ToggleAddDepartmentModalAction(addDepartmentModal)),
    toggleEditDepartmentModal: (EditDepartmentModal: IEditDepartmentModal) =>
      dispatch(ToggleEditDepartmentModalAction(EditDepartmentModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(CategoriesForms);
