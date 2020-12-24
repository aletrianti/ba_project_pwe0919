import React from 'react';
import './InputField.scss';

// declare interfaces for props
interface InputFieldProps {
  name: string;
  isPassword?: boolean;
  isInviteUsersField?: boolean;
  onchange: any;
  isValid?: boolean;
  errorMessage?: string;
}

class InputField extends React.Component<InputFieldProps> {
  render() {
    const { name, isPassword, onchange, isInviteUsersField, isValid, errorMessage } = this.props;

    const handleOnChange = (event: any): void => {
      onchange(event.target.value);
    };

    return (
      <div className="input-field__container">
        <label htmlFor={`Input[${name}]`}>{name}</label>

        <p className="input-field__password-text">{isPassword ? 'Must be min. 8 characters' : null}</p>

        {!isInviteUsersField ? (
          <input
            type={isPassword ? 'password' : 'text'}
            placeholder={name}
            alt={name}
            name={`Input[${name}]`}
            onChange={handleOnChange}
            className={!isValid ? 'input-field__invalid' : ''}
          />
        ) : (
          <input
            type="text"
            placeholder={name}
            alt={name}
            name={`Input[${name}]`}
            onChange={handleOnChange}
            className={'input-field__invite-users'}
          />
        )}

        {!isValid ? <span className="error__message">{errorMessage}</span> : null}
      </div>
    );
  }
}

export default InputField;
