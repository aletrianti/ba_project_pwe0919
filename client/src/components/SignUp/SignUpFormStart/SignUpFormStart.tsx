import React, { FormEvent } from 'react';
import SignUpFormOptions from './SignUpFormOptions/SignUpFormOptions';
import Button from '../../common/Button/Button';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './SignUpFormStart.scss';

// import store
import store from '../../../index';

import { SET_ACCOUNT_TYPE } from '../../../store/actions/signUpSteps/signUpSteps.types';
import { IAccountType, ISetAccountTypeAction } from '../../../store/interfaces/signUpSteps.interfaces';

import { goToNextStep } from '../ChangeFormStep';

class SignUpFormStart extends React.Component<RouteComponentProps> {
  render() {
    const storeAccountType = (data: string): void => {
      const payload: IAccountType = { accountType: data };
      const action: ISetAccountTypeAction = { type: SET_ACCOUNT_TYPE, payload };

      store.dispatch(action);
    };

    return (
      <form id="sign-up__form__step1" onSubmit={(e: FormEvent, history = this.props.history) => goToNextStep(e, history)}>
        <h2>I want to create a...*</h2>

        <SignUpFormOptions onclick={(e: any) => storeAccountType(e)} />

        <span>* required field</span>

        <Button btnText={'Start'} isRegular={false} isSingleBtn={true} />
      </form>
    );
  }
}

export default withRouter(SignUpFormStart);
