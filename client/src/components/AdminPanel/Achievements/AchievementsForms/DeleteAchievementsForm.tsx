import React, { FormEvent, MouseEvent } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleDeleteAchievementModalAction } from '../../../../store/actions/forms/forms.actions';
import { IDeleteAchievementModal, IDeleteAchievement } from '../../../../store/interfaces/forms/achievements.interfaces';
import { DeleteAchievementAction } from '../../../../store/actions/forms/achievements/achievements.actions';

import DeleteForm from '../../../common/Form/DeleteForm';
import { getTokenFromLocalStorage } from '../../../../utils/localStorageActions';
import { deleteAchievement } from '../../../../utils/httpRequests';

interface DeleteAchievementsFormProps {
  deleteAchievementModal: IDeleteAchievementModal;
  deleteAchievement: (deleteAchievement: IDeleteAchievement) => any;
  toggleDeleteAchievementModal: (deleteAchievementModal: IDeleteAchievementModal) => any;
}

interface DeleteAchievementsFormState {
  achievementId: number;
}

class DeleteAchievementsForm extends React.Component<DeleteAchievementsFormProps, DeleteAchievementsFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      achievementId: this.props.deleteAchievementModal.id,
    };
  }

  // Actions
  closeEditAchievementModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteAchievementModal({ id: 0, isOpen: false });
  };

  // Form events
  deleteAchievement = async (e: MouseEvent): Promise<void> => {
    await deleteAchievement(this.props.deleteAchievementModal);
  };

  render() {
    return (
      <DeleteForm
        id={this.state.achievementId}
        name={'achievement'}
        isModalOpen={this.props.deleteAchievementModal.isOpen}
        submitFunction={this.deleteAchievement}
        closeFunction={this.closeEditAchievementModal}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    deleteAchievementModal: state.deleteAchievementModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteAchievement: (deleteAchievement: IDeleteAchievement) => dispatch(DeleteAchievementAction(deleteAchievement)),
    toggleDeleteAchievementModal: (deleteAchievementModal: IDeleteAchievementModal) =>
      dispatch(ToggleDeleteAchievementModalAction(deleteAchievementModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAchievementsForm);
