import React, { FormEvent } from 'react';
import './FirstStepEmployeeForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';

import { goToNextStep } from '../../ChangeFormStep';

// import store
import store from '../../../../index';

import { STORE_COMPANY_CODE } from '../../../../store/actions/signUpSteps/signUpSteps.types';
import { ICompanyCode, IStoreCompanyCodeAction } from '../../../../store/interfaces/signUpSteps.interfaces';

class FirstStepEmployeeForm extends React.Component<RouteComponentProps> {
    render() {
        const storeCompanyCode = (data: string): void => {
            const payload: ICompanyCode = { code: data };
            const action: IStoreCompanyCodeAction = { type: STORE_COMPANY_CODE, payload };

            store.dispatch(action);
        }

        const saveCode = (event: FormEvent, history = this.props.history): void => {
            // add validation
            // add http request

            return goToNextStep(event, history);
        };

        return (
            <form className="sign-up__form" onSubmit={saveCode}>
                <InputField name={'Paste your code*'} onchange={storeCompanyCode} />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(FirstStepEmployeeForm);
