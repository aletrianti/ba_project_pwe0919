import React, { FormEvent } from 'react';
import './SecondStepEmployeeForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';

import { goToNextStep } from '../../ChangeFormStep';

class SecondStepEmployeeForm extends React.Component<RouteComponentProps> {
    render() {
        const storeFirstName = (data: string): void => {

        }

        const storeLastName = (data: string): void => {

        }

        const storeEmail = (data: string): void => {

        }

        const storePassword = (data: string): void => {

        }

        //const signUp = (event: FormEvent): void => {};

        return (
            <form className="sign-up__form" onSubmit={(e: FormEvent, history = this.props.history) => goToNextStep(e, history)}>
                <div id="sign-up__form__name">
                    <InputField name={'First name*'} onchange={(e: any) => storeFirstName(e)} />
                    <InputField name={'Last name*'} onchange={(e: any) => storeLastName(e)} />
                </div>
                <InputField name={'Email*'} onchange={(e: any) => storeEmail(e)} />
                <InputField name={'Password*'} onchange={(e: any) => storePassword(e)} />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(SecondStepEmployeeForm);

