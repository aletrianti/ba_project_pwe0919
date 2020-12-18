import React from 'react';
import SignInForm from '../SignInForm/SignInForm';
import Button from '../../common/Button/Button';

// styles
import './SignInContainer.scss';


class SignInContainer extends React.Component {
    render() {
        return (
            <div id="sign-in__wrapper">
                <Button 
                    isLink={true}
                    btnText={'Sign up'}
                    isRegular={true}
                />

                <div className="form__container">
                    <h1 className="header--h1">Sign in</h1>

                    <SignInForm />
                </div>
            </div>
        );
    }
}

export default SignInContainer;
