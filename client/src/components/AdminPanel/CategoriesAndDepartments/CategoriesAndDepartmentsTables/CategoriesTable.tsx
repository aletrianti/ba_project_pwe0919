import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableCategory } from '../../../../store/interfaces/tables.interfaces';
import { connect } from 'react-redux';
import { ToggleEditCategoryModalAction, ToggleDeleteCategoryModalAction } from '../../../../store/actions/forms/forms.actions';
import { IEditCategoryModal, IDeleteCategoryModal, ICategory } from '../../../../store/interfaces/forms/categories.interfaces';
import { StoreCategoryAction } from '../../../../store/actions/forms/categories/categories.actions';

interface CategoriesTableProps {
  categories: ITableCategory[];
  storeCategory: (category: ICategory) => any;
  toggleEditCategoryModal: (editCategoryModal: IEditCategoryModal) => any;
  toggleDeleteCategoryModal: (deleteCategoryModal: IDeleteCategoryModal) => any;
}

class CategoriesTable extends React.Component<CategoriesTableProps> {
  editCategory = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.storeCategory({ category: data.title, isValid: true, errorMessage: '' });
    this.props.toggleEditCategoryModal({ id: data.id, isOpen: true });
  };

  deleteCategory = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.storeCategory({ category: '', isValid: true, errorMessage: '' });
    this.props.toggleDeleteCategoryModal({ id: data.id, isOpen: true });
  };

  actions = (data: any) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editCategory(data, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteCategory(data, e) },
      ]}
    />
  );

  columns = [
    { title: 'Category', columnData: (data: any) => data.title },
    { title: '', columnData: (data: any) => this.actions(data) },
  ];

  render() {
    return (
      <div id="categories__table">
        <Table data={this.props.categories} columns={this.columns} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeCategory: (category: ICategory) => dispatch(StoreCategoryAction(category)),
    toggleEditCategoryModal: (editCategoryModal: IEditCategoryModal) =>
      dispatch(ToggleEditCategoryModalAction(editCategoryModal)),
    toggleDeleteCategoryModal: (deleteCategoryModal: IDeleteCategoryModal) =>
      dispatch(ToggleDeleteCategoryModalAction(deleteCategoryModal)),
  };
};

export default connect(null, mapDispatchToProps)(CategoriesTable);
