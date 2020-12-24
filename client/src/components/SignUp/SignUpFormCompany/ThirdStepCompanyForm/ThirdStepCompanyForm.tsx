import React, { FormEvent } from 'react';
import axios from 'axios';
import './ThirdStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';
import Button from '../../../common/Button/Button';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

import { goToNextStep } from '../../ChangeFormStep';

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

class ThirdStepCompanyForm extends React.Component<RouteComponentProps> {
  render() {
    let invitedUsers: string[] = [];
    let usersEmails: string[] = [];

    const storeInvitedEmployee = (data: string): void => {
      const payload: IInvitedEmployee = { email: data };
      const action: IStoreInvitedEmployeeAction = { type: STORE_INVITED_EMPLOYEE, payload };

      store.dispatch(action);
    };

    const addInvitedEmployees = (event: FormEvent): void => {
      event.preventDefault();

      const state = store.getState();
      const lastInvitedEmployee = state.signUpLastInvitedEmployee.email;

      // make a copy of the array
      const users = [...invitedUsers];

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
        usersEmails.push(email[0]);
      });

      const data: INewEmployees = {
        newUsers: usersEmails,
        companyId: companyId,
      };

      axios.post('http://localhost:4000/api/auth/invite-employees', data).catch(err => console.error(err));
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
        .post('http://localhost:4000/api/auth/register-company', data)
        .then(response => {
          inviteUsers(response.data.user.companyId);
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

          <Button btnText={'Invite'} isInviteBtn={true} inviteEmployee={addInvitedEmployees} />
        </div>

        <div className="sign-up__form__invited-users">
          <ul>
            {invitedUsers.map((email, i) => (
              <li key={i}>{email}</li>
            ))}
          </ul>
        </div>

        <SignUpFormButtons />

        <SignUpProgressCircles currentStep={3} signUpMode={'company'} totalSteps={4} />
      </form>
    );
  }
}

export default withRouter(ThirdStepCompanyForm);
