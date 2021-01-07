import React from 'react';
import { Link } from 'react-router-dom';
import './SectionBar.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface SectionBarProps {
  sections: {
    name: string;
    pathname: string;
  }[];
  activeSection: string;
  isAdminPanel?: boolean;
}

class SectionBar extends React.Component<RouteComponentProps & SectionBarProps> {
  render() {
    const { sections, activeSection, isAdminPanel } = this.props;

    return (
      <div id="section-bar">
        {sections.map((section, i) => (
          <div
            className={activeSection === section.pathname ? 'section-bar__link section-bar__link--active' : 'section-bar__link'}
            key={i}
          >
            {(!isAdminPanel && section.name === 'Tasks') || section.name === 'Buddy' ? (
              <span className="section__link">{section.name}</span>
            ) : (
              <Link to={section.pathname} className="section__link">
                {section.name}
              </Link>
            )}
          </div>
        ))}
        <div id="section-bar__main-bar"></div>
      </div>
    );
  }
}

export default withRouter(SectionBar);
