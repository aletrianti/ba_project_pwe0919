import React from 'react';

import { ITableFAQ } from '../../../store/interfaces/tables.interfaces';

import AddButton from '../../common/AddButton/AddButton';
import FAQsTable from './FAQsTable/FAQsTable';

class FAQs extends React.Component {
  openModal = () => {};

  faqs: ITableFAQ[] = [
    {
      question: 'Who can I ask for help?',
      answer: `In the dashboard, you can see a name under the section “Buddy”: this is the name of the person you had been assigned to. Your “buddy” will give you all the help you need to start at NewCompany.`,
    },
  ];

  render() {
    return (
      <div id="admin-panel__faqs">
        <AddButton name={'Add role'} function={this.openModal} />

        <div id="admin-panel__faqs__content" className="admin-panel__content">
          <FAQsTable faqs={this.faqs} />
        </div>
      </div>
    );
  }
}

export default FAQs;
