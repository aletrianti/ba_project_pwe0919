import React from 'react';
import './InputField.scss';

// declare interfaces for props
interface InputFieldProps {
  name: string;
  isPassword?: boolean;
  isInviteUsersField?: boolean;
  onchange: any;
}

interface InputFieldState {
  isFieldValid: boolean;
  errorMessage: string;
}

class InputField extends React.Component<InputFieldProps, InputFieldState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFieldValid: true,
      errorMessage: '',
    };
  }

  handleOnChange = (event: any): void => {
    const { isValid, message } = this.props.onchange(event.target.value);

    this.setState({ isFieldValid: isValid, errorMessage: message });
  };

  render() {
    const { name, isPassword, isInviteUsersField } = this.props;

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
            onChange={this.handleOnChange}
            className={!this.state.isFieldValid ? 'input-field__invalid' : ''}
          />
        ) : (
          <input
            type="text"
            placeholder={name}
            alt={name}
            name={`Input[${name}]`}
            onChange={this.handleOnChange}
            className={'input-field__invite-users'}
          />
        )}

        {!this.state.isFieldValid ? <span className="error__message">{this.state.errorMessage}</span> : null}
      </div>
    );
  }
}

export default InputField;
