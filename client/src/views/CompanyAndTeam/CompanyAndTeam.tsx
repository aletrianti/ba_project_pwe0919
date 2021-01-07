import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import HorizontalAccordion from '../../components/common/HorizontalAccordion/HorizontalAccordion';
import Member from '../../components/common/Member/Member';

import { IRole } from '../../store/interfaces/roles.interfaces';
import { IMember } from '../../store/interfaces/members.interfaces';

class CompanyAndTeam extends React.Component {
  sections = [
    { name: 'Team', pathname: 'team' },
    { name: 'Roles & Responsibilities', pathname: 'roles-and-responsibilities' },
    { name: 'Achievements', pathname: 'achievements' },
  ];

  // TODO: Replace this with categories from the DB
  categories = [{ name: 'All' }, { name: 'Engineering' }, { name: 'Design' }];

  // TODO: Dynamic content/data for users/members
  members: IMember[] = [
    {
      fullName: 'Mathias Nielsen',
      jobTitle: 'Software Developer',
      department: 'Engineering',
      birthday: '19-03',
      memberSince: '18-02-19',
      description: 'I love making music and programming.',
    },
    {
      fullName: 'Mathias Nielsen',
      jobTitle: 'Software Developer',
      department: 'Engineering',
      birthday: '19-03',
      memberSince: '18-02-19',
      description: 'I love making music and programming.',
    },
  ];

  // TODO: Replace this with roles & responsibilities from the DB
  roles: IRole[] = [
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
              <div className="team__members">
                {this.members.map((member, i) => (
                  <Member
                    fullName={member.fullName}
                    jobTitle={member.jobTitle}
                    department={member.department}
                    birthday={member.birthday}
                    memberSince={member.memberSince}
                    description={member.description}
                    key={i}
                  />
                ))}
              </div>
            ) : null}

            {sectionName === 'roles-and-responsibilities' ? (
              <HorizontalAccordion roles={this.roles} section={sectionName} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyAndTeam;
