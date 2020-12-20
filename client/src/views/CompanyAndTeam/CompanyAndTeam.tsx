import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';

class CompanyAndTeam extends React.Component {
    render() {
        return (
            <div className="app__container">
                <Menu activeSection={'company-and-team'}/>
                
                <div className="app__container__topbar-and-content">
                    <TopBar sectionName={'Company & Team'}/>

                    <div className="app__content">

                    </div>
                </div>
            </div>
        );
    }
};

export default CompanyAndTeam;