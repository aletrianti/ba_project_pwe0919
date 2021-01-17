import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableCategory } from '../../../../store/interfaces/tables.interfaces';
import { connect } from 'react-redux';
import { ToggleEditCategoryModalAction, ToggleDeleteCategoryModalAction } from '../../../../store/actions/forms/forms.actions';
import { IEditCategoryModal, IDeleteCategoryModal } from '../../../../store/interfaces/forms/categories.interfaces';

interface CategoriesTableProps {
  categories: ITableCategory[];
  toggleEditCategoryModal: (editCategoryModal: IEditCategoryModal) => any;
  toggleDeleteCategoryModal: (deleteCategoryModal: IDeleteCategoryModal) => any;
}

class CategoriesTable extends React.Component<CategoriesTableProps> {
  editCategory = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditCategoryModal({ id, isOpen: true });
  };

  deleteCategory = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteCategoryModal({ id, isOpen: true });
  };

  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editCategory(id, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteCategory(id, e) },
      ]}
    />
  );

  columns = [
    { title: 'Category', columnData: (data: any) => data.title },
    { title: '', columnData: (data: any) => this.actions(data.id) },
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
    toggleEditCategoryModal: (editCategoryModal: IEditCategoryModal) =>
      dispatch(ToggleEditCategoryModalAction(editCategoryModal)),
    toggleDeleteCategoryModal: (deleteCategoryModal: IDeleteCategoryModal) =>
      dispatch(ToggleDeleteCategoryModalAction(deleteCategoryModal)),
  };
};

export default connect(null, mapDispatchToProps)(CategoriesTable);
