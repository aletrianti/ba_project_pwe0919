import React from 'react';

import AddButton from '../../common/AddButton/AddButton';
import RolesAndResponsibilitiesTable from './RolesAndResponsibilitiesTable/RolesAndResponsibilitiesTable';

class RolesAndResponsibilities extends React.Component {
  openModal = () => {};

  render() {
    return (
      <div id="admin-panel__roles">
        <AddButton name={'Add role'} function={this.openModal} />

        <div id="admin-panel__roles__content" className="admin-panel__content">
          <RolesAndResponsibilitiesTable />
        </div>
      </div>
    );
  }
}

export default RolesAndResponsibilities;
