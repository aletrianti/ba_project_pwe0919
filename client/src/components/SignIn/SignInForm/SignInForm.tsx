import React from 'react';
import InputField from '../../common/InputField/InputField';
import Button from '../../common/Button/Button';
import './SignInForm.scss';

// import store
import store from '../../../index';

import { STORE_EMAIL, STORE_PASSWORD } from '../../../store/actions/authActions/auth.types';
import { IEmail, IPassword, IEmailAction, IPasswordAction } from '../../../store/interfaces/auth.interfaces';

class SignInForm extends React.Component {
    render() {
        const storeEmail = (data: string) => {
            const payload: IEmail = { email: data };
            const action: IEmailAction = { type: STORE_EMAIL, payload };

            store.dispatch(action);
        };

        const storePassword = (data: string) => {
            const payload: IPassword = { password: data };
            const action: IPasswordAction = { type: STORE_PASSWORD, payload };

            store.dispatch(action);
        };

        const signIn = (event: any) => {
            event.preventDefault();
            
            const state = store.getState();
            console.log(state);
        };

        return (
            <form className="sign-in__form" onSubmit={signIn}>
                <InputField name={'Email'} onchange={(e: any) => storeEmail(e)} />
                <InputField name={'Password'} isPassword={true} onchange={(e: any) => storePassword(e)} />
                <Button
                    btnText={'Sign in'}
                    isRegular={false}
                    isSingleBtn={true}
                />
            </form>
        );
    }
}

export default SignInForm;