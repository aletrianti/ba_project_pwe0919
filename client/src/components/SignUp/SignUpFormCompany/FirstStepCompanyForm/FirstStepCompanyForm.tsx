import React, { FormEvent } from 'react';
import './FirstStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SelectField from '../../../common/SelectField/SelectField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';

import { IOptions } from '../../../../store/interfaces/selectOptions.interfaces';

import { goToNextStep } from '../../ChangeFormStep';

// import store
import store from '../../../../index';

import { STORE_COMPANY } from '../../../../store/actions/signUpSteps/signUpSteps.types';
import { ICompany, IStoreCompanyAction } from '../../../../store/interfaces/signUpSteps.interfaces';

class FirstStepCompanyForm extends React.Component<RouteComponentProps> {
    private companySizes: IOptions = {
        list: [
            { label: '1-10', value: 'company_small' },
            { label: '10-50', value: 'company_medium' },
            { label: '50-100', value: 'company_large' },
            { label: '100+', value: 'company_big' },
        ]
    }

    render() {
        // Only handling the company name because the size is not needed in the backend, yet
        const storeCompanyName = (data: string): void => {
            const payload: ICompany = { name: data, size: '' };
            const action: IStoreCompanyAction = { type: STORE_COMPANY, payload };

            store.dispatch(action);
        }

        const saveCompany = (event: FormEvent, history = this.props.history): void => {
            // add validation
            // add http request

            return goToNextStep(event, history);
        };

        return (
            <form className="sign-up__form" onSubmit={saveCompany}>
                <InputField name={'Company name*'} onchange={storeCompanyName} />
                <SelectField 
                    name={'Company size*'} 
                    options={this.companySizes}
                />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(FirstStepCompanyForm);
