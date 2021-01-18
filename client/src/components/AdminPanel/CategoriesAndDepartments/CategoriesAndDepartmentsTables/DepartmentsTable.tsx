import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableDepartment } from '../../../../store/interfaces/tables.interfaces';
import { connect } from 'react-redux';
import {
  ToggleEditDepartmentModalAction,
  ToggleDeleteDepartmentModalAction,
} from '../../../../store/actions/forms/forms.actions';
import {
  IEditDepartmentModal,
  IDeleteDepartmentModal,
  IDepartment,
} from '../../../../store/interfaces/forms/departments.interfaces';
import { StoreDepartmentAction } from '../../../../store/actions/forms/departments/departments.actions';

interface DepartmentsTableProps {
  departments: ITableDepartment[];
  storeDepartment: (department: IDepartment) => any;
  toggleEditDepartmentModal: (editDepartmentModal: IEditDepartmentModal) => any;
  toggleDeleteDepartmentModal: (deleteDepartmentModal: IDeleteDepartmentModal) => any;
}

class DepartmentsTable extends React.Component<DepartmentsTableProps> {
  editDepartment = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.storeDepartment({ department: data.title, isValid: true, errorMessage: '' });
    this.props.toggleEditDepartmentModal({ id: data.id, isOpen: true });
  };

  deleteDepartment = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.storeDepartment({ department: '', isValid: true, errorMessage: '' });
    this.props.toggleDeleteDepartmentModal({ id: data.id, isOpen: true });
  };

  actions = (data: any) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editDepartment(data, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteDepartment(data, e) },
      ]}
    />
  );

  columns = [
    { title: 'Department', columnData: (data: any) => data.title },
    { title: '', columnData: (data: any) => this.actions(data) },
  ];

  render() {
    return (
      <div id="departments__table">
        <Table data={this.props.departments} columns={this.columns} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeDepartment: (department: IDepartment) => dispatch(StoreDepartmentAction(department)),
    toggleEditDepartmentModal: (editDepartmentModal: IEditDepartmentModal) =>
      dispatch(ToggleEditDepartmentModalAction(editDepartmentModal)),
    toggleDeleteDepartmentModal: (deleteDepartmentModal: IDeleteDepartmentModal) =>
      dispatch(ToggleDeleteDepartmentModalAction(deleteDepartmentModal)),
  };
};

export default connect(null, mapDispatchToProps)(DepartmentsTable);
