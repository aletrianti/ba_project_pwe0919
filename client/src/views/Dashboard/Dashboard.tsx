import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Tasks from '../../components/Dashboard/Tasks/Tasks';
import Member from '../../components/common/Member/Member';

import { IMember } from '../../store/interfaces/members.interfaces';

class Dashboard extends React.Component {
  render() {
    const firstComponentSections = [{ name: 'Tasks', pathname: 'tasks' }];
    const secondComponentSections = [{ name: 'Buddy', pathname: 'buddy' }];

    // TODO: Dynamic content/data for users/members
    const buddy: IMember = {
      fullName: 'Mathias Nielsen',
      jobTitle: 'Software Developer',
      department: 'Engineering',
      birthday: '19-03',
      memberSince: '18-02-19',
      description: 'I love making music and programming.',
    };

    return (
      <div className="app__container">
        <Menu activeSection={'dashboard'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'Dashboard'} />

          <div className="app__content">
            <h2 id="dashboard__greeting">Hi, Name!</h2>

            <div id="dashboard__content">
              <div id="dashboard__first-half">
                <SectionBar sections={firstComponentSections} activeSection={'tasks'} />

                <Tasks />
              </div>

              <div id="dashboard__second-half">
                <SectionBar sections={secondComponentSections} activeSection={'buddy'} />

                <Member
                  fullName={buddy.fullName}
                  jobTitle={buddy.jobTitle}
                  department={buddy.department}
                  birthday={buddy.birthday}
                  memberSince={buddy.memberSince}
                  description={buddy.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
