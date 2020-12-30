import React, { MouseEvent } from 'react';
import './Users.scss';

import AddButton from '../../common/AddButton/AddButton';
import { isCurrentUserAnAdmin } from '../../../utils/localStorageActions';

class Users extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const openAddUserModal = () => {};

    return (
      <div className="admin-panel__users">
        {isCurrentUserAnAdmin() ? <AddButton name={'Add user'} function={openAddUserModal} /> : null}
      </div>
    );
  }
}

export default Users;
