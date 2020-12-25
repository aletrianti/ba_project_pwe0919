// import store
import { AnyAction } from '@reduxjs/toolkit';
import store from '../index';

export interface ICheckFields {
  areAllFieldsValid: boolean;
}

// Check if ALL fields are valid
export const checkFormFields = (fields: string[]): ICheckFields => {
  const state: AnyAction = store.getState();

  const formValues: boolean[] = fields.map(field => state[field].isValid);

  const areAllFieldsValid = formValues.every(value => value === true);

  return { areAllFieldsValid: areAllFieldsValid };
};
