import React, { FormEvent } from 'react';
import axios from 'axios';
import './ThirdStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';
import Button from '../../../common/Button/Button';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

import { goToNextStep } from '../../../../utils/ChangeFormStep';

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

interface ThirdStepCompanyFormState {
  areAllFieldsValid: boolean;
  invitedUsers: string[];
  usersEmails: string[];
}

class ThirdStepCompanyForm extends React.Component<RouteComponentProps, ThirdStepCompanyFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areAllFieldsValid: false,
      invitedUsers: [],
      usersEmails: [],
    };
  }

  render() {
    // Check that all fields are valid and enable confirm button
    const checkFields = (): any => {
      const formValues: string[] = ['signUpLastInvitedEmployee'];
      const areFieldsValid: ICheckFields = checkFormFields(formValues);

      this.setState(areFieldsValid);
    };

    const storeInvitedEmployee = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.EMAIL);
      const payload: IInvitedEmployee = { email: data, isValid: isValid, errorMessage: message };
      const action: IStoreInvitedEmployeeAction = { type: STORE_INVITED_EMPLOYEE, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const addInvitedEmployees = (event: FormEvent): void => {
      event.preventDefault();

      const state = store.getState();
      const lastInvitedEmployee = state.signUpLastInvitedEmployee.email;

      // make a copy of the array
      const users = [...this.state.invitedUsers];

      // push invited employee to array
      users.push(lastInvitedEmployee);

      const payload: IInvitedEmployees = { emails: users };
      const action: IStoreInvitedEmployeesAction = { type: STORE_INVITED_EMPLOYEES, payload };

      store.dispatch(action);
    };

    const inviteUsers = (companyId: string): void => {
      const state = store.getState();

      const emails = state.signUpLastInvitedEmployees.emails;

      emails.forEach((email: string) => {
        this.state.usersEmails.push(email[0]);
      });

      const data: INewEmployees = {
        newUsers: this.state.usersEmails,
        companyId: companyId,
      };

      axios.post('/api/auth/invite-employees', data).catch(err => console.error(err));
    };

    const registerCompany = (event: FormEvent, history = this.props.history): void => {
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
        .then(response => {
          localStorage['user_token'] = response.data.token;
          inviteUsers(response.data.user.companyId);
          console.log(response);
        })
        .then(() => goToNextStep(event, history))
        .catch(err => console.error(err));
    };

    return (
      <form className="sign-up__form" onSubmit={registerCompany}>
        <div className="sign-up__form__subheaders">
          <h2 className="sign-up__form__subheader">Time to add some coworkers! </h2>
          <h3 className="sign-up__form__subheader__small">(You can also do it later through the admin panel.)</h3>
        </div>

        <div className="sign-up__form__invite-users">
          <InputField name={'Email'} onchange={storeInvitedEmployee} isInviteUsersField={true} />

          <Button
            btnText={'Invite'}
            isInviteBtn={true}
            inviteEmployee={addInvitedEmployees}
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
