import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';

class Documents extends React.Component {
    render() {
        const pathname = window.location.pathname.split('/');
        const sectionName = pathname[1];

        const sections = [
            { name: 'Documents', pathname: 'documents' }
        ];

        return (
            <div className="app__container">
                <Menu activeSection={'documents'}/>
                
                <div className="app__container__topbar-and-content">
                    <TopBar sectionName={'Documents'}/>

                    <div className="app__content">
                        <SectionBar sections={sections} activeSection={sectionName}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Documents;