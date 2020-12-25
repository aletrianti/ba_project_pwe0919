import React, { FormEvent } from 'react';
import './FirstStepEmployeeForm.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import InputField from '../../../common/InputField/InputField';
import SignUpFormButtons from '../../SignUpFormButtons/SignUpFormButtons';
import SignUpProgressCircles from '../../SignUpProgressCircles/SignUpProgressCircles';

import { goToNextStep } from '../../../../utils/changeFormStep';

// import store
import store from '../../../../index';

import { STORE_COMPANY_CODE } from '../../../../store/actions/signUpSteps/signUpSteps.types';
import { ICompanyCode, IStoreCompanyCodeAction } from '../../../../store/interfaces/signUpSteps.interfaces';

// Validators
import { validator, validatorTypes } from '../../../../utils/formValidation';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';

interface FirstStepEmployeeFormState {
  areAllFieldsValid: boolean;
}

class FirstStepEmployeeForm extends React.Component<RouteComponentProps, FirstStepEmployeeFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areAllFieldsValid: false,
    };
  }

  render() {
    // Check that all fields are valid and enable confirm button
    const checkFields = (): any => {
      const formValues: string[] = ['signUpCompanyCode'];
      const areFieldsValid: ICheckFields = checkFormFields(formValues);

      this.setState(areFieldsValid);
    };

    const storeCompanyCode = (data: string): any => {
      const { isValid, message } = validator(data, validatorTypes.REQUIRED);
      const payload: ICompanyCode = { code: data, isValid: isValid, errorMessage: message };
      const action: IStoreCompanyCodeAction = { type: STORE_COMPANY_CODE, payload };

      store.dispatch(action);

      checkFields();

      return { isValid, message };
    };

    const saveCode = (event: FormEvent, history = this.props.history): void => goToNextStep(event, history);

    return (
      <form className="sign-up__form" onSubmit={saveCode}>
        <InputField name={'Paste your code*'} onchange={storeCompanyCode} />

        <span className="required-field__span">* required field</span>

        <SignUpFormButtons areFieldsValid={this.state.areAllFieldsValid} />

        <SignUpProgressCircles currentStep={1} signUpMode={'employee'} totalSteps={3} />
      </form>
    );
  }
}

export default withRouter(FirstStepEmployeeForm);
