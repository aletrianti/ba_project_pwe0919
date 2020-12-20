import { FormEvent, MouseEvent } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

// import store
import store from '../../index';

import { CHANGE_STEP } from '../../store/actions/signUpSteps/signUpSteps.types';
import { ISignUpStep, IChangeStepAction } from '../../store/interfaces/signUpSteps.interfaces';

const dispatchAction = (step: number, accountType: string): ISignUpStep => {
    const payload: ISignUpStep = {
        currentStep: step,
        accountType: accountType
    }

    const action: IChangeStepAction = { type: CHANGE_STEP, payload };

    store.dispatch(action);

    return payload;
}

// TODO: make a function to handle users going back and forth WITHOUT buttons
const changeStep = (
    goForward: boolean, 
    event: FormEvent | MouseEvent, 
    history: any
): void => {
    event.preventDefault();
    
    let step;
    const state: AnyAction = store.getState();
    const pathname = window.location.pathname;

    const currentStep: number = state.signUpInfo.currentStep;
    const accountType: string = state.signUpAccountType.accountType;

    // error handling in case users go back without using buttons
    if (pathname === '/sign-up' && currentStep !== 0) {
        step = 1;
    } else {
        step = goForward ? currentStep + 1 : currentStep - 1;
    }

    const payload = dispatchAction(step, accountType);

    const goingBackFromStep1 = !goForward && pathname !== '/sign-up' && currentStep === 1;
    
    if (goingBackFromStep1) {
        history.push('/sign-up');
    } else {
        history.push(`/sign-up/${payload.accountType}/${payload.currentStep.toString()}`);
    }
}

export const goToNextStep = (event: FormEvent, history: any): void => {
    changeStep(true, event, history);
};

export const goToPreviousStep = (event: MouseEvent, history: any): void => {
    changeStep(false, event, history);
}

// for switching between "Sign in" and "Sign up"
export const resetFormStateOnRedirect = (link: any, history: any): void => {
    dispatchAction(0, '');

    history.push(link);
}
