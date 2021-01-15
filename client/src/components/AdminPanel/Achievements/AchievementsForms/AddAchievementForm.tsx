import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleAddAchievementModalAction } from '../../../../store/actions/forms/forms.actions';
import {
  StoreDateAction,
  StoreDescriptionAction,
  StoreTitleAction,
} from '../../../../store/actions/forms/achievements/achievements.actions';
import {
  IAddAchievementModal,
  IAchievementTitle,
  IAchievementDate,
  IAchievementDescription,
} from '../../../../store/interfaces/forms/achievements.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';

interface AddAchievementsFormProps {
  achievementTitle: IAchievementTitle;
  achievementDescription: IAchievementDescription;
  achievementDate: IAchievementDate;
  addAchievementModal: IAddAchievementModal;
  storeAchievementTitle: (achievementTitle: IAchievementTitle) => any;
  storeAchievementDescription: (achievementDescription: IAchievementDescription) => any;
  storeAchievementDate: (achievementDate: IAchievementDate) => any;
  toggleAddAchievementModal: (addAchievementModal: IAddAchievementModal) => any;
}

interface AddAchievementsFormState {
  areFieldsValid: ICheckFields;
}

class AddAchievementsForm extends React.Component<AddAchievementsFormProps, AddAchievementsFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
    };
  }

  // Actions
  closeAddAchievementModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddAchievementModal({ isOpen: false });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['achievementTitle', 'achievementDescription', 'achievementDate'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeTitle = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeAchievementTitle({ title: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeDescription = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeAchievementDescription({ description: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeDate = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeAchievementDate({ date: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  // Form events
  addAchievement = (): void => {
    // TODO: axios request
  };

  // Fields
  addAchievementModalFields: IField[] = [
    { name: 'Title', type: 'text', onchange: this.storeTitle },
    { name: 'Description', type: 'text', onchange: this.storeDescription },
    { name: 'Date', type: 'text', onchange: this.storeDate },
  ];

  render() {
    return (
      <Form
        fields={this.addAchievementModalFields}
        header={'Add a achievement'}
        submitFunction={this.addAchievement}
        closeFunction={this.closeAddAchievementModal}
        areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
        isModalOpen={this.props.addAchievementModal.isOpen}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    achievementTitle: state.achievementTitle,
    achievementDescription: state.achievementDescription,
    achievementDate: state.achievementDate,
    addAchievementModal: state.addAchievementModal,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeAchievementTitle: (achievementTitle: IAchievementTitle) => dispatch(StoreTitleAction(achievementTitle)),
    storeAchievementDescription: (achievementDescription: IAchievementDescription) =>
      dispatch(StoreDescriptionAction(achievementDescription)),
    storeAchievementDate: (achievementDate: IAchievementDate) => dispatch(StoreDateAction(achievementDate)),
    toggleAddAchievementModal: (addAchievementModal: IAddAchievementModal) =>
      dispatch(ToggleAddAchievementModalAction(addAchievementModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(AddAchievementsForm);
