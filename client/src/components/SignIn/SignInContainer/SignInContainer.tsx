import React from 'react';
import SignInForm from '../SignInForm/SignInForm';
import Button from '../../common/Button/Button';

class SignInContainer extends React.Component {
  render() {
    return (
      <div id="sign-in__wrapper">
        <Button isSignUpOrSignInBtn={true} link={'/sign-up'} btnText={'Sign up'} />

        <div className="form__container">
          <h1 className="header--h1">Sign in</h1>

          <SignInForm />
        </div>
      </div>
    );
  }
}

export default SignInContainer;
