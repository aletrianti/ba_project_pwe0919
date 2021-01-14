import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

import { ITableRolesAndResponsibilities } from '../../../../store/interfaces/tables.interfaces';

interface RolesAndResponsibilitiesTableProps {
  rolesAndResponsibilities: ITableRolesAndResponsibilities[];
}

class RolesAndResponsibilitiesTable extends React.Component<RolesAndResponsibilitiesTableProps> {
  actions = (id: number) => (
    <Actions
      actions={[
        { name: 'Edit', function: () => {} },
        { name: 'Delete', function: () => {} },
      ]}
    />
  );

  columns = [
    { title: 'Role', columnData: (data: any) => data.role },
    { title: 'Description', columnData: (data: any) => data.description },
    { title: 'Responsibilities', columnData: (data: any) => data.responsibilities },
    { title: '', columnData: (data: any) => this.actions(data.id) },
  ];

  render() {
    return (
      <div id="roles__table">
        <Table data={this.props.rolesAndResponsibilities} columns={this.columns} />
      </div>
    );
  }
}

export default RolesAndResponsibilitiesTable;
