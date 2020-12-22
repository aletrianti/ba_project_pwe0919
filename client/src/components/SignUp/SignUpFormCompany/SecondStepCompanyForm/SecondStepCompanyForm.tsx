import React, { FormEvent } from 'react';
import './SecondStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';

import { goToNextStep } from '../../ChangeFormStep';

// import store
import store from '../../../../index';

import { 
    STORE_FIRST_NAME,
    STORE_LAST_NAME,
    STORE_EMAIL,
    STORE_PASSWORD,
    STORE_ROLE,
    STORE_ADMIN_ACCOUNT 
} from '../../../../store/actions/signUpSteps/signUpSteps.types';
import { 
    IFirstName, IStoreFirstNameAction,
    ILastName, IStoreLastNameAction,
    IEmail, IStoreEmailAction,
    IPassword, IStorePasswordAction,
    IRole, IStoreRoleAction,
    IAdminAccount, IStoreAdminAccountAction 
} from '../../../../store/interfaces/signUpSteps.interfaces';

class SecondStepCompanyForm extends React.Component<RouteComponentProps> {
    render() {
        const storeFirstName = (data: string): void => {
            const payload: IFirstName = { firstName: data };
            const action: IStoreFirstNameAction = { type: STORE_FIRST_NAME, payload };

            store.dispatch(action);
        }

        const storeLastName = (data: string): void => {
            const payload: ILastName = { lastName: data };
            const action: IStoreLastNameAction = { type: STORE_LAST_NAME, payload };

            store.dispatch(action);
        }

        const storeEmail = (data: string): void => {
            const payload: IEmail = { email: data };
            const action: IStoreEmailAction = { type: STORE_EMAIL, payload };

            store.dispatch(action);
        }

        const storePassword = (data: string): void => {
            const payload: IPassword = { password: data };
            const action: IStorePasswordAction = { type: STORE_PASSWORD, payload };

            store.dispatch(action);
        }

        const storeRole = (data: string): void => {
            const payload: IRole = { role: data };
            const action: IStoreRoleAction = { type: STORE_ROLE, payload };

            store.dispatch(action);
        }

        const signUpAdmin = (event: FormEvent, history = this.props.history): void => {
            // dispatch action
            const state = store.getState();
            const payload: IAdminAccount = {
                firstName: state.signUpFirstName.firstName,
                lastName: state.signUpLastName.lastName,
                email: state.signUpEmail.email,
                password: state.signUpPassword.password,
                role: state.signUpRole.role
            };
            const action: IStoreAdminAccountAction = { type: STORE_ADMIN_ACCOUNT, payload };

            store.dispatch(action);

            // add validation

            return goToNextStep(event, history);
        };

        return (
            <form className="sign-up__form" onSubmit={signUpAdmin}>
                <div className="sign-up__form__subheaders">
                    <h3 className="sign-up__form__subheader">A bit about you...</h3>
                </div>
                
                <div id="sign-up__form__name">
                    <InputField name={'First name*'} onchange={storeFirstName} />
                    <InputField name={'Last name*'} onchange={storeLastName} />
                </div>
                <InputField name={'Email*'} onchange={storeEmail} />
                <InputField name={'Password*'} onchange={storePassword} />
                <InputField name={'Role*'} onchange={storeRole} />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(SecondStepCompanyForm);

