import React from 'react';
import './SelectField.scss';

import { IOptions } from '../../../store/interfaces/selectOptions.interfaces';

// declare interfaces for props
interface SelectFieldProps {
  name: string;
  options: IOptions;
  onchange: any;
}

class SelectField extends React.Component<SelectFieldProps> {
  render() {
    const { name, options, onchange } = this.props;

    const handleOnChange = (event: any): void => {
      onchange(event.target.value);
    };

    return (
      <div className="select-field__container" onChange={handleOnChange}>
        <label htmlFor={`Select[${name}]`}>{name}</label>

        <select name={`Select[${name}]`}>
          {options.list.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectField;
