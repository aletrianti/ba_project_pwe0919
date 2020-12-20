import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';

class AdminPanel extends React.Component {
    render() {
        return (
            <div className="app__container">
                <Menu activeSection={'Admin panel'}/>
                
                <div className="app__container__topbar-and-content">
                    <TopBar sectionName={'Admin Panel'}/>

                    <div className="app__content">

                    </div>
                </div>
            </div>
        );
    }
};

export default AdminPanel;