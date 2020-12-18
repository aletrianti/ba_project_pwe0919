import React from 'react';
import InputField from '../../common/InputField/InputField';
import Button from '../../common/Button/Button';
import './SignInForm.scss';

class SignInForm extends React.Component {
    render() {
        return (
            <div className="sign-in__form">
                <InputField name={'Email'}/>
                <InputField name={'Password'} isPassword={true}/>
                <Button
                    btnText={'Sign in'}
                    isRegular={false}
                    isSingleBtn={true}
                />
            </div>
        );
    }
}

export default SignInForm;