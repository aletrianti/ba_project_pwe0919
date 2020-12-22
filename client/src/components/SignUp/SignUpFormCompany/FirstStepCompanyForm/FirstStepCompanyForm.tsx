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

import { STORE_COMPANY, STORE_COMPANY_NAME, STORE_COMPANY_SIZE } from '../../../../store/actions/signUpSteps/signUpSteps.types';
import { 
    ICompany, 
    IStoreCompanyAction,
    ICompanyName, 
    IStoreCompanyNameAction,
    ICompanySize, 
    IStoreCompanySizeAction 
} from '../../../../store/interfaces/signUpSteps.interfaces';

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
            const payload: ICompanyName = { name: data };
            const action: IStoreCompanyNameAction = { type: STORE_COMPANY_NAME, payload };

            store.dispatch(action);
        }

        const storeCompanySize = (data: string): void => {
            const payload: ICompanySize = { size: data };
            const action: IStoreCompanySizeAction = { type: STORE_COMPANY_SIZE, payload };

            store.dispatch(action);
        }

        const saveCompany = (event: FormEvent, history = this.props.history): void => {
            const state: any = store.getState();
            const companyName: string = state.signUpCompanyName.name;
            const companySize: string = state.signUpCompanySize.size;

            const payload: ICompany = { name: companyName, size: companySize };
            const action: IStoreCompanyAction = { type: STORE_COMPANY, payload };

            store.dispatch(action);

            // add validation

            return goToNextStep(event, history);
        };

        return (
            <form className="sign-up__form" onSubmit={saveCompany}>
                <InputField name={'Company name*'} onchange={storeCompanyName} />
                <SelectField 
                    name={'Company size*'} 
                    options={this.companySizes}
                    onchange={storeCompanySize}
                />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(FirstStepCompanyForm);
