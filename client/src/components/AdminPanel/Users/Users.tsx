import React, { MouseEvent } from 'react';
import './Users.scss';

import AddButton from '../../common/AddButton/AddButton';
import UsersTable from './UsersTable/UsersTable';

class Users extends React.Component {
  constructor(props: any) {
    super(props);
  }

  openAddUserModal = () => {};

  render() {
    return (
      <div className="admin-panel__users">
        <AddButton name={'Add user'} function={this.openAddUserModal} />

        <div id="admin-panel__users__content">
          <UsersTable />
        </div>
      </div>
    );
  }
}

export default Users;
