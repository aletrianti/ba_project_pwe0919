import React from 'react';
import BackgroundSideBar from '../../components/common/BackgroundSideBar/BackgroundSideBar';
import Button from '../../components/common/Button/Button';

import SignUpFormStart from '../../components/SignUp/SignUpFormStart/SignUpFormStart';

import FirstStepEmployeeForm from '../../components/SignUp/SignUpFormEmployee/FirstStepEmployeeForm/FirstStepEmployeeForm';
import SecondStepEmployeeForm from '../../components/SignUp/SignUpFormEmployee/SecondStepEmployeeForm/SecondStepEmployeeForm';
import FinalStepEmployeeForm from '../../components/SignUp/SignUpFormEmployee/FinalStepEmployeeForm/FinalStepEmployeeForm';

import FirstStepCompanyForm from '../../components/SignUp/SignUpFormCompany/FirstStepCompanyForm/FirstStepCompanyForm';
import SecondStepCompanyForm from '../../components/SignUp/SignUpFormCompany/SecondStepCompanyForm/SecondStepCompanyForm';
import ThirdStepCompanyForm from '../../components/SignUp/SignUpFormCompany/ThirdStepCompanyForm/ThirdStepCompanyForm';
import FinalStepCompanyForm from '../../components/SignUp/SignUpFormCompany/FinalStepCompanyForm/FinalStepCompanyForm';

class SignUp extends React.Component {
    render() {
        const pathname = window.location.pathname.split('/');
        // ex. pathname = ["", "sign-up", "1", "company"]
        const accountType = pathname[2];
        const currentStep = Number(pathname[3]);
        
        return (
            <div id="sign-up__container">
                <BackgroundSideBar />
    
                <div id="sign-up__form__container">
                    <div id="sign-up__wrapper">
                        <Button 
                            isSignUpOrSignInBtn={true}
                            link={'/sign-in'}
                            btnText={'Sign in'}
                        />
    
                        <div className="form__container">
                            <h1 className="header--h1">Sign up</h1>
    
                            { 
                                !accountType ? (<SignUpFormStart />) : [
                                    accountType === 'employee' ? [
                                        currentStep === 1 ? 
                                            (<FirstStepEmployeeForm key={currentStep}/>) : 
                                            currentStep === 2 ?
                                                (<SecondStepEmployeeForm key={currentStep}/>) :
                                                (<FinalStepEmployeeForm key={currentStep}/>)
                                    ] : [
                                        currentStep === 1 ?
                                            (<FirstStepCompanyForm key={currentStep}/>) : 
                                                currentStep === 2 ? 
                                                    (<SecondStepCompanyForm key={currentStep}/>) : 
                                                    currentStep === 3 ?
                                                        (<ThirdStepCompanyForm key={currentStep}/>) : 
                                                        (<FinalStepCompanyForm key={currentStep}/>)
                                    ]
                                ] 
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
