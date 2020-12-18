import React from 'react';
import './InputField.scss';

// declare interfaces for props
interface InputFieldProps {
    name: string,
    isPassword?: boolean,
    validateContent?: void
}


class InputField extends React.Component<InputFieldProps> {
    render() {
        const { name, isPassword,  } = this.props;

        return (
            <div className="input-field__container">
                <label htmlFor={"Input" + name}>{name}</label>

                <p className="input-field__password-text">{isPassword ? "Must be min. 8 characters" : null}</p>

                <input 
                    type={isPassword ? "password" : "text"} 
                    placeholder={name} 
                    alt={name} 
                    name={"Input" + name}
                    //onChange={validateContent}
                />
            </div>
        );
    }
}

export default InputField;