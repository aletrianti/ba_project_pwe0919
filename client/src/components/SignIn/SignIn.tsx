import React from 'react';
import SignInForm from './SignInForm/SignInForm';
import RegularButton from '../common/RegularButton/RegularButton';

// styles
import './SignIn.scss';


class SignIn extends React.Component {
    render() {
        return (
            <div id="sign-in__wrapper">
                <RegularButton btnText={'Sign up'}/>
                <SignInForm />
            </div>
        );
    }
}

export default SignIn;
