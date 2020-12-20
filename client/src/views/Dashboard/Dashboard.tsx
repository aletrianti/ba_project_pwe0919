import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="app__container">
                <Menu activeSection={'dashboard'}/>
                
                <div className="app__container__topbar-and-content">
                    <TopBar sectionName={'Dashboard'}/>

                    <div className="app__content">

                    </div>
                </div>
            </div>
        );
    }
};

export default Dashboard;