import React, { MouseEvent } from 'react';
import './Achievements.scss';

import AddButton from '../../common/AddButton/AddButton';
import { isCurrentUserAnAdmin } from '../../../utils/localStorageActions';

class Achievements extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const openAddUserModal = () => {};

    return (
      <div className="admin-panel__achievements">
        {isCurrentUserAnAdmin() ? <AddButton name={'Add achievement'} function={openAddUserModal} /> : null}
      </div>
    );
  }
}

export default Achievements;
