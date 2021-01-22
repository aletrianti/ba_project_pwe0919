import React, { FormEvent, MouseEvent } from 'react';
import { connect } from 'react-redux';

import '../../../Form/Form.scss';

import {
  StoreAtCompanySinceAction,
  StoreBirthdayAction,
  StoreContactLinkAction,
  StoreDescriptionAction,
  StoreEmailAction,
  StoreFirstNameAction,
  StoreLastNameAction,
  StorePasswordAction,
  StoreProfileAction,
} from '../../../../../store/actions/forms/profile/profile.actions';
import {
  IEditProfileModal,
  IProfile,
  IProfileAtCompanySince,
  IProfileBirthday,
  IProfileContactLink,
  IProfileDescription,
  IProfileEmail,
  IProfileFirstName,
  IProfileLastName,
  IProfilePassword,
} from '../../../../../store/interfaces/forms/profile.interfaces';
import { ToggleEditProfileModalAction } from '../../../../../store/actions/forms/forms.actions';
import Button from '../../../Button/Button';
import InputField from '../../../InputField/InputField';
import { ICheckFields, checkFormFields } from '../../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../../utils/formValidation';
import { updateCurrentUserAvailability } from '../../../../../utils/httpRequests';

interface ProfileFormProps {
  profile: IProfile;
  profileFirstName: IProfileFirstName;
  profileLastName: IProfileLastName;
  profileEmail: IProfileEmail;
  profilePassword: IProfilePassword;
  profileBirthday: IProfileBirthday;
  profileAtCompanySince: IProfileAtCompanySince;
  profileDescription: IProfileDescription;
  profileContactLink: IProfileContactLink;
  storeProfile: (profile: IProfile) => any;
  storeProfileFirstName: (profileFirstName: IProfileFirstName) => any;
  storeProfileLastName: (profileLastName: IProfileLastName) => any;
  storeProfileEmail: (profileEmail: IProfileEmail) => any;
  storeProfilePassword: (profilePassword: IProfilePassword) => any;
  storeProfileBirthday: (profileBirthday: IProfileBirthday) => any;
  storeProfileAtCompanySince: (profileAtCompanySince: IProfileAtCompanySince) => any;
  storeProfileDescription: (profileDescription: IProfileDescription) => any;
  storeProfileContactLink: (profileContactLink: IProfileContactLink) => any;
  toggleEditProfileModal: (editProfileModal: IEditProfileModal) => any;
  isModalOpen: boolean;
}

interface ProfileFormState {
  areFieldsValid: ICheckFields;
  currentUser: any;
}

