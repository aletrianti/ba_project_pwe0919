import React, { MouseEvent } from 'react';

import { connect } from 'react-redux';

import { ToggleDeleteUserModalAction } from '../../../../store/actions/forms/forms.actions';
import { IDeleteUserModal, IDeleteUser } from '../../../../store/interfaces/forms/users.interfaces';
import { DeleteUserAction } from '../../../../store/actions/forms/users/users.actions';

import DeleteForm from '../../../common/Form/DeleteForm';
import { deleteEmployee } from '../../../../utils/httpRequests';

interface DeleteUsersFormProps {
  deleteUserModal: IDeleteUserModal;
  deleteUser: (deleteUser: IDeleteUser) => any;
  toggleDeleteUserModal: (deleteUserModal: IDeleteUserModal) => any;
}

interface DeleteUsersFormState {
  userId: number;
}

class DeleteUsersForm extends React.Component<DeleteUsersFormProps, DeleteUsersFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      userId: this.props.deleteUserModal.id,
    };
  }

  // Actions
  closeEditUserModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteUserModal({ id: 0, isOpen: false });
  };

  // Form events
  deleteUser = async (e: MouseEvent) => {
    await deleteEmployee(this.props.deleteUserModal).then(() => this.closeEditUserModal(e));
  };

  render() {
    return (
      <DeleteForm
        id={this.state.userId}
        name={'user'}
        isModalOpen={this.props.deleteUserModal.isOpen}
        submitFunction={this.deleteUser}
        closeFunction={this.closeEditUserModal}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    deleteUserModal: state.deleteUserModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteUser: (deleteUser: IDeleteUser) => dispatch(DeleteUserAction(deleteUser)),
    toggleDeleteUserModal: (deleteUserModal: IDeleteUserModal) => dispatch(ToggleDeleteUserModalAction(deleteUserModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUsersForm);
