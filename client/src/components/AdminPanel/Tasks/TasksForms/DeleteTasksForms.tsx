import React, { MouseEvent } from 'react';

import { connect } from 'react-redux';

import { ToggleDeleteTaskModalAction } from '../../../../store/actions/forms/forms.actions';
import { IDeleteTaskModal, IDeleteTask } from '../../../../store/interfaces/forms/tasks.interfaces';
import { DeleteTaskAction } from '../../../../store/actions/forms/tasks/tasks.actions';

import DeleteForm from '../../../common/Form/DeleteForm';

interface DeleteTasksFormProps {
  deleteTaskModal: IDeleteTaskModal;
  deleteTask: (deleteTask: IDeleteTask) => any;
  toggleDeleteTaskModal: (deleteTaskModal: IDeleteTaskModal) => any;
}

interface DeleteTasksFormState {
  taskId: number;
}

class DeleteTasksForm extends React.Component<DeleteTasksFormProps, DeleteTasksFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      taskId: this.props.deleteTaskModal.id,
    };
  }

  // Actions
  closeEditTaskModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteTaskModal({ id: 0, isOpen: false });
  };

  // Form events
  deleteTask = (e: MouseEvent): void => {
    e.preventDefault();

    // TODO: add axios call here - use taskId
    // this.props.toggleDeleteTaskModal({ id: 0, isOpen: false });
  };

  render() {
    return (
      <DeleteForm
        id={this.state.taskId}
        name={'task'}
        isModalOpen={this.props.deleteTaskModal.isOpen}
        submitFunction={this.deleteTask}
        closeFunction={this.closeEditTaskModal}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    deleteTaskModal: state.deleteTaskModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteTask: (deleteTask: IDeleteTask) => dispatch(DeleteTaskAction(deleteTask)),
    toggleDeleteTaskModal: (deleteTaskModal: IDeleteTaskModal) => dispatch(ToggleDeleteTaskModalAction(deleteTaskModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTasksForm);
