import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

interface ButtonProps {
    isLink?: boolean,
    link?: any,
    btnText: string,
    isRegular: boolean,
    isSingleBtn?: boolean
}

class Button extends React.Component<ButtonProps> {
    render() {
        const { isLink, link, btnText, isRegular, isSingleBtn } = this.props;

        return (
            <div className="regular-button__container">
                {
                    isLink ? (
                        <Link to={link} className={isRegular ? "btn--dark-blue" : "btn--orange-accent"}>{ btnText }</Link>
                    ) : 
                    isSingleBtn ? (
                        <button className="btn--orange-accent btn--long">{ btnText }</button>
                    ) :
                    null
                }
            </div>
        );
    }
}

export default Button;