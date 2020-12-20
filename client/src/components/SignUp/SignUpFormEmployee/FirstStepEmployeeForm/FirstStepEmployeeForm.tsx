import React, { FormEvent } from 'react';
import './FirstStepEmployeeForm.scss';

import InputField from '../../../common/InputField/InputField';
import Button from '../../../common/Button/Button';

class FirstStepEmployeeForm extends React.Component {
    render() {
        const storeCompanyCode = (data: string): void => {

        }

        const signUp = (event: FormEvent): void => {

        };

        return (
            <form className="sign-up__form" onSubmit={signUp}>
                <InputField name={'Paste your code*'} onchange={(e: any) => storeCompanyCode(e)} />

                <span className="required-field__span">* required field</span>

                <div className="sign-up__form__btns">
                    <Button btnText={'Back'} isRegular={true} />
                    <Button btnText={'Confirm'} isRegular={false} />
                </div>
            </form>
        );
    }
}

export default FirstStepEmployeeForm;
