import React from 'react';
import './TopBar.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Profile from './Profile/Profile';

import { IProfile } from '../../../store/interfaces/members.interfaces';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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

  render() {
    const { sectionName } = this.props;

    const currentUser: IProfile = {
      fullName: 'Mathias Nielsen',
      jobTitle: 'Software Developer',
      department: 'Engineering',
      birthday: '19-03',
      memberSince: '18-02-19',
      description: 'I love making music and programming.',
    };

    const toggleProfile = (): void => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log(this.state.isOpen);
    };

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
          <button id="topbar__name" onClick={() => toggleProfile()}>
            Name Surname
          </button>
          {this.state.isOpen ? (
            <Profile
              fullName={currentUser.fullName}
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
