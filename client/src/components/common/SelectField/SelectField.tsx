import React from 'react';
import './SelectField.scss';

import { IOptions } from '../../../store/interfaces/selectOptions.interfaces';

// declare interfaces for props
interface SelectFieldProps {
  name: string;
  options?: IOptions;
  onchange: any;
}

class SelectField extends React.Component<SelectFieldProps> {
  handleOnChange = (event: any): void => {
    this.props.onchange(event.target.value);
  };

  render() {
    const { name, options } = this.props;
    let opts;

    if (options) opts = options;

    return (
      <div className="select-field__container" onChange={this.handleOnChange}>
        <label htmlFor={`Select[${name}]`}>{name}</label>

        <select name={`Select[${name}]`}>
          {opts.list.map((option, i) => (
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
