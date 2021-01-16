import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableDepartment } from '../../../../store/interfaces/tables.interfaces';
import { connect } from 'react-redux';
import {
  ToggleEditDepartmentModalAction,
  ToggleDeleteDepartmentModalAction,
} from '../../../../store/actions/forms/forms.actions';
import { IEditDepartmentModal, IDeleteDepartmentModal } from '../../../../store/interfaces/forms/departments.interfaces';

interface DepartmentsTableProps {
  departments: ITableDepartment[];
  toggleEditDepartmentModal: (editDepartmentModal: IEditDepartmentModal) => any;
  toggleDeleteDepartmentModal: (deleteDepartmentModal: IDeleteDepartmentModal) => any;
}

class DepartmentsTable extends React.Component<DepartmentsTableProps> {
  editDepartment = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditDepartmentModal({ id, isOpen: true });
  };

  deleteDepartment = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteDepartmentModal({ id, isOpen: true });
  };

  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editDepartment(id, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteDepartment(id, e) },
      ]}
    />
  );

  columns = [
    { title: 'Department', columnData: (data: any) => data.title },
    { title: '', columnData: (data: any) => this.actions(data.id) },
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
    toggleEditDepartmentModal: (editDepartmentModal: IEditDepartmentModal) =>
      dispatch(ToggleEditDepartmentModalAction(editDepartmentModal)),
    toggleDeleteDepartmentModal: (deleteDepartmentModal: IDeleteDepartmentModal) =>
      dispatch(ToggleDeleteDepartmentModalAction(deleteDepartmentModal)),
  };
};

export default connect(null, mapDispatchToProps)(DepartmentsTable);