class ProfileForm extends React.Component<ProfileFormProps, ProfileFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
      currentUser: {},
    };
  }

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = [
      'profileFirstName',
      'profileLastName',
      'profileEmail',
      'profilePassword',
      'profileBirthday',
      'profileAtCompanySince',
      'profileDescription',
      'profileContactLink',
    ];

    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeFirstName = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeProfileFirstName({ firstName: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeLastName = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeProfileLastName({ lastName: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeEmail = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.EMAIL);

    this.props.storeProfileEmail({ email: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storePassword = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.PASSWORD);

    this.props.storeProfilePassword({ password: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeBirthday = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeProfileBirthday({ birthday: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeAtCompanySince = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeProfileAtCompanySince({ atCompanySince: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeDescription = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeProfileDescription({ description: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeContactLink = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeProfileContactLink({ contactLink: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  // Actions
  closeEditProfileModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleEditProfileModal({ id: 0, isOpen: false });
  };

  saveProfileToRedux = (): void => {
    const {
      profileFirstName,
      profileLastName,
      profileEmail,
      profilePassword,
      profileBirthday,
      profileAtCompanySince,
      profileDescription,
      profileContactLink,
    } = this.props;

    this.props.storeProfile({
      firstName: { firstName: profileFirstName.firstName, isValid: true, errorMessage: '' },
      lastName: { lastName: profileLastName.lastName, isValid: true, errorMessage: '' },
      email: { email: profileEmail.email, isValid: true, errorMessage: '' },
      password: { password: profilePassword.password, isValid: true, errorMessage: '' },
      birthday: { birthday: profileBirthday.birthday, isValid: true, errorMessage: '' },
      atCompanySince: { atCompanySince: profileAtCompanySince.atCompanySince, isValid: true, errorMessage: '' },
      description: { description: profileDescription.description, isValid: true, errorMessage: '' },
      contactLink: { contactLink: profileContactLink.contactLink, isValid: true, errorMessage: '' },
    });
  };

  saveProfileToDB = async (): Promise<void> => {
    const data = {};
    // @ts-ignore
    if (this.props.profileDescription.description) data.description = this.props.profileDescription.description;
    // @ts-ignore
    if (this.props.profileFirstName.firstName) data.firsName = this.props.profileFirstName.firstName;
    // @ts-ignore
    if (this.props.profileLastName.lastName) data.lastName = this.props.profileLastName.lastName;
    // @ts-ignore
    if (this.props.profilePassword.password) data.password = this.props.profilePassword.password;
    // @ts-ignore
    if (this.props.profileEmail.email) data.email = this.props.profileEmail.email;
    // @ts-ignore
    if (this.props.profileBirthday.birthday) data.birthday = this.props.profileBirthday.birthday;
    // @ts-ignore
    if (this.props.profileContactLink.contactLink) data.contactLink = this.props.profileContactLink.contactLink;
    // @ts-ignore
    if (this.props.profileAtCompanySince.atCompanySince) data.atCompanySince = this.props.profileAtCompanySince.atCompanySince;
    await updateCurrentUserAvailability(data);
  };

  editProfile = async (event: FormEvent): Promise<void> => {
    await this.saveProfileToRedux();
    await this.saveProfileToDB();

    this.closeEditProfileModal(event);
    event.preventDefault();
  };

  render() {
    const { firstName, lastName, email, birthday, atCompanySince, description, contactLink } = this.props.profile;

    return (
      <div id="profile__form" className="form__wrapper" style={{ display: this.props.isModalOpen ? 'flex' : 'none' }}>
        <form onSubmit={(e: FormEvent) => this.editProfile(e)} className="form">
          <h5 className="form__header">Edit profile</h5>

          <div className="form__fields__container">
            <div className="form__fields__containers">
              <InputField name={'First name'} onchange={this.storeFirstName} value={firstName.firstName || ''} />
              <InputField name={'Last name'} onchange={this.storeLastName} value={lastName.lastName || ''} />
              <InputField name={'Email'} onchange={this.storeEmail} value={email.email} />
              <InputField name={'Change Password'} onchange={this.storePassword} value={''} />
              <InputField name={'Birthday'} onchange={this.storeBirthday} value={birthday.birthday || ''} />
            </div>
            <div className="form__fields__containers">
              <InputField
                name={`At ${this.state?.currentUser?.companyName || 'Company'} since`}
                onchange={this.storeAtCompanySince}
                value={atCompanySince.atCompanySince || ''}
              />
              <InputField
                name={'Description'}
                onchange={this.storeDescription}
                value={description.description || ''}
                isTextarea={true}
              />
              <InputField name={'Contact link'} onchange={this.storeContactLink} value={contactLink.contactLink || ''} />
            </div>
          </div>

          <div className="form__btns">
            <div onClick={(e: MouseEvent) => this.closeEditProfileModal(e)}>
              <Button btnText={'Cancel'} isRegular={true} isConfirmBtn={false} />
            </div>
            <Button btnText={'Save'} isRegular={false} isConfirmBtn={true} areAllFieldsValid={true} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    profile: state.profile,
    profileFirstName: state.profileFirstName,
    profileLastName: state.profileLastName,
    profileEmail: state.profileEmail,
    profilePassword: state.profilePassword,
    profileBirthday: state.profileBirthday,
    profileAtCompanySince: state.profileAtCompanySince,
    profileDescription: state.profileDescription,
    profileContactLink: state.profileContactLink,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeProfile: (profile: IProfile) => dispatch(StoreProfileAction(profile)),
    storeProfileFirstName: (profileFirstName: IProfileFirstName) => dispatch(StoreFirstNameAction(profileFirstName)),
    storeProfileLastName: (profileLastName: IProfileLastName) => dispatch(StoreLastNameAction(profileLastName)),
    storeProfileEmail: (profileEmail: IProfileEmail) => dispatch(StoreEmailAction(profileEmail)),
    storeProfilePassword: (profilePassword: IProfilePassword) => dispatch(StorePasswordAction(profilePassword)),
    storeProfileBirthday: (profileBirthday: IProfileBirthday) => dispatch(StoreBirthdayAction(profileBirthday)),
    storeProfileAtCompanySince: (profileAtCompanySince: IProfileAtCompanySince) =>
      dispatch(StoreAtCompanySinceAction(profileAtCompanySince)),
    storeProfileDescription: (profileDescription: IProfileDescription) => dispatch(StoreDescriptionAction(profileDescription)),
    storeProfileContactLink: (profileContactLink: IProfileContactLink) => dispatch(StoreContactLinkAction(profileContactLink)),
    toggleEditProfileModal: (editProfileModal: IEditProfileModal) => dispatch(ToggleEditProfileModalAction(editProfileModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
