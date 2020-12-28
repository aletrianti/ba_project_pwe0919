import React from 'react';
import AddIcon from '@material-ui/icons/Add';

class AddCategory extends React.Component {
  render() {
    return (
      <div className="category__add-btn category">
        <AddIcon />
      </div>
    );
  }
}

export default AddCategory;
