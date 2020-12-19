import React from 'react';
import SignUpFormOptions from './SignUpFormOptions/SignUpFormOptions';
import Button from '../../../common/Button/Button';
import './SignUpFormStart.scss';

// import store
import store from '../../../../index';

import { SET_ACCOUNT_TYPE } from '../../../../store/actions/signUpSteps/signUpSteps.types';
import { IAccountType, ISetAccountTypeAction } from '../../../../store/interfaces/signUpSteps.interfaces';

import { goToNextStep } from '../../GoToNextStep';

class SignUpFormStart extends React.Component {
    render() {
        const storeAccountType = (data: string) => {
            const payload: IAccountType = { accountType: data };
            const action: ISetAccountTypeAction = { type: SET_ACCOUNT_TYPE, payload };
        
            store.dispatch(action);
        };

        return (
            <form id="sign-up__form__step1" onSubmit={goToNextStep}>
                <h2>I want to create a...*</h2>

                <SignUpFormOptions onclick={(e: any) => storeAccountType(e)}/>

                <span>* required field</span>

                <Button
                    btnText={'Start'}
                    isRegular={false}
                    isSingleBtn={true}
                />
            </form>
        );
    }
}

export default SignUpFormStart;