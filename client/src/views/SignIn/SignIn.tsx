import React from 'react';
import BackgroundSideBar from '../../components/common/BackgroundSideBar/BackgroundSideBar';
import SignInContainer from '../../components/SignIn/SignInContainer/SignInContainer';

const SignIn = () => {
  return (
    <div id="sign-in__container">
      <BackgroundSideBar />
      <div id="sign-in__form__container">
        <SignInContainer />
      </div>
    </div>
  );
};

export default SignIn;
