import React from 'react';
import { connect } from 'react-redux';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableRolesAndResponsibilities } from '../../../../store/interfaces/tables.interfaces';
import { ToggleEditRoleModalAction, ToggleDeleteRoleModalAction } from '../../../../store/actions/forms/forms.actions';
import { IEditRoleModal, IDeleteRoleModal } from '../../../../store/interfaces/forms/roles.interfaces';

interface RolesAndResponsibilitiesTableProps {
  rolesAndResponsibilities: ITableRolesAndResponsibilities[];
  toggleEditRoleModal: (editRoleModal: IEditRoleModal) => any;
  toggleDeleteRoleModal: (deleteRoleModal: IDeleteRoleModal) => any;
}

class RolesAndResponsibilitiesTable extends React.Component<RolesAndResponsibilitiesTableProps> {
  editRole = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditRoleModal({ id, isOpen: true });
  };

  deleteRole = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteRoleModal({ id, isOpen: true });
  };

  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editRole(id, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteRole(id, e) },
      ]}
    />
  );

  columns = [
    { title: 'Role', columnData: (data: any) => data.role },
    { title: 'Description', columnData: (data: any) => data.description },
    { title: 'Responsibilities', columnData: (data: any) => data.responsibilities },
    { title: '', columnData: (data: any) => this.actions(data.id) },
  ];

  render() {
    return (
      <div id="roles__table">
        <Table data={this.props.rolesAndResponsibilities} columns={this.columns} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleEditRoleModal: (editRoleModal: IEditRoleModal) => dispatch(ToggleEditRoleModalAction(editRoleModal)),
    toggleDeleteRoleModal: (deleteRoleModal: IDeleteRoleModal) => dispatch(ToggleDeleteRoleModalAction(deleteRoleModal)),
  };
};

export default connect(null, mapDispatchToProps)(RolesAndResponsibilitiesTable);
