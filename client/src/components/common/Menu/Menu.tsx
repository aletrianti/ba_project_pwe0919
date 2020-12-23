import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// icons
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import HelpIcon from '@material-ui/icons/Help';
import BuildIcon from '@material-ui/icons/Build';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

interface MenuProps {
  activeSection: string;
}

class Menu extends React.Component<RouteComponentProps & MenuProps> {
  render() {
    const { activeSection } = this.props;

    return (
      <div id="menu">
        <div id="menu__links">
          <Link to={'/dashboard'} className={activeSection === 'dashboard' ? 'menu__link menu__link--active' : 'menu__link'}>
            <HomeIcon fontSize={'large'} />
            <span className="menu__link__text">Dashboard</span>
          </Link>
          <Link
            to={'/company-and-team/team'}
            className={activeSection === 'company-and-team' ? 'menu__link menu__link--active' : 'menu__link'}
          >
            <PeopleIcon fontSize={'large'} />
            <span className="menu__link__text">Company & Team</span>
          </Link>
          <Link to={'/documents'} className={activeSection === 'documents' ? 'menu__link menu__link--active' : 'menu__link'}>
            <DescriptionIcon fontSize={'large'} />
            <span className="menu__link__text">Documents</span>
          </Link>
          <Link to={'/faqs'} className={activeSection === 'faqs' ? 'menu__link menu__link--active' : 'menu__link'}>
            <HelpIcon fontSize={'large'} />
            <span className="menu__link__text">FAQs</span>
          </Link>
          <Link
            to={'/admin-panel/users'}
            className={activeSection === 'admin-panel' ? 'menu__link menu__link--active' : 'menu__link'}
          >
            <BuildIcon fontSize={'large'} />
            <span className="menu__link__text">Admin panel</span>
          </Link>
        </div>

        <button id="sign-out__btn">
          <ExitToAppIcon fontSize={'large'} />
          <span className="sign-out__text">Sign out</span>
        </button>
      </div>
    );
  }
}

export default withRouter(Menu);
