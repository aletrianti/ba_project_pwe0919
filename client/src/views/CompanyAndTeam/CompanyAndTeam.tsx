import React, { lazy, Suspense } from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import axios from 'axios';
import { getTokenFromLocalStorage } from '../../utils/localStorageActions';
import { connect } from 'react-redux';
import { IEditProfileModal } from '../../store/interfaces/forms/profile.interfaces';
import ProfileForm from '../../components/common/TopBar/Profile/ProfileForm/ProfileForm';

interface CompanyState {
  departments: any[];
}

interface CompanyAndTeamProps {
  editProfileModal: IEditProfileModal;
}

class CompanyAndTeam extends React.Component<CompanyAndTeamProps, CompanyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      departments: [],
    };
  }
  sections = [
    { name: 'Team', pathname: 'team' },
    { name: 'Roles & Responsibilities', pathname: 'roles-and-responsibilities' },
    { name: 'Achievements', pathname: 'achievements' },
  ];

  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  getDepartments = async () => {
    return await axios.get('/api/department/company-view', this.config).then(res => {
      return res.data;
    });
  };

  async componentDidMount() {
    const departments: any[] = await this.getDepartments();
    departments.unshift({ id: 0, title: 'All' });
    this.setState({ departments: departments });
  }

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

            <Categories categories={this.state.departments} />

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

        <ProfileForm isModalOpen={this.props.editProfileModal.isOpen} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    editProfileModal: state.editProfileModal,
  };
};

export default connect(mapStateToProps)(CompanyAndTeam);
