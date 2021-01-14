import React from 'react';
import './CategoriesAndDepartments.scss';

import AddButton from '../../common/AddButton/AddButton';
import CategoriesTable from './CategoriesAndDepartmentsTables/CategoriesTable';
import DepartmentsTable from './CategoriesAndDepartmentsTables/DepartmentsTable';

import { ITableCategory, ITableDepartment } from '../../../store/interfaces/tables.interfaces';

class CategoriesAndDepartments extends React.Component {
  openCategoriesModal = () => {};

  openDepartmentsModal = () => {};

  categories: ITableCategory[] = [{ title: 'General' }];

  departments: ITableDepartment[] = [{ title: 'Engineering' }];

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
        </div>
      </div>
    );
  }
}

export default CategoriesAndDepartments;
