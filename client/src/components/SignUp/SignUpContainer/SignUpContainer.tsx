import React from 'react';
import SignUpFormStep1 from '../SignUpFormStep1/SignUpFormStep1';
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

                    <SignUpFormStep1 />
                </div>
            </div>
        );
    }
}

export default SignUpContainer;
