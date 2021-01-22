import React from 'react';
import './TopBar.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Profile from './Profile/Profile';

import { IProfile } from '../../../store/interfaces/members.interfaces';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// localStorage
import { getUserInfoFromLocalStorage } from '../../../utils/localStorageActions';

interface TopBarProps {
  sectionName: string;
}

interface TopBarState {
  isOpen: boolean;
  currentUser: IProfile;
}

class TopBar extends React.Component<RouteComponentProps & TopBarProps, TopBarState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      currentUser: getUserInfoFromLocalStorage,
    };
  }

  toggleProfile = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { sectionName } = this.props;
    const { isOpen, currentUser } = this.state;

    return (
      <div id="topbar">
        <div id="topbar__first-half">
          <h1>{sectionName}</h1>
          <input type="text" alt="search" placeholder="Search" />
        </div>
        <div id="topbar__second-half">
          <div id="topbar__img">
            <AccountCircleIcon id="topbar__img__no-picture" fontSize={'large'} />
          </div>
          <button id="topbar__name" onClick={() => this.toggleProfile()}>
            {currentUser.firstName} {currentUser.lastName}
          </button>
          {isOpen ? (
            <Profile
              firstName={currentUser.firstName}
              lastName={currentUser.lastName}
              jobTitle={currentUser.jobTitle}
              department={currentUser.department}
              birthday={currentUser.birthday}
              memberSince={currentUser.memberSince}
              description={currentUser.description}
              isAvailable={currentUser.isAvailable}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(TopBar);
