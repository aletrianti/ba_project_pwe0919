import axios from 'axios';
import React from 'react';

import { IMemberCompany } from '../../../store/interfaces/members.interfaces';
import { getCompanyEmployees } from '../../../utils/httpRequests';

import Member from '../../common/Member/Member';
interface companyState {
  employees: IMemberCompany[];
}
class Team extends React.Component<{}, companyState> {
  // TODO: Dynamic content/data for users/members
  constructor(props: any) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  getEmployees = async () => {
    return await getCompanyEmployees();
  };

  async componentDidMount() {
    const employees = await this.getEmployees();

    this.setState({ employees: employees });
  }

  render() {
    return (
      <div className="team__members__container">
        <div className="team__members">
          {this.state.employees
            ? this.state.employees.map((member, i) => (
                <Member
                  fullName={member.firstName}
                  jobTitle={member.jobTitle}
                  department={member.department}
                  birthday={member.birthday}
                  memberSince={member.memberSince}
                  description={member.description}
                  key={i}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Team;
