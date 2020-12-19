import React from 'react';
import './InputField.scss';

// declare interfaces for props
interface InputFieldProps {
    name: string,
    isPassword?: boolean,
    onchange: any
}

class InputField extends React.Component<InputFieldProps> {
    render() {
        const { name, isPassword, onchange } = this.props;

        const handleOnChange = (event: any): void => {
            onchange(event.target.value);
        };

        return (
            <div className="input-field__container">
                <label htmlFor={"Input" + name}>{name}</label>

                <p className="input-field__password-text">{isPassword ? "Must be min. 8 characters" : null}</p>

                <input 
                    type={isPassword ? "password" : "text"} 
                    placeholder={name} 
                    alt={name} 
                    name={"Input" + name}
                    onChange={handleOnChange}
                />
            </div>
        );
    }
}

export default InputField;