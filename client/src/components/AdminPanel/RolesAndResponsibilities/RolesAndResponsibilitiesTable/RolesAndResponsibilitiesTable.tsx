import React from 'react';

import Table from '../../../common/Table/Table';
import Actions from '../../../common/Actions/Actions';

class RolesAndResponsibilitiesTable extends React.Component {
  data = [
    {
      role: 'Software engineer',
      description: `A Software Developer serves as a member of the software development team. They aid in the innovation and creation of company software and programs. Generally found in tech-heavy industries and large corporations, a Software Developer will work alongside a team of programmers to code programs that meet the need of the company or client.`,
      responsibilities: ['Design and develop software, test-automation suites, and infrastructure.', 'Review other peers’ code.'],
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
    { title: 'Role', columnData: (data: any) => data.role },
    { title: 'Description', columnData: (data: any) => data.description },
    { title: 'Responsibilities', columnData: (data: any) => data.responsibilities },
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

export default RolesAndResponsibilitiesTable;
