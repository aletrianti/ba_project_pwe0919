import React from 'react';
import { connect } from 'react-redux';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableFAQ } from '../../../../store/interfaces/tables.interfaces';
import { ToggleEditFaqModalAction, ToggleDeleteFaqModalAction } from '../../../../store/actions/forms/forms.actions';
import { IEditFaqModal, IDeleteFaqModal, IFaq } from '../../../../store/interfaces/forms/faqs.interfaces';
import { StoreFaqAction } from '../../../../store/actions/forms/faqs/faqs.actions';

interface FAQsTableProps {
  faqs: ITableFAQ[];
  storeFaq: (faq: IFaq) => any;
  toggleEditFaqModal: (editFaqModal: IEditFaqModal) => any;
  toggleDeleteFaqModal: (deleteFaqModal: IDeleteFaqModal) => any;
}

class FAQsTable extends React.Component<FAQsTableProps> {
  editFaq = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.storeFaq({
      question: { question: data.question, isValid: true, errorMessage: '' },
      answer: { answer: data.answer, isValid: true, errorMessage: '' },
    });
    this.props.toggleEditFaqModal({ id: data.id, isOpen: true });
  };

  deleteFaq = (data: any, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteFaqModal({ id: data.id, isOpen: true });
  };

  actions = (data: any) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editFaq(data, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteFaq(data, e) },
      ]}
    />
  );

  columns = [
    { title: 'Question', columnData: (data: any) => data.question },
    { title: 'Answer', columnData: (data: any) => data.answer },
    { title: '', columnData: (data: any) => this.actions(data) },
  ];

  render() {
    return (
      <div id="faqs__table">
        <Table data={this.props.faqs} columns={this.columns} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeFaq: (faq: IFaq) => dispatch(StoreFaqAction(faq)),
    toggleEditFaqModal: (editFaqModal: IEditFaqModal) => dispatch(ToggleEditFaqModalAction(editFaqModal)),
    toggleDeleteFaqModal: (deleteFaqModal: IDeleteFaqModal) => dispatch(ToggleDeleteFaqModalAction(deleteFaqModal)),
  };
};

export default connect(null, mapDispatchToProps)(FAQsTable);
