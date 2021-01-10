import React from 'react';

import AddButton from '../../common/AddButton/AddButton';
import FAQsTable from './FAQsTable/FAQsTable';

class FAQs extends React.Component {
  openModal = () => {};

  render() {
    return (
      <div className="admin-panel__faqs">
        <AddButton name={'Add role'} function={this.openModal} />

        <div id="admin-panel__faqs__content" className="admin-panel__content">
          <FAQsTable />
        </div>
      </div>
    );
  }
}

export default FAQs;
