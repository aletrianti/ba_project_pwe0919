import React from 'react';
import BackgroundSideBar from '../../components/common/BackgroundSideBar/BackgroundSideBar';
import FormSideBar from '../../components/common/FormSideBar/FormSideBar';

const SignUp = () => {
    return (
        <div id="sign-up__container">
            <BackgroundSideBar />
            <FormSideBar viewName={'sign-up'}/>
        </div>
    );
};

export default SignUp;
