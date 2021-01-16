import React from 'react';
import './CategoriesAndDepartments.scss';

import AddButton from '../../common/AddButton/AddButton';
import CategoriesTable from './CategoriesAndDepartmentsTables/CategoriesTable';
import DepartmentsTable from './CategoriesAndDepartmentsTables/DepartmentsTable';
import CategoriesForms from './CategoriesAndDepartmentsForms/CategoriesForms';
import DepartmentsForms from './CategoriesAndDepartmentsForms/DepartmentsForms';
import DeleteCategoriesForm from './CategoriesAndDepartmentsForms/DeleteCategoriesForm';
import DeleteDepartmentsForm from './CategoriesAndDepartmentsForms/DeleteDepartmentsForm';

import { ITableCategory, ITableDepartment } from '../../../store/interfaces/tables.interfaces';
import { connect } from 'react-redux';
import { ToggleAddCategoryModalAction, ToggleAddDepartmentModalAction } from '../../../store/actions/forms/forms.actions';
import { IAddCategoryModal } from '../../../store/interfaces/forms/categories.interfaces';
import { IAddDepartmentModal } from '../../../store/interfaces/forms/departments.interfaces';

interface CategoriesAndDepartmentsProps {
  toggleAddCategoryModal: (addCategoryModal: IAddCategoryModal) => any;
  toggleAddDepartmentModal: (addDepartmentModal: IAddDepartmentModal) => any;
}

class CategoriesAndDepartments extends React.Component<CategoriesAndDepartmentsProps> {
  openCategoriesModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddCategoryModal({ isOpen: true });
  };

  openDepartmentsModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddDepartmentModal({ isOpen: true });
  };

  categories: ITableCategory[] = [{ id: 1, title: 'General' }];

  departments: ITableDepartment[] = [{ id: 1, title: 'Engineering' }];

  render() {
    return (
      <div id="admin-panel__categories">
        <div id="admin-panel__categories__first-half" className="admin-panel__categories__sections">
          <AddButton name={'Add category'} function={this.openCategoriesModal} />

          <div id="admin-panel__categories__content" className="admin-panel__content">
            <CategoriesTable categories={this.categories} />
          </div>
        </div>
        <div id="admin-panel__categories__second-half" className="admin-panel__categories__sections">
          <AddButton name={'Add department'} function={this.openDepartmentsModal} />

          <div id="admin-panel__categories__content" className="admin-panel__content">
            <DepartmentsTable departments={this.departments} />
          </div>

          <CategoriesForms />
          <DepartmentsForms />
          <DeleteCategoriesForm />
          <DeleteDepartmentsForm />
        </div>
      </div>
    );
  }
}

const mapDisparchToProps = (dispatch: any) => {
  return {
    toggleAddCategoryModal: (addCategoryModal: IAddCategoryModal) => dispatch(ToggleAddCategoryModalAction(addCategoryModal)),
    toggleAddDepartmentModal: (addDepartmentModal: IAddDepartmentModal) =>
      dispatch(ToggleAddDepartmentModalAction(addDepartmentModal)),
  };
};

export default connect(null, mapDisparchToProps)(CategoriesAndDepartments);
