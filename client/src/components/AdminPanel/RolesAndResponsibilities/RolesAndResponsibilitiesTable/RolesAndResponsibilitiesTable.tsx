import React from 'react';
import { connect } from 'react-redux';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { IRolesAndResponsibilities, ITableRolesAndResponsibilities } from '../../../../store/interfaces/tables.interfaces';
import { ToggleEditRoleModalAction, ToggleDeleteRoleModalAction } from '../../../../store/actions/forms/forms.actions';
import { IEditRoleModal, IDeleteRoleModal, IRole } from '../../../../store/interfaces/forms/roles.interfaces';
import { StoreRoleAction } from '../../../../store/actions/forms/roles/roles.actions';

interface RolesAndResponsibilitiesTableProps {
  rolesAndResponsibilities: IRolesAndResponsibilities[];
  storeRole: (faq: IRole) => any;
  toggleEditRoleModal: (editRoleModal: IEditRoleModal) => any;
  toggleDeleteRoleModal: (deleteRoleModal: IDeleteRoleModal) => any;
}

class RolesAndResponsibilitiesTable extends React.Component<RolesAndResponsibilitiesTableProps> {
  editRole = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.storeRole({
      title: { title: data.role, isValid: false, errorMessage: '' },
      description: { description: data.description, isValid: false, errorMessage: '' },
      responsibilities: { responsibilities: data.responsibilities },
    });
    this.props.toggleEditRoleModal({ id: data.id, isOpen: true });
  };

  deleteRole = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteRoleModal({ id: data.id, isOpen: true });
  };

  actions = (data: any) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editRole(data, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteRole(data, e) },
      ]}
    />
  );

  columns = [
    { title: 'Role', columnData: (data: any) => data.role },
    { title: 'Description', columnData: (data: any) => (data?.description ? data.description : '') },
    { title: 'Responsibilities', columnData: (data: any) => data.responsibilities }, // BUG --> I added to the responsibilities the id, so we can edit them from here.
    { title: '', columnData: (data: any) => this.actions(data) },
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
    storeRole: (role: IRole) => dispatch(StoreRoleAction(role)),
    toggleEditRoleModal: (editRoleModal: IEditRoleModal) => dispatch(ToggleEditRoleModalAction(editRoleModal)),
    toggleDeleteRoleModal: (deleteRoleModal: IDeleteRoleModal) => dispatch(ToggleDeleteRoleModalAction(deleteRoleModal)),
  };
};

export default connect(null, mapDispatchToProps)(RolesAndResponsibilitiesTable);
