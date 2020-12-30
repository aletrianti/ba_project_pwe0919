import React from 'react';
import './DocumentsTable.scss';

import Table from '../../common/Table/Table';
import Actions from '../../common/Actions/Actions';

class DocumentsTable extends React.Component {
  render() {
    const data = [
      {
        filename: 'PDF',
        created: '10-03-19',
        actions: (
          <Actions
            actions={[
              { name: 'Edit', function: () => {} },
              { name: 'Delete', function: () => {} },
            ]}
          />
        ),
      },
      {
        filename: 'PNG',
        created: '09-06-20',
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

    const columns = [
      { title: 'Filename', columnData: (data: any) => data.filename },
      { title: 'Created', columnData: (data: any) => data.created },
      { title: '', columnData: (data: any) => data.actions },
    ];

    return (
      <div id="documents__table">
        <Table data={data} columns={columns} />
      </div>
    );
  }
}

export default DocumentsTable;
