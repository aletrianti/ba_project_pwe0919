// Validation
interface IValidatorResult {
  isValid: boolean;
  message: string;
}

// types
export const validatorTypes = {
  EMAIL: 'email',
  PASSWORD: 'password',
  ACCOUNT_TYPE: 'account_type',
};

// General validators
const isNotUndefined = (data: any): boolean => (data ? true : false);

// Specific validators
const validateEmail = (email: string): IValidatorResult => {
  if (isNotUndefined(email)) {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;

    return regex.test(email)
      ? { isValid: true, message: '' }
      : { isValid: false, message: 'This is not a valid email. Please, try again.' };
  } else {
    return { isValid: false, message: '"Email" is required.' };
  }
};

const validatePassword = (password: string): IValidatorResult => {
  if (isNotUndefined(password)) {
    return password.length >= 8
      ? { isValid: true, message: '' }
      : { isValid: false, message: 'Passwords must be min. 8 characters. Please, try again.' };
  } else {
    return { isValid: false, message: '"Email" is required.' };
  }
};

export const validator = (field: string, type: string): IValidatorResult => {
  // modify with switch statements
  switch (type) {
    case validatorTypes.EMAIL:
      return validateEmail(field);
    case validatorTypes.PASSWORD:
      return validatePassword(field);
    case validatorTypes.ACCOUNT_TYPE:
      return isNotUndefined(field)
        ? { isValid: true, message: '' }
        : { isValid: false, message: 'You must choose an account type.' };
    default:
      return { isValid: false, message: '' };
  }
};
