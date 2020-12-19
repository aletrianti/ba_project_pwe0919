import React from 'react';
import SignUpFormStart from '../SignUpFormStart/SignUpFormStart/SignUpFormStart';
import Button from '../../common/Button/Button';

class SignUpContainer extends React.Component {
    render() {
        return (
            <div id="sign-up__wrapper">
                <Button 
                    isLink={true}
                    link={'/sign-in'}
                    btnText={'Sign in'}
                    isRegular={true}
                />

                <div className="form__container">
                    <h1 className="header--h1">Sign up</h1>

                    <SignUpFormStart />
                </div>
            </div>
        );
    }
}

export default SignUpContainer;
