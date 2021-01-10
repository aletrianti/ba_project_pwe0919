import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

class FAQsTable extends React.Component {
  data = [
    {
      question: 'Who can I ask for help?',
      answer: `In the dashboard, you can see a name under the section “Buddy”: this is the name of the person you had been assigned to. Your “buddy” will give you all the help you need to start at NewCompany.`,
      actions: (
        <Actions
          actions={[
            { name: 'Edit', function: () => {} },
            { name: 'Delete', function: () => {} },
          ]}
        />
      ),
    },
  ];

  columns = [
    { title: 'Role', columnData: (data: any) => data.question },
    { title: 'Description', columnData: (data: any) => data.answer },
    { title: '', columnData: (data: any) => data.actions },
  ];

  render() {
    return (
      <div id="roles__table">
        <Table data={this.data} columns={this.columns} />
      </div>
    );
  }
}

export default FAQsTable;
