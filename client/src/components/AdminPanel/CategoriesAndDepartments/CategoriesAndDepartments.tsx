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
import { getTokenFromLocalStorage } from '../../../utils/localStorageActions';
import { IDepartment } from '../../../../../types/department.types';
import axios from 'axios';

interface CategoriesAndDepartmentsProps {
  toggleAddCategoryModal: (addCategoryModal: IAddCategoryModal) => any;
  toggleAddDepartmentModal: (addDepartmentModal: IAddDepartmentModal) => any;
}

interface DepartmentsState {
  companyDepartments: ITableDepartment[];
}

class CategoriesAndDepartments extends React.Component<CategoriesAndDepartmentsProps, DepartmentsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      companyDepartments: [],
    };
  }
  openCategoriesModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddCategoryModal({ isOpen: true });
  };

  openDepartmentsModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddDepartmentModal({ isOpen: true });
  };

  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  getDepartments = async () => {
    const departments: IDepartment[] = await axios.get('/api/department', this.config).then(res => {
      return res.data;
    });

    const departmentsTable: ITableDepartment[] = departments.map(department => {
      const departmentTable = {
        id: department.ID,
        title: department.name,
      };
      return departmentTable;
    });

    this.setState({ companyDepartments: departmentsTable });
  };

  async componentDidMount() {
    await this.getDepartments();
  }

  categories: ITableCategory[] = [{ id: 1, title: 'General' }];

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
            <DepartmentsTable departments={this.state.companyDepartments} />
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
