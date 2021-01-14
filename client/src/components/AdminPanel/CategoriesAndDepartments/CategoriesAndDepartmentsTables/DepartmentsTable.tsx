import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableDepartment } from '../../../../store/interfaces/tables.interfaces';

interface DepartmentsTableProps {
  departments: ITableDepartment[];
}

class DepartmentsTable extends React.Component<DepartmentsTableProps> {
  actions = (
    <Actions
      actions={[
        { name: 'Edit', function: () => {} },
        { name: 'Delete', function: () => {} },
      ]}
    />
  );

  columns = [
    { title: 'Department', columnData: (data: any) => data.title },
    { title: '', columnData: () => this.actions },
  ];

  render() {
    return (
      <div id="departments__table">
        <Table data={this.props.departments} columns={this.columns} />
      </div>
    );
  }
}

export default DepartmentsTable;
