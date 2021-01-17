import React, { FormEvent, MouseEvent } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleDeleteCategoryModalAction } from '../../../../store/actions/forms/forms.actions';
import { IDeleteCategoryModal, IDeleteCategory } from '../../../../store/interfaces/forms/categories.interfaces';
import { DeleteCategoryAction } from '../../../../store/actions/forms/categories/categories.actions';

import DeleteForm from '../../../common/Form/DeleteForm';

interface DeleteCategorysFormProps {
  deleteCategoryModal: IDeleteCategoryModal;
  deleteCategory: (deleteCategory: IDeleteCategory) => any;
  toggleDeleteCategoryModal: (deleteCategoryModal: IDeleteCategoryModal) => any;
}

interface DeleteCategorysFormState {
  categoryId: number;
}

class DeleteCategorysForm extends React.Component<DeleteCategorysFormProps, DeleteCategorysFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      categoryId: this.props.deleteCategoryModal.id,
    };
  }

  // Actions
  closeEditCategoryModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteCategoryModal({ id: 0, isOpen: false });
  };

  // Form events
  deleteCategory = (e: MouseEvent): void => {
    // TODO: add axios call here - use categoryId
    // this.props.toggleDeleteCategoryModal({ id: 0, isOpen: false });
  };

  render() {
    return (
      <DeleteForm
        id={this.state.categoryId}
        name={'category'}
        isModalOpen={this.props.deleteCategoryModal.isOpen}
        submitFunction={this.deleteCategory}
        closeFunction={this.closeEditCategoryModal}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    deleteCategoryModal: state.deleteCategoryModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteCategory: (deleteCategory: IDeleteCategory) => dispatch(DeleteCategoryAction(deleteCategory)),
    toggleDeleteCategoryModal: (deleteCategoryModal: IDeleteCategoryModal) =>
      dispatch(ToggleDeleteCategoryModalAction(deleteCategoryModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCategorysForm);
