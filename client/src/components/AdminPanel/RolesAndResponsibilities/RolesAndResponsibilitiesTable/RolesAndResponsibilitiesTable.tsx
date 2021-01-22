import React from 'react';
import { connect } from 'react-redux';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { IRolesAndResponsibilities } from '../../../../store/interfaces/tables.interfaces';
import { ToggleEditRoleModalAction, ToggleDeleteRoleModalAction } from '../../../../store/actions/forms/forms.actions';
import {
  IEditRoleModal,
  IDeleteRoleModal,
  IRole,
  IRoleResponsibility,
} from '../../../../store/interfaces/forms/roles.interfaces';
import { StoreResponsibilityAction, StoreRoleAction } from '../../../../store/actions/forms/roles/roles.actions';

interface RolesAndResponsibilitiesTableProps {
  rolesAndResponsibilities: IRolesAndResponsibilities[];
  storeRole: (faq: IRole) => any;
  storeRoleResponsibility: (responsibility: IRoleResponsibility) => any;
  toggleEditRoleModal: (editRoleModal: IEditRoleModal) => any;
  toggleDeleteRoleModal: (deleteRoleModal: IDeleteRoleModal) => any;
}

class RolesAndResponsibilitiesTable extends React.Component<RolesAndResponsibilitiesTableProps> {
  editRole = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.storeRole({
      title: { title: data.role, isValid: true, errorMessage: '' },
      description: { description: data.description, isValid: true, errorMessage: '' },
      responsibilities: { responsibilities: data.responsibilities },
    });
    this.props.storeRoleResponsibility({ responsibility: '', isValid: true, errorMessage: '' });
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
    storeRoleResponsibility: (responsibility: IRoleResponsibility) => dispatch(StoreResponsibilityAction(responsibility)),
    toggleEditRoleModal: (editRoleModal: IEditRoleModal) => dispatch(ToggleEditRoleModalAction(editRoleModal)),
    toggleDeleteRoleModal: (deleteRoleModal: IDeleteRoleModal) => dispatch(ToggleDeleteRoleModalAction(deleteRoleModal)),
  };
};

export default connect(null, mapDispatchToProps)(RolesAndResponsibilitiesTable);
