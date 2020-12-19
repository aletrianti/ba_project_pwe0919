import React from 'react';
import BackgroundSideBar from '../../components/common/BackgroundSideBar/BackgroundSideBar';
import SignUpFormStart from '../../components/SignUp/SignUpFormStart/SignUpFormStart';
import Button from '../../components/common/Button/Button';

class SignUp extends React.Component {
    render() {
        const pathname = window.location.pathname.split('/');
        // ex. pathname = ["", "sign-up", "1", "company"]
        const accountType = pathname[2];
        const currentStep = pathname[3];
        
        return (
            <div id="sign-up__container">
                <BackgroundSideBar />
    
                <div id="sign-up__form__container">
                    <div id="sign-up__wrapper">
                        <Button 
                            isLink={true}
                            link={'/sign-in'}
                            btnText={'Sign in'}
                            isRegular={true}
                        />
    
                        <div className="form__container">
                            <h1 className="header--h1">Sign up</h1>
    
                            {
                                !accountType ? 
                                    (<SignUpFormStart />) :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
