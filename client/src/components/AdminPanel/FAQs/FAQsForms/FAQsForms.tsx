import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleAddFaqModalAction, ToggleEditFaqModalAction } from '../../../../store/actions/forms/forms.actions';
import { StoreAnswerAction, StoreFaqAction, StoreQuestionAction } from '../../../../store/actions/forms/faqs/faqs.actions';
import { IAddFaqModal, IFaqQuestion, IFaqAnswer, IEditFaqModal, IFaq } from '../../../../store/interfaces/forms/faqs.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';
import { getTokenFromLocalStorage } from '../../../../utils/localStorageActions';
import { runInThisContext } from 'vm';
import { postFAQ, updateFAQ } from '../../../../utils/httpRequests';

interface FaqsFormsProps {
  faqQuestion: IFaqQuestion;
  faqAnswer: IFaqAnswer;
  faq: IFaq;
  addFaqModal: IAddFaqModal;
  editFaqModal: IEditFaqModal;
  storeFaqQuestion: (faqQuestion: IFaqQuestion) => any;
  storeFaqAnswer: (faqAnswer: IFaqAnswer) => any;
  storeFaq: (faq: IFaq) => any;
  toggleAddFaqModal: (addFaqModal: IAddFaqModal) => any;
  toggleEditFaqModal: (editFaqModal: IEditFaqModal) => any;
}

interface FaqsFormsState {
  areFieldsValid: ICheckFields;
}

class FaqsForms extends React.Component<FaqsFormsProps, FaqsFormsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
    };
  }

  // Actions
  closeAddFaqModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleAddFaqModal({ isOpen: false });

    this.props.storeFaq({
      question: { question: '', isValid: false, errorMessage: '' },
      answer: { answer: '', isValid: false, errorMessage: '' },
    });

    this.props.storeFaqQuestion({ question: '', isValid: false, errorMessage: '' });
    this.props.storeFaqAnswer({ answer: '', isValid: false, errorMessage: '' });
  };
  closeEditFaqModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.storeFaq({
      question: { question: '', isValid: false, errorMessage: '' },
      answer: { answer: '', isValid: false, errorMessage: '' },
    });
    this.props.toggleEditFaqModal({ id: 0, isOpen: false });

    this.props.storeFaqQuestion({ question: '', isValid: false, errorMessage: '' });
    this.props.storeFaqAnswer({ answer: '', isValid: false, errorMessage: '' });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['faqQuestion', 'faqAnswer'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeQuestion = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeFaqQuestion({ question: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeAnswer = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeFaqAnswer({ answer: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  // Form events
  saveFaqToRedux = (): void => {
    this.props.storeFaq({
      question: this.props.faqQuestion,
      answer: this.props.faqAnswer,
    });
  };

  saveFaqToDB = async (): Promise<void> => {
    const data = {
      question: this.props.faq.question.question,
      answer: this.props.faq.answer.answer,
    };
    await postFAQ(data);
  };

  saveEditedFaqToDB = async (): Promise<void> => {
    const data = {
      ID: this.props.editFaqModal.id,
      body: {
        question: this.props.faqQuestion.question ? this.props.faqQuestion.question : this.props.faq.question.question,
        answer: this.props.faqAnswer.answer ? this.props.faqAnswer.answer : this.props.faq.answer.answer,
      },
    };

    await updateFAQ(data);
  };

  addFaq = async (event: FormEvent): Promise<void> => {
    await this.saveFaqToRedux();
    await this.saveFaqToDB();

    this.closeAddFaqModal(event);
  };

  editFaq = async (event: FormEvent): Promise<void> => {
    await this.saveEditedFaqToDB();
    // await this.saveFaqToDB();

    this.closeEditFaqModal(event);
  };

  render() {
    // Fields
    const addFaqModalFields: IField[] = [
      { name: 'Question', type: 'text', onchange: this.storeQuestion },
      { name: 'Answer', type: 'text', onchange: this.storeAnswer },
    ];
    // TODO: Add dynamic value depending on selected item
    const editFaqModalFields: IField[] = [
      { name: 'Question', type: 'text', onchange: this.storeQuestion, value: this.props.faq.question.question },
      { name: 'Answer', type: 'text', onchange: this.storeAnswer, value: this.props.faq.answer.answer },
    ];

    return (
      <>
        <Form
          fields={addFaqModalFields}
          header={'Add a faq'}
          submitFunction={this.addFaq}
          closeFunction={this.closeAddFaqModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.addFaqModal.isOpen}
        />

        <Form
          fields={editFaqModalFields}
          header={'Edit a faq'}
          submitFunction={this.editFaq}
          closeFunction={this.closeEditFaqModal}
          areFieldsValid={true}
          isModalOpen={this.props.editFaqModal.isOpen}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    faqQuestion: state.faqQuestion,
    faqAnswer: state.faqAnswer,
    faqDate: state.faqDate,
    faq: state.faq,
    addFaqModal: state.addFaqModal,
    editFaqModal: state.editFaqModal,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeFaqQuestion: (faqQuestion: IFaqQuestion) => dispatch(StoreQuestionAction(faqQuestion)),
    storeFaqAnswer: (faqAnswer: IFaqAnswer) => dispatch(StoreAnswerAction(faqAnswer)),
    storeFaq: (faq: IFaq) => dispatch(StoreFaqAction(faq)),
    toggleAddFaqModal: (addFaqModal: IAddFaqModal) => dispatch(ToggleAddFaqModalAction(addFaqModal)),
    toggleEditFaqModal: (EditFaqModal: IEditFaqModal) => dispatch(ToggleEditFaqModalAction(EditFaqModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(FaqsForms);
