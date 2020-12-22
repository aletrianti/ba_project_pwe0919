import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';

class Dashboard extends React.Component {
    render() {
        const firstComponentSections = [
            { name: 'Tasks', pathname: 'tasks' }
        ];

        const secondComponentSections = [
            { name: 'Buddy', pathname: 'buddy' }
        ];

        return (
            <div className="app__container">
                <Menu activeSection={'dashboard'}/>
                
                <div className="app__container__topbar-and-content">
                    <TopBar sectionName={'Dashboard'}/>

                    <div className="app__content">
                        <h2 id="dashboard__greeting">Hi, Name!</h2>

                        <div id="dashboard__content">
                            <div id="dashboard__first-half">
                                <SectionBar sections={firstComponentSections} activeSection={'tasks'}/>
                            </div>

                            <div id="dashboard__second-half">
                                <SectionBar sections={secondComponentSections} activeSection={'buddy'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Dashboard;