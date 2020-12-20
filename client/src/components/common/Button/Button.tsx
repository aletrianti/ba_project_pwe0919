import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

interface ButtonProps {
    isSignUpOrSignInBtn?: boolean,
    isLink?: boolean,
    link?: any,
    btnText: string,
    isRegular?: boolean,
    isSingleBtn?: boolean
}

class Button extends React.Component<ButtonProps> {
    render() {
        const { 
            isSignUpOrSignInBtn,
            isLink, 
            link, 
            btnText, 
            isRegular, 
            isSingleBtn
        } = this.props;

        return (
            <div className="regular-button__container">
                {
                    isSignUpOrSignInBtn ? (<Link to={link} className={"btn--dark-blue btn__sign"}>{ btnText }</Link>) :
                    isLink ? (<Link to={link} className={isRegular ? "btn--dark-blue" : "btn--orange-accent"}>{ btnText }</Link>) : 
                    isSingleBtn ? (<button className="btn--orange-accent btn--long">{ btnText }</button>) :
                    isRegular ? 
                        (<button className="btn--dark-blue">{ btnText }</button>) : 
                        (<button className="btn--orange-accent">{ btnText }</button>)
                }
            </div>
        );
    }
}

export default Button;