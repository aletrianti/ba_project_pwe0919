import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';

// Dynamic component
import DynamicComponent from '../../components/common/DynamicComponent';

class AdminPanel extends React.Component {
  sections = [
    { name: 'Users', pathname: 'users' },
    { name: 'Tasks', pathname: 'tasks' },
    { name: 'Achievements', pathname: 'achievements' },
    { name: 'Documents', pathname: 'documents' },
    { name: 'Categories & Departments', pathname: 'categories-and-departments' },
    { name: 'FAQs', pathname: 'faqs' },
  ];

  // Dynamic components (performance)
  Users = DynamicComponent(() => import('../../components/AdminPanel/Users/Users'));
  Tasks = DynamicComponent(() => import('../../components/AdminPanel/Tasks/Tasks'));
  Achievements = DynamicComponent(() => import('../../components/AdminPanel/Achievements/Achievements'));
  Documents = DynamicComponent(() => import('../../components/AdminPanel/Documents/Documents'));
  CategoriesAndDepartments = DynamicComponent(
    () => import('../../components/AdminPanel/CategoriesAndDepartments/CategoriesAndDepartments')
  );
  FAQs = DynamicComponent(() => import('../../components/AdminPanel/FAQs/FAQs'));

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

            {sectionName === 'users' ? <this.Users /> : null}
            {sectionName === 'tasks' ? <this.Tasks /> : null}
            {sectionName === 'achievements' ? <this.Achievements /> : null}
            {sectionName === 'documents' ? <this.Documents /> : null}
            {sectionName === 'categories-and-departments' ? <this.CategoriesAndDepartments /> : null}
            {sectionName === 'faqs' ? <this.FAQs /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
