import { FormEvent } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

// import store
import store from '../../index';

import { CHANGE_STEP } from '../../store/actions/signUpSteps/signUpSteps.types';
import { ISignUpStep, IChangeStepAction } from '../../store/interfaces/signUpSteps.interfaces';

export const goToNextStep = (event: FormEvent): void => {
    event.preventDefault();

    const state: AnyAction = store.getState();

    const currentStep: number = state.signUpInfo.currentStep;

    const payload: ISignUpStep = {
        currentStep: currentStep + 1,
        accountType: state.signUpAccountType.accountType
    }

    const action: IChangeStepAction = { type: CHANGE_STEP, payload };

    store.dispatch(action);
};
