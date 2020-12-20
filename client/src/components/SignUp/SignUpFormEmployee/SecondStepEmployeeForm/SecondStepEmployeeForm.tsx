import React, { FormEvent } from 'react';
import './SecondStepEmployeeForm.scss';

import InputField from '../../../common/InputField/InputField';
import Button from '../../../common/Button/Button';

class SecondStepEmployeeForm extends React.Component {
    render() {
        const storeFirstName = (data: string): void => {

        }

        const storeLastName = (data: string): void => {

        }

        const storeEmail = (data: string): void => {

        }

        const storePassword = (data: string): void => {

        }

        const signUp = (event: FormEvent): void => {

        };

        return (
            <form className="sign-up__form" onSubmit={signUp}>
                <div id="sign-up__form__name">
                    <InputField name={'First name*'} onchange={(e: any) => storeFirstName(e)} />
                    <InputField name={'Last name*'} onchange={(e: any) => storeLastName(e)} />
                </div>
                <InputField name={'Email*'} onchange={(e: any) => storeEmail(e)} />
                <InputField name={'Password*'} onchange={(e: any) => storePassword(e)} />

                <span className="required-field__span">* required field</span>

                <div className="sign-up__form__btns">
                    <Button btnText={'Back'} isRegular={true} />
                    <Button btnText={'Confirm'} isRegular={false} />
                </div>
            </form>
        );
    }
}

export default SecondStepEmployeeForm;

