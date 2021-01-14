import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableFAQ } from '../../../../store/interfaces/tables.interfaces';

interface FAQsTableProps {
  faqs: ITableFAQ[];
}

class FAQsTable extends React.Component<FAQsTableProps> {
  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: () => {} },
        { name: 'Delete', function: () => {} },
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

export default FAQsTable;
