import React from 'react';
import { connect } from 'react-redux';

import { ToggleAddRoleModalAction } from '../../../store/actions/forms/forms.actions';
import { IAddRoleModal } from '../../../store/interfaces/forms/roles.interfaces';
import { ITableRolesAndResponsibilities } from '../../../store/interfaces/tables.interfaces';

import AddButton from '../../common/AddButton/AddButton';
import DeleteRolesAndResponsibilitiesForm from './RolesAndResponsibilitiesForms/DeleteRolesAndResponsibilitiesForm';
import RolesAndResponsibilitiesForms from './RolesAndResponsibilitiesForms/RolesAndResponsibilitiesForms';
import RolesAndResponsibilitiesTable from './RolesAndResponsibilitiesTable/RolesAndResponsibilitiesTable';

interface RolesProps {
  toggleAddRoleModal: (addRoleModal: IAddRoleModal) => any;
}

class RolesAndResponsibilities extends React.Component<RolesProps> {
  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddRoleModal({ isOpen: true });
  };

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

        <RolesAndResponsibilitiesForms />
        <DeleteRolesAndResponsibilitiesForm />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleAddRoleModal: (addRoleModal: IAddRoleModal) => dispatch(ToggleAddRoleModalAction(addRoleModal)),
  };
};

export default connect(null, mapDispatchToProps)(RolesAndResponsibilities);
