import React from 'react';
import { ITableRolesAndResponsibilities } from '../../../store/interfaces/tables.interfaces';

import AddButton from '../../common/AddButton/AddButton';
import RolesAndResponsibilitiesTable from './RolesAndResponsibilitiesTable/RolesAndResponsibilitiesTable';

class RolesAndResponsibilities extends React.Component {
  openModal = () => {};

  rolesAndResponsibilities: ITableRolesAndResponsibilities[] = [
    {
      id: 1,
      role: 'Software engineer',
      description: `A Software Developer serves as a member of the software development team. They aid in the innovation and creation of company software and programs. Generally found in tech-heavy industries and large corporations, a Software Developer will work alongside a team of programmers to code programs that meet the need of the company or client.`,
      responsibilities: ['Design and develop software, test-automation suites, and infrastructure.', 'Review other peers’ code.'],
    },
  ];

  render() {
    return (
      <div id="admin-panel__roles">
        <AddButton name={'Add role'} function={this.openModal} />

        <div id="admin-panel__roles__content" className="admin-panel__content">
          <RolesAndResponsibilitiesTable rolesAndResponsibilities={this.rolesAndResponsibilities} />
        </div>
      </div>
    );
  }
}

export default RolesAndResponsibilities;
