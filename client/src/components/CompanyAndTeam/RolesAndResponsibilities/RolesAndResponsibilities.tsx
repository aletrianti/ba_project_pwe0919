import React from 'react';

import { IRole } from '../../../store/interfaces/roles.interfaces';

import HorizontalAccordion from '../../common/HorizontalAccordion/HorizontalAccordion';

interface RolesAndResponsibilitiesProps {
  sectionName: string;
}

class RolesAndResponsibilities extends React.Component<RolesAndResponsibilitiesProps> {
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
    return <HorizontalAccordion roles={this.roles} section={this.props.sectionName} />;
  }
}

export default RolesAndResponsibilities;
