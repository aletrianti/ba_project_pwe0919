// Validation
interface IValidatorResult {
  isValid: boolean;
  message: string;
}

// Types
export const validatorTypes = {
  EMAIL: 'email',
  PASSWORD: 'password',
  REQUIRED: 'required',
};

// Error messages
const messages = {
  INVALID_EMAIL: 'This is not a valid email. Please, try again.',
  PASSWORD_TOO_SHORT: 'Passwords must be min. 8 characters. Please, try again.',
  REQUIRED_FIELD: 'This field is required.',
};

// Results
const INVALID_RESULT = (message: string): IValidatorResult => {
  return { isValid: false, message: message };
};
const VALID_RESULT = (): IValidatorResult => {
  return { isValid: true, message: '' };
};

// General validators
const isNotUndefined = (data: any): boolean => (data ? true : false);

// Specific validators
const validateEmail = (email: string): IValidatorResult => {
  if (isNotUndefined(email)) {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;

    return regex.test(email) ? VALID_RESULT() : INVALID_RESULT(messages.INVALID_EMAIL);
  } else {
    return INVALID_RESULT(messages.REQUIRED_FIELD);
  }
};
const validatePassword = (password: string): IValidatorResult => {
  if (isNotUndefined(password)) {
    return password.length >= 8 ? VALID_RESULT() : INVALID_RESULT(messages.PASSWORD_TOO_SHORT);
  } else {
    return INVALID_RESULT(messages.REQUIRED_FIELD);
  }
};

// Validator
export const validator = (field: string, type: string): IValidatorResult => {
  // modify with switch statements
  switch (type) {
    case validatorTypes.EMAIL:
      return validateEmail(field);
    case validatorTypes.PASSWORD:
      return validatePassword(field);
    case validatorTypes.REQUIRED:
      return isNotUndefined(field) ? VALID_RESULT() : INVALID_RESULT(messages.REQUIRED_FIELD);
    default:
      return INVALID_RESULT('');
  }
};
