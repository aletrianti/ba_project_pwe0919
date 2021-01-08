import React, { lazy, Suspense } from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';

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
  Users = lazy(() => import('../../components/AdminPanel/Users/Users'));
  Tasks = lazy(() => import('../../components/AdminPanel/Tasks/Tasks'));
  Achievements = lazy(() => import('../../components/AdminPanel/Achievements/Achievements'));
  Documents = lazy(() => import('../../components/AdminPanel/Documents/Documents'));
  CategoriesAndDepartments = lazy(() => import('../../components/AdminPanel/CategoriesAndDepartments/CategoriesAndDepartments'));
  FAQs = lazy(() => import('../../components/AdminPanel/FAQs/FAQs'));

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

            <Suspense fallback={<span className="loading">Loading...</span>}>
              {sectionName === 'users' ? <this.Users /> : null}
              {sectionName === 'tasks' ? <this.Tasks /> : null}
              {sectionName === 'achievements' ? <this.Achievements /> : null}
              {sectionName === 'documents' ? <this.Documents /> : null}
              {sectionName === 'categories-and-departments' ? <this.CategoriesAndDepartments /> : null}
              {sectionName === 'faqs' ? <this.FAQs /> : null}
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
