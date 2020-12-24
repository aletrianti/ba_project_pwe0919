// Validation
interface IValidatorResult {
  isValid: boolean;
  message: string;
}

export const validator = (props: any): IValidatorResult => {
  // modify with switch statements
  return { isValid: true, message: '' };
};
