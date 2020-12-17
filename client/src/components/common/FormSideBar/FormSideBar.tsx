import React from 'react';
import SignUpForm from '../../SignUp/SignUpForm/SignUpForm';
import SignIn from '../../SignIn/SignIn';
import './FormSideBar.scss';

// declare interfaces for props
interface FormSideBarProps {
    viewName: string
}

class FormSideBar extends React.Component<FormSideBarProps> {
    constructor(props: FormSideBarProps) {
        super(props);
    }

    render() {
        return (
            <div id="form__container">
                {
                    this.props.viewName === 'sign-up' ? (<SignUpForm/>) : 
                    this.props.viewName === 'sign-in' ? (<SignIn/>) :
                    null
                }
            </div>
        );
    }
}

export default FormSideBar;