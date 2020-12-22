import React, { FormEvent } from 'react';
import './SecondStepEmployeeForm.scss';
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
    STORE_EMPLOYEE_ACCOUNT 
} from '../../../../store/actions/signUpSteps/signUpSteps.types';
import { 
    IFirstName, IStoreFirstNameAction,
    ILastName, IStoreLastNameAction,
    IEmail, IStoreEmailAction,
    IPassword, IStorePasswordAction,
    IEmployeeAccount, IStoreEmployeeAccountAction
} from '../../../../store/interfaces/signUpSteps.interfaces';

class SecondStepEmployeeForm extends React.Component<RouteComponentProps> {
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

        const signUp = (event: FormEvent, history = this.props.history): void => {
            // dispatch action
            const state = store.getState();
            const payload: IEmployeeAccount = {
                firstName: state.signUpFirstName.firstName,
                lastName: state.signUpLastName.lastName,
                email: state.signUpEmail.email,
                password: state.signUpPassword.password
            };
            const action: IStoreEmployeeAccountAction = { type: STORE_EMPLOYEE_ACCOUNT, payload };

            store.dispatch(action);

            // add validation
            // add http request

            return goToNextStep(event, history);
        };

        return (
            <form className="sign-up__form" onSubmit={signUp}>
                <div id="sign-up__form__name">
                    <InputField name={'First name*'} onchange={storeFirstName} />
                    <InputField name={'Last name*'} onchange={storeLastName} />
                </div>
                <InputField name={'Email*'} onchange={storeEmail} />
                <InputField name={'Password*'} onchange={storePassword} />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(SecondStepEmployeeForm);

