import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';

class CompanyAndTeam extends React.Component {
    render() {
        const pathname = window.location.pathname.split('/');
        const sectionName = pathname[2];

        const sections = [
            { name: 'Team', pathname: 'team' }, 
            { name: 'Roles & Responsibilities', pathname: 'roles-and-responsibilities' }, 
            { name: 'Achievements', pathname: 'achievements' }
        ];

        return (
            <div className="app__container">
                <Menu activeSection={'company-and-team'}/>
                
                <div className="app__container__topbar-and-content">
                    <TopBar sectionName={'Company & Team'}/>

                    <div className="app__content">
                        <SectionBar sections={sections} activeSection={sectionName}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default CompanyAndTeam;