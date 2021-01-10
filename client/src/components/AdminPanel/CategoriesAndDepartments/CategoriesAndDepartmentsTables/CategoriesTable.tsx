import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

class CategoriesTable extends React.Component {
  data = [
    {
      category: 'General',
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
    { title: 'Category', columnData: (data: any) => data.category },
    { title: '', columnData: (data: any) => data.actions },
  ];

  render() {
    return (
      <div id="categories__table">
        <Table data={this.data} columns={this.columns} />
      </div>
    );
  }
}

export default CategoriesTable;
