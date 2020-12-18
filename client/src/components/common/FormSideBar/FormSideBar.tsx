import React from 'react';
import SignUpForm from '../../SignUp/SignUpForm/SignUpForm';
import SignInContainer from '../../SignIn/SignInContainer/SignInContainer';
import './FormSideBar.scss';

// declare interfaces for props
interface FormSideBarProps {
    viewName: string
}

class FormSideBar extends React.Component<FormSideBarProps> {
    render() {
        const { viewName } = this.props;

        return (
            <div id="form__container">
                {
                    viewName === 'sign-up' ? (<SignUpForm/>) : 
                    viewName === 'sign-in' ? (<SignInContainer/>) :
                    null
                }
            </div>
        );
    }
}

export default FormSideBar;