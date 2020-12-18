import React from 'react';
import './SignUpFormOptions.scss';

class SignUpFormOptions extends React.Component {
    render() {
        return (
            <div id="sign-up__form__options">
                <label className="radio-btn__container">
                    <input type="radio" name="account" id="company-account"/>
                    <span className="radio-btn"></span>
                    Company account
                </label>
                <label className="radio-btn__container">
                    <input type="radio" name="account" id="employee-account"/>
                    <span className="radio-btn"></span>
                    Employee account
                </label>
            </div>
        );
    }
}

export default SignUpFormOptions;
