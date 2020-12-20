import React, { FormEvent } from 'react';
import './ThirdStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';
import Button from '../../../common/Button/Button';

import { goToNextStep } from '../../ChangeFormStep';

class ThirdStepCompanyForm extends React.Component<RouteComponentProps> {
    private invitedUsers: string[] = [];
    
    render() {
        const storeInvitedEmployee = (data: string): void => {
            
        }

        const inviteEmployee = (): void => {};

        return (
            <form className="sign-up__form" onSubmit={(e: FormEvent, history = this.props.history) => goToNextStep(e, history)}>
                <div className="sign-up__form__subheaders">
                    <h2 className="sign-up__form__subheader">Time to add some coworkers! </h2>
                    <h3 className="sign-up__form__subheader__small">(You can also do it later through the admin panel.)</h3>
                </div>

                <div className="sign-up__form__invite-users">
                    <InputField 
                        name={'Email'} 
                        onchange={(e: any) => storeInvitedEmployee(e)} 
                        isInviteUsersField={true}
                    />

                    <Button
                        btnText={'Invite'}
                        isInviteBtn={true}
                        inviteEmployee={inviteEmployee}
                    />
                </div>

                <div className="sign-up__form__invited-users">
                    <ul>
                        {
                            this.invitedUsers.map((email, i) => <li key={i}>{email}</li>)
                        }
                    </ul>
                </div>
                
                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(ThirdStepCompanyForm);

