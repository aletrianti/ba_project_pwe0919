import React, { MouseEvent } from 'react';
import './AddButton.scss';

import AddIcon from '@material-ui/icons/Add';

interface AddButtonProps {
  name: string;
  function: any;
}

class AddButton extends React.Component<AddButtonProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <button className="add-btn__container" onClick={this.props.function}>
        <span>{this.props.name}</span> <AddIcon />
      </button>
    );
  }
}

export default AddButton;
