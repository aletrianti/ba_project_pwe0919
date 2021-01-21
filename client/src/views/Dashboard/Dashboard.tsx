import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Tasks from '../../components/Dashboard/Tasks/Tasks';
import Member from '../../components/common/Member/Member';

import { IMember, IProfile } from '../../store/interfaces/members.interfaces';

// localStorage
import { getUserInfoFromLocalStorage } from '../../utils/localStorageActions';
import { connect } from 'react-redux';
import { IEditProfileModal } from '../../store/interfaces/forms/profile.interfaces';

import ProfileForm from '../../components/common/TopBar/Profile/ProfileForm/ProfileForm';
import { storeTasks } from '../../utils/httpRequests';

interface DashboardState {
  currentUser: IProfile;
}

interface DashboardProps {
  editProfileModal: IEditProfileModal;
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: getUserInfoFromLocalStorage(),
    };
  }

  componentDidMount() {
    storeTasks();
  }

  firstComponentSections = [{ name: 'Tasks', pathname: 'tasks' }];
  secondComponentSections = [{ name: 'Buddy', pathname: 'buddy' }];

  // TODO: Dynamic content/data for users/members
  buddy: IMember = {
    fullName: 'Mathias Nielsen',
    jobTitle: 'Software Developer',
    department: 'Engineering',
    birthday: '19-03',
    memberSince: '18-02-19',
    description: 'I love making music and programming.',
  };

  render() {
    return (
      <div className="app__container">
        <Menu activeSection={'dashboard'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'Dashboard'} />

          <div className="app__content">
            <h2 id="dashboard__greeting">Hi, {this.state.currentUser.firstName}!</h2>

            <div id="dashboard__content">
              <div id="dashboard__first-half">
                <SectionBar sections={this.firstComponentSections} activeSection={'tasks'} />

                <Tasks />
              </div>

              <div id="dashboard__second-half">
                <SectionBar sections={this.secondComponentSections} activeSection={'buddy'} />

                <Member
                  fullName={this.buddy.fullName}
                  jobTitle={this.buddy.jobTitle}
                  department={this.buddy.department}
                  birthday={this.buddy.birthday}
                  memberSince={this.buddy.memberSince}
                  description={this.buddy.description}
                />
              </div>
            </div>
          </div>
        </div>

        <ProfileForm isModalOpen={this.props.editProfileModal.isOpen} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    editProfileModal: state.editProfileModal,
  };
};

export default connect(mapStateToProps)(Dashboard);
