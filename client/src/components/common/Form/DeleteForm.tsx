import React, { FormEvent, MouseEvent } from 'react';

import Button from '../Button/Button';

interface DeleteFormProps {
  id: number;
  name: string;
  isModalOpen: boolean;
  submitFunction: any;
  closeFunction: any;
}

class DeleteForm extends React.Component<DeleteFormProps> {
  render() {
    return (
      <div className="form__wrapper" style={{ display: this.props.isModalOpen ? 'flex' : 'none' }}>
        <form onSubmit={(e: FormEvent) => this.props.submitFunction(e, this.props.id)} className="form">
          <h5 className="form__header__delete">Are you sure you want to delete this {this.props.name}?</h5>

          <div className="form__btns">
            <div onClick={(e: MouseEvent) => this.props.closeFunction(e)}>
              <Button btnText={'No'} isRegular={true} isConfirmBtn={false} />
            </div>
            <Button btnText={'Yes'} isRegular={false} isConfirmBtn={true} areAllFieldsValid={true} />
          </div>
        </form>
      </div>
    );
  }
}

export default DeleteForm;
