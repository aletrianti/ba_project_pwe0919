import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleAddCategoryModalAction, ToggleEditCategoryModalAction } from '../../../../store/actions/forms/forms.actions';
import { StoreCategoryAction } from '../../../../store/actions/forms/categories/categories.actions';
import { IAddCategoryModal, IEditCategoryModal, ICategory } from '../../../../store/interfaces/forms/categories.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';
import { getTokenFromLocalStorage } from '../../../../utils/localStorageActions';

interface CategoriesFormsProps {
  category: ICategory;
  addCategoryModal: IAddCategoryModal;
  editCategoryModal: IEditCategoryModal;
  storeCategory: (category: ICategory) => any;
  toggleAddCategoryModal: (addCategoryModal: IAddCategoryModal) => any;
  toggleEditCategoryModal: (editCategoryModal: IEditCategoryModal) => any;
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
  closeAddCategoryModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.storeCategory({ category: '', isValid: false, errorMessage: '' });
    this.props.toggleAddCategoryModal({ isOpen: false });
  };
  closeEditCategoryModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.storeCategory({ category: '', isValid: false, errorMessage: '' });
    this.props.toggleEditCategoryModal({ id: 0, isOpen: false });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['category'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeCategory = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeCategory({ category: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  // Form events
  saveCategoryToDB = async (event: FormEvent): Promise<void> => {
    // TODO: add axios call here - use this.props.category
    const data = {
      name: this.props.category.category,
    };
    await axios.post('/api/category', data, this.config);
  };

  saveEditedCategoryToDB = (event: FormEvent): void => {
    // TODO: add axios call here - use this.editCategoryModal.id and this.props.category
    // the last one is an object containing these objects: category, isValid, errorMessage
    // call this after the request succeeds: this.closeEditCategoryModal(event)
  };

  render() {
    // Fields
    const addCategoryModalFields: IField[] = [{ name: 'Category', type: 'text', onchange: this.storeCategory }];
    // TODO: Add dynamic value depending on selected item
    const editCategoryModalFields: IField[] = [
      { name: 'Category', type: 'text', onchange: this.storeCategory, value: this.props.category.category },
    ];

    return (
      <>
        <Form
          fields={addCategoryModalFields}
          header={'Add a category'}
          submitFunction={this.saveCategoryToDB}
          closeFunction={this.closeAddCategoryModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.addCategoryModal.isOpen}
        />

        <Form
          fields={editCategoryModalFields}
          header={'Edit a category'}
          submitFunction={this.saveEditedCategoryToDB}
          closeFunction={this.closeEditCategoryModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.editCategoryModal.isOpen}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    category: state.category,
    addCategoryModal: state.addCategoryModal,
    editCategoryModal: state.editCategoryModal,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeCategory: (category: ICategory) => dispatch(StoreCategoryAction(category)),
    toggleAddCategoryModal: (addCategoryModal: IAddCategoryModal) => dispatch(ToggleAddCategoryModalAction(addCategoryModal)),
    toggleEditCategoryModal: (EditCategoryModal: IEditCategoryModal) =>
      dispatch(ToggleEditCategoryModalAction(EditCategoryModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(CategoriesForms);
