import React, { lazy, Suspense } from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';

class CompanyAndTeam extends React.Component {
  sections = [
    { name: 'Team', pathname: 'team' },
    { name: 'Roles & Responsibilities', pathname: 'roles-and-responsibilities' },
    { name: 'Achievements', pathname: 'achievements' },
  ];

  // TODO: Replace this with categories from the DB
  categories = [{ name: 'All' }, { name: 'Engineering' }, { name: 'Design' }];

  // Dynamic components (performance)
  Team = lazy(() => import('../../components/CompanyAndTeam/Team/Team'));
  RolesAndResponsibilities = lazy(
    () => import('../../components/CompanyAndTeam/RolesAndResponsibilities/RolesAndResponsibilities')
  );
  Achievements = lazy(() => import('../../components/CompanyAndTeam/Achievements/Achievements'));

  render() {
    const pathname = window.location.pathname.split('/');
    const sectionName = pathname[2];

    return (
      <div className="app__container">
        <Menu activeSection={'company-and-team'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'Company & Team'} />

          <div className="app__content">
            <SectionBar sections={this.sections} activeSection={sectionName} />

            <Categories categories={this.categories} />

            <Suspense fallback={<span className="loading">Loading...</span>}>
              {sectionName === 'team' ? (
                <this.Team />
              ) : (
                [
                  sectionName === 'roles-and-responsibilities' ? (
                    <this.RolesAndResponsibilities sectionName={sectionName} key={sectionName} />
                  ) : (
                    <this.Achievements key={sectionName} />
                  ),
                ]
              )}
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyAndTeam;
