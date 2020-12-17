import React from 'react';
import BackgroundSideBar from '../../components/common/BackgroundSideBar/BackgroundSideBar';
import FormSideBar from '../../components/common/FormSideBar/FormSideBar';
import './SignIn.scss';

const SignIn = () => {
    return (
        <div id="sign-in__container">
            <BackgroundSideBar />
            <FormSideBar viewName={'sign-in'}/>
        </div>
    );
};

export default SignIn;