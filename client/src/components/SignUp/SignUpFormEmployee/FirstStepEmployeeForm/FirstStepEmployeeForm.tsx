import React, { FormEvent } from 'react';
import './FirstStepEmployeeForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';

import { goToNextStep } from '../../ChangeFormStep';

class FirstStepEmployeeForm extends React.Component<RouteComponentProps> {
    render() {
        const storeCompanyCode = (data: string): void => {
            
        }

        //const saveCode = (event: FormEvent): void => {};

        return (
            <form className="sign-up__form" onSubmit={(e: FormEvent, history = this.props.history) => goToNextStep(e, history)}>
                <InputField name={'Paste your code*'} onchange={(e: any) => storeCompanyCode(e)} />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(FirstStepEmployeeForm);
