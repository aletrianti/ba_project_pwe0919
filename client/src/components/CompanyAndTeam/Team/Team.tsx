import React from 'react';

import { IMember } from '../../../store/interfaces/members.interfaces';

import Member from '../../common/Member/Member';

class Team extends React.Component {
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

  render() {
    return (
      <div className="team__members__container">
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
      </div>
    );
  }
}

export default Team;
