import React, { MouseEvent } from 'react';
import './Users.scss';

import AddButton from '../../common/AddButton/AddButton';

class Users extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const openAddUserModal = () => {};

    return (
      <div className="admin-panel__users">
        <AddButton name={'Add user'} function={openAddUserModal} />
      </div>
    );
  }
}

export default Users;
