import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { goToPreviousStep, resetFormStateOnRedirect } from '../../SignUp/ChangeFormStep';

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
          <button className="btn--orange-accent btn--long">{btnText}</button>
        ) : isRegular ? (
          [
            isBackFormBtn ? (
              <button
                className="btn--dark-blue"
                onClick={(e: MouseEvent, history = this.props.history) => goToPreviousStep(e, history)}
                key={btnText}
              >
                {btnText}
              </button>
            ) : (
              <button className="btn--dark-blue" key={btnText}>
                {btnText}
              </button>
            ),
          ]
        ) : (
          [
            !isInviteBtn ? (
              <button className="btn--orange-accent" key={btnText}>
                {btnText}
              </button>
            ) : (
              <button className="btn--orange-accent btn__invite" onClick={inviteEmployee} key={btnText}>
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
