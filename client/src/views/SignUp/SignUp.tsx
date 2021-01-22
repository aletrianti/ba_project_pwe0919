import React, { lazy, Suspense } from 'react';
import BackgroundSideBar from '../../components/common/BackgroundSideBar/BackgroundSideBar';
import Button from '../../components/common/Button/Button';

import SignUpFormStart from '../../components/SignUp/SignUpFormStart/SignUpFormStart';

import { connect } from 'react-redux';

interface SignUpProps {
  currentStep: number;
  accountType: string;
}

class SignUp extends React.Component<SignUpProps> {
  // Dynamic imports (performance)
  FirstStepEmployeeForm = lazy(
    () => import('../../components/SignUp/SignUpFormEmployee/FirstStepEmployeeForm/FirstStepEmployeeForm')
  );
  SecondStepEmployeeForm = lazy(
    () => import('../../components/SignUp/SignUpFormEmployee/SecondStepEmployeeForm/SecondStepEmployeeForm')
  );
  FinalStepEmployeeForm = lazy(
    () => import('../../components/SignUp/SignUpFormEmployee/FinalStepEmployeeForm/FinalStepEmployeeForm')
  );
  FirstStepCompanyForm = lazy(
    () => import('../../components/SignUp/SignUpFormCompany/FirstStepCompanyForm/FirstStepCompanyForm')
  );
  SecondStepCompanyForm = lazy(
    () => import('../../components/SignUp/SignUpFormCompany/SecondStepCompanyForm/SecondStepCompanyForm')
  );
  ThirdStepCompanyForm = lazy(
    () => import('../../components/SignUp/SignUpFormCompany/ThirdStepCompanyForm/ThirdStepCompanyForm')
  );
  FinalStepCompanyForm = lazy(
    () => import('../../components/SignUp/SignUpFormCompany/FinalStepCompanyForm/FinalStepCompanyForm')
  );

  render() {
    const { currentStep, accountType } = this.props;

    return (
      <div id="sign-up__container">
        <BackgroundSideBar />

        <div id="sign-up__form__container">
          <div id="sign-up__wrapper">
            <Button isSignUpOrSignInBtn={true} link={'/sign-in'} btnText={'Sign in'} isConfirmBtn={false} />

            <div className="form__container">
              <h1 className="header--h1">Sign up</h1>

              <Suspense fallback={<span className="loading">Loading...</span>}>
                {accountType === '' ? (
                  <SignUpFormStart />
                ) : (
                  [
                    accountType === 'employee'
                      ? [
                          currentStep === 1 ? (
                            <this.FirstStepEmployeeForm key={currentStep} />
                          ) : currentStep === 2 ? (
                            <this.SecondStepEmployeeForm key={currentStep} />
                          ) : (
                            <this.FinalStepEmployeeForm key={currentStep} />
                          ),
                        ]
                      : [
                          currentStep === 1 ? (
                            <this.FirstStepCompanyForm key={currentStep} />
                          ) : currentStep === 2 ? (
                            <this.SecondStepCompanyForm key={currentStep} />
                          ) : currentStep === 3 ? (
                            <this.ThirdStepCompanyForm key={currentStep} />
                          ) : (
                            <this.FinalStepCompanyForm key={currentStep} />
                          ),
                        ],
                  ]
                )}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { currentStep, accountType } = state.signUpInfo;

  return {
    currentStep,
    accountType,
  };
};

export default connect(mapStateToProps)(SignUp);
