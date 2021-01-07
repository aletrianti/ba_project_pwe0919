import React from 'react';
import AddIcon from '@material-ui/icons/Add';

class AddCategory extends React.Component {
  render() {
    return (
      <button className="category__add-btn category">
        <AddIcon />
      </button>
    );
  }
}

export default AddCategory;
