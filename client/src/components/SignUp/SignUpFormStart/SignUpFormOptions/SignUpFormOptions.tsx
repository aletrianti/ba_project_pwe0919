import React from 'react';
import './SignUpFormOptions.scss';

interface SignUpFormOptionsProps {
  onclick: any;
}

interface SignUpFormOptionsState {
  isFieldValid: boolean;
  errorMessage: string;
}

class SignUpFormOptions extends React.Component<SignUpFormOptionsProps, SignUpFormOptionsState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFieldValid: true,
      errorMessage: '',
    };
  }

  render() {
    const { onclick } = this.props;

    const handleOnClick = (event: any): void => {
      const { isValid, message } = onclick(event.target.value);

      this.setState({ isFieldValid: isValid, errorMessage: message });
    };

    return (
      <div id="sign-up__form__options">
        <label className="radio-btn__container">
          <input type="radio" name="account" id="company-account" value="company" onClick={handleOnClick} />
          <span className="radio-btn"></span>
          Company account
        </label>
        <label className="radio-btn__container">
          <input type="radio" name="account" id="employee-account" value="employee" onClick={handleOnClick} />
          <span className="radio-btn"></span>
          Employee account
        </label>

        {!this.state.isFieldValid ? <span className="error__message">{this.state.errorMessage}</span> : null}
      </div>
    );
  }
}

export default SignUpFormOptions;
