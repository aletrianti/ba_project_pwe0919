import React from 'react';
import { connect } from 'react-redux';

import { ToggleAddFaqModalAction } from '../../../store/actions/forms/forms.actions';
import { IAddFaqModal } from '../../../store/interfaces/forms/faqs.interfaces';
import { ITableFAQ } from '../../../store/interfaces/tables.interfaces';

import AddButton from '../../common/AddButton/AddButton';
import DeleteFAQsForm from './FAQsForms/DeleteFAQsForm';
import FAQsForms from './FAQsForms/FAQsForms';
import FAQsTable from './FAQsTable/FAQsTable';

interface FaqsProps {
  toggleAddFaqModal: (addFaqModal: IAddFaqModal) => any;
}

class FAQs extends React.Component<FaqsProps> {
  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddFaqModal({ isOpen: true });
  };

  faqs: ITableFAQ[] = [
    {
      id: 1,
      question: 'Who can I ask for help?',
      answer: `In the dashboard, you can see a name under the section “Buddy”: this is the name of the person you had been assigned to. Your “buddy” will give you all the help you need to start at NewCompany.`,
    },
  ];

  render() {
    return (
      <div id="admin-panel__faqs">
        <AddButton name={'Add FAQ'} function={this.openModal} />

        <div id="admin-panel__faqs__content" className="admin-panel__content">
          <FAQsTable faqs={this.faqs} />
        </div>

        <FAQsForms />
        <DeleteFAQsForm />
      </div>
    );
  }
}

const mapDisparchToProps = (dispatch: any) => {
  return {
    toggleAddFaqModal: (addFaqModal: IAddFaqModal) => dispatch(ToggleAddFaqModalAction(addFaqModal)),
  };
};

export default connect(null, mapDisparchToProps)(FAQs);
