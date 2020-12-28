import React, { FormEvent } from 'react';
import './FirstStepCompanyForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SelectField from '../../../common/SelectField/SelectField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

import { IOptions } from '../../../../store/interfaces/selectOptions.interfaces';

import { goToNextStep } from '../../../../utils/ChangeFormStep';

// import store
import store from '../../../../index';

import { STORE_COMPANY, STORE_COMPANY_NAME, STORE_COMPANY_SIZE } from '../../../../store/actions/signUpSteps/signUpSteps.types';
import {
  ICompany,
  IStoreCompanyAction,
  ICompanyName,
  IStoreCompanyNameAction,
  ICompanySize,
  IStoreCompanySizeAction,
} from '../../../../store/interfaces/signUpSteps.interfaces';

// Validators
import { validator, validatorTypes } from '../../../../utils/formValidation';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';

interface FirstStepCompanyFormState {
  areAllFieldsValid: boolean;
  companySizes: IOptions;
}

class FirstStepCompanyForm extends React.Component<RouteComponentProps, FirstStepCompanyFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areAllFieldsValid: false,
      companySizes: {
        list: [
          { label: '1-10', value: 'company_small' },
          { label: '10-50', value: 'company_medium' },
          { label: '50-100', value: 'company_large' },
          { label: '100+', value: 'company_big' },
        ],
      },
    };
  }

  render() {
    // Check that all fields are valid and enable confirm button
    const checkFields = (): any => {
      const formValues: string[] = ['signUpCompanyName', 'signUpCompanySize'];
      const areFieldsValid: ICheckFields = checkFormFields(formValues);

      this.setState(areFieldsValid);
    };

    const storeCompanyName = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.REQUIRED);
      const payload: ICompanyName = { name: data, isValid: isValid, errorMessage: message };
      const action: IStoreCompanyNameAction = { type: STORE_COMPANY_NAME, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const storeCompanySize = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.REQUIRED);
      const payload: ICompanySize = { size: data, isValid: isValid, errorMessage: message };
      const action: IStoreCompanySizeAction = { type: STORE_COMPANY_SIZE, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const saveCompany = (event: FormEvent, history = this.props.history): void => {
      const state: any = store.getState();
      const companyName: string = state.signUpCompanyName.name;
      const companySize: string = state.signUpCompanySize.size;

      const payload: ICompany = { name: companyName, size: companySize };
      const action: IStoreCompanyAction = { type: STORE_COMPANY, payload };

      store.dispatch(action);

      return goToNextStep(event, history);
    };

    return (
      <form className="sign-up__form" onSubmit={saveCompany}>
        <InputField name={'Company name*'} onchange={storeCompanyName} />
        <SelectField name={'Company size*'} options={this.state.companySizes} onchange={storeCompanySize} />

        <span className="required-field__span">* required field</span>

        <SignUpFormButtons areFieldsValid={this.state.areAllFieldsValid} />

        <SignUpProgressCircles currentStep={1} signUpMode={'company'} totalSteps={4} />
      </form>
    );
  }
}

export default withRouter(FirstStepCompanyForm);
