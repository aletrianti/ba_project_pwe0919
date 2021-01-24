import React, { MouseEvent } from 'react';

import { connect } from 'react-redux';

import { ToggleDeleteDepartmentModalAction } from '../../../../store/actions/forms/forms.actions';
import { IDeleteDepartmentModal, IDeleteDepartment } from '../../../../store/interfaces/forms/departments.interfaces';
import { DeleteDepartmentAction } from '../../../../store/actions/forms/departments/departments.actions';

import DeleteForm from '../../../common/Form/DeleteForm';
import { deleteDepartment } from '../../../../utils/httpRequests';

interface DeleteDepartmentsFormProps {
  deleteDepartmentModal: IDeleteDepartmentModal;
  deleteDepartment: (deleteDepartment: IDeleteDepartment) => any;
  toggleDeleteDepartmentModal: (deleteDepartmentModal: IDeleteDepartmentModal) => any;
}

interface DeleteDepartmentsFormState {
  departmentId: number;
}

class DeleteDepartmentsForm extends React.Component<DeleteDepartmentsFormProps, DeleteDepartmentsFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      departmentId: this.props.deleteDepartmentModal.id,
    };
  }

  // Actions
  closeEditDepartmentModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteDepartmentModal({ id: 0, isOpen: false });
  };

  // Form events
  deleteDepartment = async (): Promise<void> => {
    // e.preventDefault();

    await deleteDepartment(this.props.deleteDepartmentModal);
  };

  render() {
    return (
      <DeleteForm
        id={this.state.departmentId}
        name={'department'}
        isModalOpen={this.props.deleteDepartmentModal.isOpen}
        submitFunction={this.deleteDepartment}
        closeFunction={this.closeEditDepartmentModal}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    deleteDepartmentModal: state.deleteDepartmentModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteDepartment: (deleteDepartment: IDeleteDepartment) => dispatch(DeleteDepartmentAction(deleteDepartment)),
    toggleDeleteDepartmentModal: (deleteDepartmentModal: IDeleteDepartmentModal) =>
      dispatch(ToggleDeleteDepartmentModalAction(deleteDepartmentModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDepartmentsForm);
