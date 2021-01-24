import React from 'react';
import { connect } from 'react-redux';

import { ToggleAddRoleModalAction } from '../../../store/actions/forms/forms.actions';
import { IAddRoleModal } from '../../../store/interfaces/forms/roles.interfaces';
import { IRolesAndResponsibilities } from '../../../store/interfaces/tables.interfaces';
import { getRolesResponsibilities } from '../../../utils/httpRequests';

import AddButton from '../../common/AddButton/AddButton';
import DeleteRolesAndResponsibilitiesForm from './RolesAndResponsibilitiesForms/DeleteRolesAndResponsibilitiesForm';
import RolesAndResponsibilitiesForms from './RolesAndResponsibilitiesForms/RolesAndResponsibilitiesForms';
import RolesAndResponsibilitiesTable from './RolesAndResponsibilitiesTable/RolesAndResponsibilitiesTable';

interface RolesProps {
  toggleAddRoleModal: (addRoleModal: IAddRoleModal) => any;
}

interface RolesAndResponsibilitiesState {
  rolesAndResponsibilities: IRolesAndResponsibilities[];
}
class RolesAndResponsibilities extends React.Component<RolesProps, RolesAndResponsibilitiesState> {
  constructor(props: any) {
    super(props);

    this.state = {
      rolesAndResponsibilities: [],
    };
  }

  openModal = (e: MouseEvent) => {
    e.preventDefault();

    this.props.toggleAddRoleModal({ isOpen: true });
  };

  getRoles = async () => {
    const roles = await getRolesResponsibilities();

    this.setState({ rolesAndResponsibilities: roles });
  };

  async componentDidMount() {
    await this.getRoles();
  }

  render() {
    return (
      <div id="admin-panel__roles">
        <AddButton name={'Add role'} function={this.openModal} />

        <div id="admin-panel__roles__content" className="admin-panel__content">
          <RolesAndResponsibilitiesTable rolesAndResponsibilities={this.state.rolesAndResponsibilities} />
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
