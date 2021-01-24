import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Tasks from '../../components/Dashboard/Tasks/Tasks';
import Member from '../../components/common/Member/Member';

import { IMember, IProfile } from '../../store/interfaces/members.interfaces';

import { connect } from 'react-redux';
import { IEditProfileModal } from '../../store/interfaces/forms/profile.interfaces';

import ProfileForm from '../../components/common/TopBar/Profile/ProfileForm/ProfileForm';
import { getBuddyCurrentUser, storeAssignedTasks, storeTasks } from '../../utils/httpRequests';
import { reloadPageAfterSignIn } from '../../utils/localStorageActions';

interface DashboardState {
  currentUser: IProfile;
  buddy: any;
}

interface DashboardProps {
  editProfileModal: IEditProfileModal;
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: JSON.parse(localStorage['current_user']),
      buddy: {},
    };
  }

  async componentDidMount() {
    reloadPageAfterSignIn();

    const buddy = await getBuddyCurrentUser();
    this.setState({ buddy: buddy });

    storeAssignedTasks();
    storeTasks();
  }

  firstComponentSections = [{ name: 'Tasks', pathname: 'tasks' }];
  secondComponentSections = [{ name: 'Buddy', pathname: 'buddy' }];

  render() {
    return (
      <div className="app__container">
        <Menu activeSection={'dashboard'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'Dashboard'} />

          <div className="app__content">
            <h2 id="dashboard__greeting">Hi, {this.state.currentUser.firstName}!</h2>

            {localStorage['hasJustSignedIn'] ? (
              <span>Loading...</span>
            ) : (
              <div id="dashboard__content">
                <div id="dashboard__first-half">
                  <SectionBar sections={this.firstComponentSections} activeSection={'tasks'} />

                  <Tasks />
                </div>

                <div id="dashboard__second-half">
                  <SectionBar sections={this.secondComponentSections} activeSection={'buddy'} />

                  {this.state?.buddy?.buddy?.ID ? (
                    <Member
                      fullName={`${this.state.buddy.buddy.firstName} ${this.state.buddy.buddy.lastName}`}
                      jobTitle={this.state.buddy?.role?.title}
                      department={this.state.buddy?.department?.name}
                      birthday={this.state.buddy.birthday}
                      memberSince={this.state.buddy.buddy.atCompanySince}
                      description={this.state.buddy.buddy.description}
                    />
                  ) : (
                    <div id="no-buddy__div">No buddy for now!</div>
                  )}
                </div>
              </div>
            )}
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
