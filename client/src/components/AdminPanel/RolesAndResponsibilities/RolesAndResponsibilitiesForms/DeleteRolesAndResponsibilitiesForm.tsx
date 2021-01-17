import React, { FormEvent, MouseEvent } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleDeleteRoleModalAction } from '../../../../store/actions/forms/forms.actions';
import { IDeleteRoleModal, IDeleteRole } from '../../../../store/interfaces/forms/roles.interfaces';
import { DeleteRoleAction } from '../../../../store/actions/forms/roles/roles.actions';

import DeleteForm from '../../../common/Form/DeleteForm';

interface DeleteRolesAndResponsibilitiesFormProps {
  deleteRoleModal: IDeleteRoleModal;
  deleteRole: (deleteRole: IDeleteRole) => any;
  toggleDeleteRoleModal: (deleteRoleModal: IDeleteRoleModal) => any;
}

interface DeleteRolesAndResponsibilitiesFormState {
  roleId: number;
}

class DeleteRolesAndResponsibilitiesForm extends React.Component<
  DeleteRolesAndResponsibilitiesFormProps,
  DeleteRolesAndResponsibilitiesFormState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      roleId: this.props.deleteRoleModal.id,
    };
  }

  // Actions
  closeEditRoleModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteRoleModal({ id: 0, isOpen: false });
  };

  // Form events
  deleteRole = (e: MouseEvent): void => {
    e.preventDefault();

    // TODO: add axios call here - use roleId
    // this.props.toggleDeleteRoleModal({ id: 0, isOpen: false });
  };

  render() {
    return (
      <DeleteForm
        id={this.state.roleId}
        name={'role'}
        isModalOpen={this.props.deleteRoleModal.isOpen}
        submitFunction={this.deleteRole}
        closeFunction={this.closeEditRoleModal}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    deleteRoleModal: state.deleteRoleModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteRole: (deleteRole: IDeleteRole) => dispatch(DeleteRoleAction(deleteRole)),
    toggleDeleteRoleModal: (deleteRoleModal: IDeleteRoleModal) => dispatch(ToggleDeleteRoleModalAction(deleteRoleModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteRolesAndResponsibilitiesForm);
