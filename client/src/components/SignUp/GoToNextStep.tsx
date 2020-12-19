import { FormEvent } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

// import store
import store from '../../index';

import { CHANGE_STEP } from '../../store/actions/signUpSteps/signUpSteps.types';
import { ISignUpStep, IChangeStepAction } from '../../store/interfaces/signUpSteps.interfaces';

export const goToNextStep = (event: FormEvent, history: any): void => {
    event.preventDefault();

    let step;
    const state: AnyAction = store.getState();
    const pathname = window.location.pathname;

    const currentStep: number = state.signUpInfo.currentStep;

    // error handling in case users go back to the first view
    if (pathname === '/sign-up' && currentStep !== 0) {
        step = 1;
    } else {
        step = currentStep + 1;
    }

    const payload: ISignUpStep = {
        currentStep: step,
        accountType: state.signUpAccountType.accountType
    }

    const action: IChangeStepAction = { type: CHANGE_STEP, payload };

    store.dispatch(action);

    history.push(`/sign-up/${payload.accountType}/${payload.currentStep.toString()}`);
};
