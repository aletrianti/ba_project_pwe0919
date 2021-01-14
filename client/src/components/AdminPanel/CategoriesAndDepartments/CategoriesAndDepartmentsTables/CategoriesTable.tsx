import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableCategory } from '../../../../store/interfaces/tables.interfaces';

interface CategoriesTableProps {
  categories: ITableCategory[];
}

class CategoriesTable extends React.Component<CategoriesTableProps> {
  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: () => {} },
        { name: 'Delete', function: () => {} },
      ]}
    />
  );

  columns = [
    { title: 'Category', columnData: (data: any) => data.title },
    { title: '', columnData: (data: any) => this.actions(data.id) },
  ];

  render() {
    return (
      <div id="categories__table">
        <Table data={this.props.categories} columns={this.columns} />
      </div>
    );
  }
}

export default CategoriesTable;
