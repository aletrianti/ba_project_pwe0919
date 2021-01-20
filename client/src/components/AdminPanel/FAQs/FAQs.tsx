import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

import { ToggleAddFaqModalAction } from '../../../store/actions/forms/forms.actions';
import { IAddFaqModal } from '../../../store/interfaces/forms/faqs.interfaces';
import { ITableFAQ } from '../../../store/interfaces/tables.interfaces';
import { getFAQs } from '../../../utils/httpRequests';
import { getTokenFromLocalStorage } from '../../../utils/localStorageActions';

import AddButton from '../../common/AddButton/AddButton';
import DeleteFAQsForm from './FAQsForms/DeleteFAQsForm';
import FAQsForms from './FAQsForms/FAQsForms';
import FAQsTable from './FAQsTable/FAQsTable';

interface FaqsProps {
  toggleAddFaqModal: (addFaqModal: IAddFaqModal) => any;
}

interface FaqState {
  faqs: ITableFAQ[];
}

class FAQs extends React.Component<FaqsProps, FaqState> {
  constructor(props: any) {
    super(props);

    this.state = {
      faqs: [],
    };
  }

  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddFaqModal({ isOpen: true });
  };

  async componentDidMount() {
    const faqs = await getFAQs();

    this.setState({ faqs: faqs });
  }

  render() {
    return (
      <div id="admin-panel__faqs">
        <AddButton name={'Add FAQ'} function={this.openModal} />

        <div id="admin-panel__faqs__content" className="admin-panel__content">
          <FAQsTable faqs={this.state.faqs} />
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
