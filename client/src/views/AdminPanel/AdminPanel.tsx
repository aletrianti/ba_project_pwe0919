import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';

import Users from '../../components/AdminPanel/Users/Users';
import Tasks from '../../components/AdminPanel/Tasks/Tasks';
import Achievements from '../../components/AdminPanel/Achievements/Achievements';
import Documents from '../../components/AdminPanel/Documents/Documents';
import CategoriesAndDepartments from '../../components/AdminPanel/CategoriesAndDepartments/CategoriesAndDepartments';
import FAQs from '../../components/AdminPanel/FAQs/FAQs';

class AdminPanel extends React.Component {
  sections = [
    { name: 'Users', pathname: 'users' },
    { name: 'Tasks', pathname: 'tasks' },
    { name: 'Achievements', pathname: 'achievements' },
    { name: 'Documents', pathname: 'documents' },
    { name: 'Categories & Departments', pathname: 'categories-and-departments' },
    { name: 'FAQs', pathname: 'faqs' },
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
            <SectionBar sections={this.sections} activeSection={sectionName} isAdminPanel={true} />

            {sectionName === 'users' ? <Users /> : null}
            {sectionName === 'tasks' ? <Tasks /> : null}
            {sectionName === 'achievements' ? <Achievements /> : null}
            {sectionName === 'documents' ? <Documents /> : null}
            {sectionName === 'categories-and-departments' ? <CategoriesAndDepartments /> : null}
            {sectionName === 'faqs' ? <FAQs /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
