import React, { FormEvent } from 'react';
import './FirstStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SelectField from '../../../common/SelectField/SelectField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';

import { IOptions } from '../../../../store/interfaces/selectOptions.interfaces';

import { goToNextStep } from '../../ChangeFormStep';

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
        const storeCompanyName = (data: string): void => {
            
        }

        const storeCompanySize = (data: string): void => {
            
        }

        //const saveCompany = (event: FormEvent): void => {};

        return (
            <form className="sign-up__form" onSubmit={(e: FormEvent, history = this.props.history) => goToNextStep(e, history)}>
                <InputField name={'Company name*'} onchange={(e: any) => storeCompanyName(e)} />
                <SelectField 
                    name={'Company size*'} 
                    options={this.companySizes}
                    onchange={(e: any) => storeCompanySize(e)} 
                />

                <span className="required-field__span">* required field</span>

                <SignUpFormButtons />
            </form>
        );
    }
}

export default withRouter(FirstStepCompanyForm);
