import React, { FormEvent, MouseEvent } from 'react';
import './Form.scss';

import { IField } from '../../../store/interfaces/forms.interfaces';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import SelectField from '../SelectField/SelectField';

interface FormProps {
  cancelBtnName?: string;
  confirmBtnName?: string;
  fields: IField[];
  header: string;
  isModalOpen: boolean;
  submitFunction: any;
  closeFunction: any;
  areFieldsValid: boolean;
}

class Form extends React.Component<FormProps> {
  render() {
    return (
      <div className="form__wrapper" style={{ display: this.props.isModalOpen ? 'flex' : 'none' }}>
        <form onSubmit={(e: FormEvent) => this.props.submitFunction(e)} className="form">
          <h5 className="form__header">{this.props.header}</h5>

          {this.props.fields.map((field, i) => {
            return field.type === 'select' ? (
              <SelectField name={field.name} options={field.options} onchange={field.onchange} />
            ) : (
              [
                field.type === 'textarea' ? (
                  <InputField name={field.name} onchange={field.onchange} isTextarea={true} value={field.value || ''} key={i} />
                ) : (
                  <InputField name={field.name} onchange={field.onchange} value={field.value || ''} key={i} />
                ),
              ]
            );
          })}

          <div className="form__btns">
            <div onClick={(e: MouseEvent) => this.props.closeFunction(e)}>
              <Button btnText={this.props.cancelBtnName || 'Cancel'} isRegular={true} isConfirmBtn={false} />
            </div>
            <Button
              btnText={this.props.confirmBtnName || 'Save'}
              isRegular={false}
              isConfirmBtn={true}
              areAllFieldsValid={this.props.areFieldsValid}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
