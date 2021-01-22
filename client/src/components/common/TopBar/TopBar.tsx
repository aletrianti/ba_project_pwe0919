import React from 'react';
import './TopBar.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Profile from './Profile/Profile';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// localStorage
import { getUserInfoFromLocalStorage } from '../../../utils/localStorageActions';

interface TopBarProps {
  sectionName: string;
}

interface TopBarState {
  isOpen: boolean;
}

class TopBar extends React.Component<RouteComponentProps & TopBarProps, TopBarState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleProfile = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { sectionName } = this.props;
    const { isOpen } = this.state;
    const {
      firstName,
      lastName,
      jobTitle,
      department,
      birthday,
      memberSince,
      description,
      isAvailable,
    } = getUserInfoFromLocalStorage;

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
            {firstName} {lastName}
          </button>
          {isOpen ? (
            <Profile
              firstName={firstName}
              lastName={lastName}
              jobTitle={jobTitle}
              department={department}
              birthday={birthday}
              memberSince={memberSince}
              description={description}
              isAvailable={isAvailable}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(TopBar);
