import React from 'react';

import AddButton from '../../common/AddButton/AddButton';
import UsersTable from './UsersTable/UsersTable';

class Users extends React.Component {
  openModal = () => {};

  render() {
    return (
      <div id="admin-panel__users">
        <AddButton name={'Add user'} function={this.openModal} />

        <div id="admin-panel__users__content" className="admin-panel__content">
          <UsersTable />
        </div>
      </div>
    );
  }
}

export default Users;
