import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleAddFaqModalAction, ToggleEditFaqModalAction } from '../../../../store/actions/forms/forms.actions';
import { StoreAnswerAction, StoreFaqAction, StoreQuestionAction } from '../../../../store/actions/forms/faqs/faqs.actions';
import { IAddFaqModal, IFaqQuestion, IFaqAnswer, IFaqModal, IFaq } from '../../../../store/interfaces/forms/faqs.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';

interface FaqsFormsProps {
  faqQuestion: IFaqQuestion;
  faqAnswer: IFaqAnswer;
  faq: IFaq;
  addFaqModal: IAddFaqModal;
  editFaqModal: IFaqModal;
  storeFaqQuestion: (faqQuestion: IFaqQuestion) => any;
  storeFaqAnswer: (faqAnswer: IFaqAnswer) => any;
  storeFaq: (faq: IFaq) => any;
  toggleAddFaqModal: (addFaqModal: IAddFaqModal) => any;
  toggleEditFaqModal: (editFaqModal: IFaqModal) => any;
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
  closeAddFaqModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddFaqModal({ isOpen: false });

    this.props.storeFaqQuestion({ question: '', isValid: false, errorMessage: '' });
    this.props.storeFaqAnswer({ answer: '', isValid: false, errorMessage: '' });
  };
  closeEditFaqModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditFaqModal({ id: 0, isOpen: false });
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

  saveFaqToDB = (): void => {
    // TODO: add axios call here - use this.state.roleId and this.props.role
    // the last one is an object containing these objects: title, description, responsibilities
  };

  saveEditedFaqToDB = (): void => {
    // TODO: add axios call here - use this.state.roleId and this.props.role
    // the last one is an object containing these objects: title, description, responsibilities
  };

  addFaq = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveFaqToRedux();
    await this.saveFaqToDB();
  };

  editFaq = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveEditedFaqToDB();
    await this.saveFaqToDB();
  };

  // Fields
  addFaqModalFields: IField[] = [
    { name: 'Question', type: 'text', onchange: this.storeQuestion },
    { name: 'Answer', type: 'text', onchange: this.storeAnswer },
  ];
  // TODO: Add dynamic value depending on selected item
  editFaqModalFields: IField[] = [
    { name: 'Question', type: 'text', onchange: this.storeQuestion, value: '' },
    { name: 'Answer', type: 'text', onchange: this.storeAnswer, value: '' },
  ];

  render() {
    return (
      <>
        <Form
          fields={this.addFaqModalFields}
          header={'Add a faq'}
          submitFunction={this.addFaq}
          closeFunction={this.closeAddFaqModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.addFaqModal.isOpen}
        />

        <Form
          fields={this.editFaqModalFields}
          header={'Edit a faq'}
          submitFunction={this.editFaq}
          closeFunction={this.closeEditFaqModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
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
    toggleEditFaqModal: (EditFaqModal: IFaqModal) => dispatch(ToggleEditFaqModalAction(EditFaqModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(FaqsForms);
