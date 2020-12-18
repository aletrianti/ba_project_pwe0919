import React from 'react';
import SignUpFormOptions from './SignUpFormOptions/SignUpFormOptions';
import Button from '../../common/Button/Button';
import './SignUpFormStep1.scss';

class SignUpFormStep1 extends React.Component {
    render() {
        return (
            <div id="sign-up__form__step1">
                <h2>I want to create a...*</h2>

                <SignUpFormOptions />

                <span>* required field</span>

                <Button
                    btnText={'Start'}
                    isRegular={false}
                    isSingleBtn={true}
                />
            </div>
        );
    }
}

export default SignUpFormStep1;