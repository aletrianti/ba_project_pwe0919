import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import Team from '../../components/CompanyAndTeam/Team/Team';
import RolesAndResponsibilities from '../../components/CompanyAndTeam/RolesAndResponsibilities/RolesAndResponsibilities';
import Achievements from '../../components/CompanyAndTeam/Achievements/Achievements';

class CompanyAndTeam extends React.Component {
  sections = [
    { name: 'Team', pathname: 'team' },
    { name: 'Roles & Responsibilities', pathname: 'roles-and-responsibilities' },
    { name: 'Achievements', pathname: 'achievements' },
  ];

  // TODO: Replace this with categories from the DB
  categories = [{ name: 'All' }, { name: 'Engineering' }, { name: 'Design' }];

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

            {sectionName === 'team' ? (
              <Team />
            ) : (
              [
                sectionName === 'roles-and-responsibilities' ? (
                  <RolesAndResponsibilities sectionName={sectionName} key={sectionName} />
                ) : (
                  <Achievements key={sectionName} />
                ),
              ]
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyAndTeam;
