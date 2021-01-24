import React from 'react';

import { IRole, IRolesAndResponsibilitiesCompany } from '../../../store/interfaces/roles.interfaces';
import { getRolesResponsibilitiesCompany } from '../../../utils/httpRequests';

import HorizontalAccordion from '../../common/HorizontalAccordion/HorizontalAccordion';

interface RolesAndResponsibilitiesProps {
  sectionName: string;
}

interface RolesAndResponsibilitiesState {
  rolesAndResponsibilities: IRolesAndResponsibilitiesCompany[];
}

class RolesAndResponsibilities extends React.Component<RolesAndResponsibilitiesProps, RolesAndResponsibilitiesState> {
  constructor(props: any) {
    super(props);

    this.state = {
      rolesAndResponsibilities: [],
    };
  }

  getRoles = async () => {
    const roles = await getRolesResponsibilitiesCompany();

    this.setState({ rolesAndResponsibilities: roles });
  };
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
  async componentDidMount() {
    await this.getRoles();
  }
  render() {
    return <HorizontalAccordion roles={this.state.rolesAndResponsibilities} section={this.props.sectionName} />;
  }
}

export default RolesAndResponsibilities;
