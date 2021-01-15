import React from 'react';
import { connect } from 'react-redux';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableFAQ } from '../../../../store/interfaces/tables.interfaces';
import { ToggleEditFaqModalAction, ToggleDeleteFaqModalAction } from '../../../../store/actions/forms/forms.actions';
import { IFaqModal, IDeleteFaqModal } from '../../../../store/interfaces/forms/faqs.interfaces';

interface FAQsTableProps {
  faqs: ITableFAQ[];
  toggleEditFaqModal: (editFaqModal: IFaqModal) => any;
  toggleDeleteFaqModal: (deleteFaqModal: IDeleteFaqModal) => any;
}

class FAQsTable extends React.Component<FAQsTableProps> {
  editFaq = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleEditFaqModal({ id, isOpen: true });
  };

  deleteFaq = (id: number, e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleDeleteFaqModal({ id, isOpen: true });
  };

  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: (e: MouseEvent) => this.editFaq(id, e) },
        { name: 'Delete', function: (e: MouseEvent) => this.deleteFaq(id, e) },
      ]}
    />
  );

  columns = [
    { title: 'Question', columnData: (data: any) => data.question },
    { title: 'Answer', columnData: (data: any) => data.answer },
    { title: '', columnData: (data: any) => this.actions(data.id) },
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
    toggleEditFaqModal: (editFaqModal: IFaqModal) => dispatch(ToggleEditFaqModalAction(editFaqModal)),
    toggleDeleteFaqModal: (deleteFaqModal: IDeleteFaqModal) => dispatch(ToggleDeleteFaqModalAction(deleteFaqModal)),
  };
};

export default connect(null, mapDispatchToProps)(FAQsTable);
