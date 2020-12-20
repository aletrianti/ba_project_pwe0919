import React, { FormEvent } from 'react';
import './SecondStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';

import { goToNextStep } from '../../ChangeFormStep';

class SecondStepCompanyForm extends React.Component<RouteComponentProps> {
    render() {
        const storeFirstName = (data: string): void => {

        }

        const storeLastName = (data: string): void => {

        }

        const storeEmail = (data: string): void => {

        }

        const storePassword = (data: string): void => {

        }

        const storeRole = (data: string): void => {

        }

        //const signUpAdmin = (event: FormEvent): void => {};

        return (
            <form className="sign-up__form" onSubmit={(e: FormEvent, history = this.props.history) => goToNextStep(e, history)}>
                <div className="sign-up__form__subheaders">
                    <h3 className="sign-up__form__subheader">A bit about you...</h3>
                </div>
                
                <div id="sign-up__form__name">
                    <InputField name={'First name*'} onchange={(e: any) => storeFirstName(e)} />
                    <InputField name={'Last name*'} onchange={(e: any) => storeLastName(e)} />
                </div>
                <InputField name={'Email*'} onchange={(e: any) => storeEmail(e)} />
                <InputField name={'Password*'} onchange={(e: any) => storePassword(e)} />
                <InputField name={'Role*'} onchange={(e: any) => storeRole(e)} />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(SecondStepCompanyForm);

