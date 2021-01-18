import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleAddAchievementModalAction, ToggleEditAchievementModalAction } from '../../../../store/actions/forms/forms.actions';
import {
  StoreAchievementAction,
  StoreDateAction,
  StoreDescriptionAction,
  StoreTitleAction,
} from '../../../../store/actions/forms/achievements/achievements.actions';
import {
  IAddAchievementModal,
  IAchievementTitle,
  IAchievementDate,
  IAchievementDescription,
  IEditAchievementModal,
  IAchievement,
} from '../../../../store/interfaces/forms/achievements.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';

interface AchievementsFormsProps {
  achievementTitle: IAchievementTitle;
  achievementDescription: IAchievementDescription;
  achievementDate: IAchievementDate;
  achievement: IAchievement;
  addAchievementModal: IAddAchievementModal;
  editAchievementModal: IEditAchievementModal;
  storeAchievementTitle: (achievementTitle: IAchievementTitle) => any;
  storeAchievementDescription: (achievementDescription: IAchievementDescription) => any;
  storeAchievementDate: (achievementDate: IAchievementDate) => any;
  storeAchievement: (achievement: IAchievement) => any;
  toggleAddAchievementModal: (addAchievementModal: IAddAchievementModal) => any;
  toggleEditAchievementModal: (editAchievementModal: IEditAchievementModal) => any;
}

interface AchievementsFormsState {
  areFieldsValid: ICheckFields;
}

class AchievementsForms extends React.Component<AchievementsFormsProps, AchievementsFormsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
    };
  }

  // Actions
  closeAddAchievementModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleAddAchievementModal({ isOpen: false });

    this.props.storeAchievementTitle({ title: '', isValid: false, errorMessage: '' });
    this.props.storeAchievementDescription({ description: '', isValid: false, errorMessage: '' });
    this.props.storeAchievementDate({ date: '', isValid: false, errorMessage: '' });
  };
  closeEditAchievementModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.storeAchievement({
      title: { title: '', isValid: false, errorMessage: '' },
      description: { description: '', isValid: false, errorMessage: '' },
      date: { date: '', isValid: false, errorMessage: '' },
    });
    this.props.toggleEditAchievementModal({ id: 0, isOpen: false });
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
  saveAchievementToRedux = (): void => {
    this.props.storeAchievement({
      title: this.props.achievementTitle,
      description: this.props.achievementDescription,
      date: this.props.achievementDate,
    });
  };

  saveAchievementToDB = (): void => {
    // TODO: add axios call here - use this.props.achievement
    // the last one is an object containing these objects: title, description, responsibilities
  };

  saveEditedAchievementToDB = (): void => {
    // TODO: add axios call here - use this.editAchievementModal.id and this.props.achievement
    // the last one is an object containing these objects: title, description, responsibilities
  };

  addAchievement = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveAchievementToRedux();
    await this.saveAchievementToDB();

    this.closeAddAchievementModal(event);
  };

  editAchievement = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveEditedAchievementToDB();
    await this.saveAchievementToDB();

    this.closeEditAchievementModal(event);
  };

  render() {
    // Fields
    const addAchievementModalFields: IField[] = [
      { name: 'Title', type: 'text', onchange: this.storeTitle },
      { name: 'Description', type: 'text', onchange: this.storeDescription },
      { name: 'Date', type: 'text', onchange: this.storeDate },
    ];
    // TODO: Add dynamic value depending on selected item
    const editAchievementModalFields: IField[] = [
      { name: 'Title', type: 'text', onchange: this.storeTitle, value: this.props.achievement.title.title },
      {
        name: 'Description',
        type: 'text',
        onchange: this.storeDescription,
        value: this.props.achievement.description.description,
      },
      { name: 'Date', type: 'text', onchange: this.storeDate, value: this.props.achievement.date.date },
    ];

    return (
      <>
        <Form
          fields={addAchievementModalFields}
          header={'Add a achievement'}
          submitFunction={this.addAchievement}
          closeFunction={this.closeAddAchievementModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.addAchievementModal.isOpen}
        />

        <Form
          fields={editAchievementModalFields}
          header={'Edit a achievement'}
          submitFunction={this.editAchievement}
          closeFunction={this.closeEditAchievementModal}
          areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
          isModalOpen={this.props.editAchievementModal.isOpen}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    achievementTitle: state.achievementTitle,
    achievementDescription: state.achievementDescription,
    achievementDate: state.achievementDate,
    achievement: state.achievement,
    addAchievementModal: state.addAchievementModal,
    editAchievementModal: state.editAchievementModal,
  };
};

const mapDisparchToProps = (dispatch: any) => {
  return {
    storeAchievementTitle: (achievementTitle: IAchievementTitle) => dispatch(StoreTitleAction(achievementTitle)),
    storeAchievementDescription: (achievementDescription: IAchievementDescription) =>
      dispatch(StoreDescriptionAction(achievementDescription)),
    storeAchievementDate: (achievementDate: IAchievementDate) => dispatch(StoreDateAction(achievementDate)),
    storeAchievement: (achievement: IAchievement) => dispatch(StoreAchievementAction(achievement)),
    toggleAddAchievementModal: (addAchievementModal: IAddAchievementModal) =>
      dispatch(ToggleAddAchievementModalAction(addAchievementModal)),
    toggleEditAchievementModal: (EditAchievementModal: IEditAchievementModal) =>
      dispatch(ToggleEditAchievementModalAction(EditAchievementModal)),
  };
};

export default connect(mapStateToProps, mapDisparchToProps)(AchievementsForms);
