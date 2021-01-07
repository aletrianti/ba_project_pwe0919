import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { goToPreviousStep, resetFormStateOnRedirect } from '../../../utils/ChangeFormStep';

interface ButtonProps {
  isSignUpOrSignInBtn?: boolean;
  isLink?: boolean;
  link?: any;
  btnText: string;
  isRegular?: boolean;
  isSingleBtn?: boolean;
  isBackFormBtn?: boolean;
  isInviteBtn?: boolean;
  inviteEmployee?: any;
  isConfirmBtn: boolean;
  areAllFieldsValid?: boolean;
}

class Button extends React.Component<ButtonProps & RouteComponentProps> {
  render() {
    const {
      isSignUpOrSignInBtn,
      isLink,
      link,
      btnText,
      isRegular,
      isSingleBtn,
      isBackFormBtn,
      isInviteBtn,
      inviteEmployee,
      areAllFieldsValid,
      isConfirmBtn,
      history,
    } = this.props;

    return (
      <div className="regular-button__container">
        {isSignUpOrSignInBtn ? (
          <button
            className={'btn--dark-blue btn__sign'}
            onClick={() => {
              resetFormStateOnRedirect(link, history);
            }}
          >
            {btnText}
          </button>
        ) : isLink ? (
          <Link to={link} className={isRegular ? 'btn--dark-blue' : 'btn--orange-accent'}>
            {btnText}
          </Link>
        ) : isSingleBtn ? (
          <button className="btn--orange-accent btn--long" disabled={isConfirmBtn ? !areAllFieldsValid : false}>
            {btnText}
          </button>
        ) : isRegular ? (
          [
            isBackFormBtn ? (
              <span
                className="btn--dark-blue"
                onClick={(e: MouseEvent, history = this.props.history) => goToPreviousStep(e, history)}
                key={btnText}
              >
                {btnText}
              </span>
            ) : (
              <button className="btn--dark-blue" key={btnText}>
                {btnText}
              </button>
            ),
          ]
        ) : (
          [
            !isInviteBtn ? (
              <button
                type="submit"
                className="btn--orange-accent"
                key={btnText}
                disabled={isConfirmBtn ? !areAllFieldsValid : false}
              >
                {btnText}
              </button>
            ) : (
              <button
                className="btn--orange-accent btn__invite"
                onClick={inviteEmployee}
                key={btnText}
                disabled={isConfirmBtn ? !areAllFieldsValid : false}
              >
                {btnText}
              </button>
            ),
          ]
        )}
      </div>
    );
  }
}

export default withRouter(Button);
