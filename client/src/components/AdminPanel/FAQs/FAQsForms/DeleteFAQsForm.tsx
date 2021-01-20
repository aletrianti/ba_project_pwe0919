import React, { FormEvent, MouseEvent } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleDeleteFaqModalAction } from '../../../../store/actions/forms/forms.actions';
import { IDeleteFaqModal, IDeleteFaq } from '../../../../store/interfaces/forms/faqs.interfaces';
import { DeleteFaqAction } from '../../../../store/actions/forms/faqs/faqs.actions';

import DeleteForm from '../../../common/Form/DeleteForm';
import { getTokenFromLocalStorage } from '../../../../utils/localStorageActions';
import { deleteFAQ } from '../../../../utils/httpRequests';

interface DeleteFaqsFormProps {
  deleteFaqModal: IDeleteFaqModal;
  deleteFaq: (deleteFaq: IDeleteFaq) => any;
  toggleDeleteFaqModal: (deleteFaqModal: IDeleteFaqModal) => any;
}

interface DeleteFaqsFormState {
  faqId: number;
}

class DeleteFaqsForm extends React.Component<DeleteFaqsFormProps, DeleteFaqsFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      faqId: this.props.deleteFaqModal.id,
    };
  }

  // Actions
  closeEditFaqModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteFaqModal({ id: 0, isOpen: false });
  };

  // Form events
  deleteFaq = async (e: MouseEvent): Promise<void> => {
    // e.preventDefault();

    await deleteFAQ(this.props.deleteFaqModal);
  };

  render() {
    return (
      <DeleteForm
        id={this.state.faqId}
        name={'faq'}
        isModalOpen={this.props.deleteFaqModal.isOpen}
        submitFunction={this.deleteFaq}
        closeFunction={this.closeEditFaqModal}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    deleteFaqModal: state.deleteFaqModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteFaq: (deleteFaq: IDeleteFaq) => dispatch(DeleteFaqAction(deleteFaq)),
    toggleDeleteFaqModal: (deleteFaqModal: IDeleteFaqModal) => dispatch(ToggleDeleteFaqModalAction(deleteFaqModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFaqsForm);
