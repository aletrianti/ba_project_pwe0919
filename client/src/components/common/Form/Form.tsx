import React, { MouseEvent } from 'react';
import './Form.scss';

import { IField, IModal, IToggleModalAction } from '../../../store/interfaces/forms.interfaces';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';
import { TOGGLE_MODAL } from '../../../store/actions/forms/forms.types';
import store from '../../../index';
import { connect } from 'react-redux';

interface FormProps {
  cancelBtnName?: string;
  confirmBtnName?: string;
  fields: IField[];
  header: string;
  isModalOpen: boolean;
}

class Form extends React.Component<FormProps> {
  submitData = () => {};

  closeModal = (e: MouseEvent) => {
    e.preventDefault();

    const payload: IModal = { isOpen: false };
    const action: IToggleModalAction = { type: TOGGLE_MODAL, payload };

    store.dispatch(action);
  };

  render() {
    return (
      <div className="form__wrapper" style={{ display: this.props.isModalOpen ? 'flex' : 'none' }}>
        <form onSubmit={this.submitData} className="form">
          <h5 className="form__header">{this.props.header}</h5>

          {this.props.fields.map((field, i) => {
            return field.type === 'text' ? (
              <InputField name={field.name} onchange={field.onchange} value={field.value || ''} key={i} />
            ) : (
              [
                field.type === 'textarea' ? (
                  <InputField name={field.name} onchange={field.onchange} isTextarea={true} value={field.value || ''} key={i} />
                ) : null,
              ]
            );
          })}

          <div className="form__btns">
            <div onClick={(e: MouseEvent) => this.closeModal(e)}>
              <Button btnText={this.props.cancelBtnName || 'Cancel'} isRegular={true} isConfirmBtn={false} />
            </div>
            <Button btnText={this.props.confirmBtnName || 'Save'} isRegular={false} isConfirmBtn={true} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isModalOpen: state.formModal.isOpen };
};

export default connect(mapStateToProps)(Form);
