import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';

import User from '../../components/AdminPanel/Users/Users';
import Achievements from '../../components/AdminPanel/Achievements/Achievements';

class AdminPanel extends React.Component {
  sections = [
    { name: 'Users', pathname: 'users' },
    { name: 'Progress', pathname: 'progress' },
    { name: 'Achievements', pathname: 'achievements' },
    { name: 'Documents', pathname: 'documents' },
  ];

  render() {
    const pathname = window.location.pathname.split('/');
    const sectionName = pathname[2];

    return (
      <div className="app__container">
        <Menu activeSection={'admin-panel'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'Admin Panel'} />

          <div className="app__content">
            <SectionBar sections={this.sections} activeSection={sectionName} />

            {sectionName === 'users' ? <User /> : null}
            {sectionName === 'achievements' ? <Achievements /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
