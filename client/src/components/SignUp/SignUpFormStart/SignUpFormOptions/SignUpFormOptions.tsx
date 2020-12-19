import React from 'react';
import './SignUpFormOptions.scss';

interface SignUpFormOptionsProps {
    onclick: any
}

class SignUpFormOptions extends React.Component<SignUpFormOptionsProps> {
    render() {
        const { onclick } = this.props;

        const handleOnClick = (event: any): void => {
            onclick(event.target.value);
        };

        return (
            <div id="sign-up__form__options">
                <label className="radio-btn__container">
                    <input type="radio" name="account" id="company-account" value="company" onClick={handleOnClick}/>
                    <span className="radio-btn"></span>
                    Company account
                </label>
                <label className="radio-btn__container">
                    <input type="radio" name="account" id="employee-account" value="employee" onClick={handleOnClick}/>
                    <span className="radio-btn"></span>
                    Employee account
                </label>
            </div>
        );
    }
}

export default SignUpFormOptions;
