import React from 'react';
import './CategoriesAndDepartments.scss';

import AddButton from '../../common/AddButton/AddButton';
import CategoriesTable from './CategoriesAndDepartmentsTables/CategoriesTable';
import DepartmentsTable from './CategoriesAndDepartmentsTables/DepartmentsTable';

class CategoriesAndDepartments extends React.Component {
  openCategoriesModal = () => {};

  openDepartmentsModal = () => {};

  render() {
    return (
      <div id="admin-panel__categories">
        <div id="admin-panel__categories__first-half" className="admin-panel__categories__sections">
          <AddButton name={'Add category'} function={this.openCategoriesModal} />

          <div id="admin-panel__categories__content" className="admin-panel__content">
            <CategoriesTable />
          </div>
        </div>
        <div id="admin-panel__categories__second-half" className="admin-panel__categories__sections">
          <AddButton name={'Add department'} function={this.openDepartmentsModal} />

          <div id="admin-panel__categories__content" className="admin-panel__content">
            <DepartmentsTable />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesAndDepartments;
