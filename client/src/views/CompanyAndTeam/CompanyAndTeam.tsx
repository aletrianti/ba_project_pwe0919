import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import HorizontalAccordion from '../../components/common/HorizontalAccordion/HorizontalAccordion';

class CompanyAndTeam extends React.Component {
  render() {
    const pathname = window.location.pathname.split('/');
    const sectionName = pathname[2];

    const sections = [
      { name: 'Team', pathname: 'team' },
      { name: 'Roles & Responsibilities', pathname: 'roles-and-responsibilities' },
      { name: 'Achievements', pathname: 'achievements' },
    ];

    // TODO: Replace this with categories from the DB
    const categories = [{ name: 'All' }, { name: 'Engineering' }, { name: 'Design' }];

    // TODO: Replace this with roles & responsibilities from the DB
    const roles = [
      {
        title: 'Software engineer',
        description:
          'A Software Developer serves as a member of the software development team. They aid in the innovation and creation of company software and programs.',
        responsibilities: [
          { text: 'Design and develop software, test-automation suites, and infrastructure.' },
          { text: 'Review other peers’ code.' },
        ],
      },
      {
        title: 'Software engineer',
        description:
          'A Software Developer serves as a member of the software development team. They aid in the innovation and creation of company software and programs.',
        responsibilities: [
          { text: 'Design and develop software, test-automation suites, and infrastructure.' },
          { text: 'Review other peers’ code.' },
        ],
      },
    ];

    return (
      <div className="app__container">
        <Menu activeSection={'company-and-team'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'Company & Team'} />

          <div className="app__content">
            <SectionBar sections={sections} activeSection={sectionName} />

            <Categories categories={categories} />

            {sectionName === 'roles-and-responsibilities' ? <HorizontalAccordion roles={roles} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyAndTeam;
