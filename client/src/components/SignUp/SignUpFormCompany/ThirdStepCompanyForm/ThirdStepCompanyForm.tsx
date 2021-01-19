import React, { FormEvent } from 'react';
import axios from 'axios';
import './ThirdStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';
import Button from '../../../common/Button/Button';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

import { goToNextStep } from '../../../../utils/changeFormStep';

// import store
import store from '../../../../index';

import { STORE_INVITED_EMPLOYEE, STORE_INVITED_EMPLOYEES } from '../../../../store/actions/signUpSteps/signUpSteps.types';
import {
  IInvitedEmployee,
  IStoreInvitedEmployeeAction,
  IInvitedEmployees,
  IStoreInvitedEmployeesAction,
} from '../../../../store/interfaces/signUpSteps.interfaces';

// Data from backend
import { INewCompanyInput, INewEmployees } from '../../../../../../types/auth.types';

// Validators
import { validator, validatorTypes } from '../../../../utils/formValidation';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';

// localStorage
import { storeTokenInLocalStorage } from '../../../../utils/localStorageActions';

interface ThirdStepCompanyFormState {
  areAllFieldsValid: boolean;
  invitedUsers: string[];
}

class ThirdStepCompanyForm extends React.Component<RouteComponentProps, ThirdStepCompanyFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areAllFieldsValid: false,
      invitedUsers: [],
    };
  }

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['signUpLastInvitedEmployee'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState(areFieldsValid);
  };

  storeInvitedEmployee = (data: string): any => {
    const { isValid, message } = validator(data, validatorTypes.EMAIL);
    const payload: IInvitedEmployee = { email: data, isValid: isValid, errorMessage: message };
    const action: IStoreInvitedEmployeeAction = { type: STORE_INVITED_EMPLOYEE, payload };

    store.dispatch(action);

    this.checkFields();

    return { isValid, message };
  };

  addInvitedEmployees = (): void => {
    const state = store.getState();
    const lastInvitedEmployee = state.signUpLastInvitedEmployee.email;

    this.setState({ invitedUsers: [...this.state.invitedUsers, lastInvitedEmployee] });
  };

  storeInvitedEmployees = (): void => {
    const payload: IInvitedEmployees = { emails: this.state.invitedUsers };
    const action: IStoreInvitedEmployeesAction = { type: STORE_INVITED_EMPLOYEES, payload };

    store.dispatch(action);
  };

  displayInvitedEmployees = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.addInvitedEmployees();
    await this.storeInvitedEmployees();
  };

  inviteUsers = (companyId: string): void => {
    const state = store.getState();

    const emails = state.signUpLastInvitedEmployees.emails;

    const data: INewEmployees = {
      newUsers: emails,
      companyId: companyId,
    };

    axios
      .post('/api/auth/invite-employees', data)
      .then(() => console.log('Sent emails!'))
      .catch(err => console.error(err));
  };

  registerCompany = (event: FormEvent, history = this.props.history): void => {
    event.preventDefault();

    const state = store.getState();

    const data: INewCompanyInput = {
      company: {
        companyName: state.signUpCompanyInfo.name,
        companySize: state.signUpCompanyInfo.size,
      },
      newRole: {
        title: state.signUpAdminInfo.role,
      },
      newUser: {
        email: state.signUpAdminInfo.email,
        firstName: state.signUpAdminInfo.firstName,
        lastName: state.signUpAdminInfo.lastName,
      },
      password: state.signUpAdminInfo.password,
    };

    // add validation

    // add http request
    axios
      .post('/api/auth/register-company', data)
      .then(res => {
        storeTokenInLocalStorage(res);
        this.inviteUsers(res.data.user.companyId);
      })
      .then(() => goToNextStep(event, history))
      .catch(err => console.error(err));
  };

  render() {
    return (
      <form className="sign-up__form" onSubmit={this.registerCompany}>
        <div className="sign-up__form__subheaders">
          <h2 className="sign-up__form__subheader">Time to add some coworkers! </h2>
          <h3 className="sign-up__form__subheader__small">(You can also do it later through the admin panel.)</h3>
        </div>

        <div className="sign-up__form__invite-users">
          <InputField name={'Email'} onchange={this.storeInvitedEmployee} isShortField={true} />

          <Button
            btnText={'Invite'}
            isInviteBtn={true}
            shortFieldFunction={this.displayInvitedEmployees}
            isConfirmBtn={true}
            areAllFieldsValid={this.state.areAllFieldsValid}
          />
        </div>

        <div className="sign-up__form__invited-users">
          <ul>
            {this.state.invitedUsers.map((email, i) => (
              <li key={i}>{email}</li>
            ))}
          </ul>
        </div>

        <SignUpFormButtons areFieldsValid={this.state.areAllFieldsValid} />

        <SignUpProgressCircles currentStep={3} signUpMode={'company'} totalSteps={4} />
      </form>
    );
  }
}

export default withRouter(ThirdStepCompanyForm);
