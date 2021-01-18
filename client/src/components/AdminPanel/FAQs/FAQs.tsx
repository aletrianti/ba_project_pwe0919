import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { ToggleAddFaqModalAction } from '../../../store/actions/forms/forms.actions';
import { IAddFaqModal } from '../../../store/interfaces/forms/faqs.interfaces';
import { ITableFAQ } from '../../../store/interfaces/tables.interfaces';
import { getTokenFromLocalStorage } from '../../../utils/localStorageActions';

import AddButton from '../../common/AddButton/AddButton';
import DeleteFAQsForm from './FAQsForms/DeleteFAQsForm';
import FAQsForms from './FAQsForms/FAQsForms';
import FAQsTable from './FAQsTable/FAQsTable';

interface FaqsProps {
  toggleAddFaqModal: (addFaqModal: IAddFaqModal) => any;
}

interface FaqState {
  faqs: any[];
}

class FAQs extends React.Component<FaqsProps, FaqState> {
  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddFaqModal({ isOpen: true });
    this.state = {
      faqs: [],
    };
  };

  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  getFaqs = async () => {
    return await axios.get('/api/faq', this.config).then(res => {
      return res.data;
    });
  };

  faqsModalFields: ITableFAQ[] = [];
  async componentDidMount() {
    console.log(this.faqsModalFields);
    this.faqsModalFields = await this.getFaqs();
    console.log(this.faqsModalFields);
  }

  faqs: ITableFAQ[] = this.faqsModalFields;

  render() {
    return (
      <div id="admin-panel__faqs">
        <AddButton name={'Add FAQ'} function={this.openModal} />

        <div id="admin-panel__faqs__content" className="admin-panel__content">
          <FAQsTable faqs={this.faqsModalFields} />
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
