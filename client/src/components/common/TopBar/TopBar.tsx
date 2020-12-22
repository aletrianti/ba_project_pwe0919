import React from 'react';
import './TopBar.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

interface TopBarProps {
    sectionName: string
}

class TopBar extends React.Component<RouteComponentProps & TopBarProps> {
    render() {
        const { sectionName } = this.props;

        return (
            <div id="topbar">
                <div id="topbar__first-half">
                    <h1>{ sectionName }</h1>
                    <input type="text" alt="search" placeholder="Search"/>
                </div>
                <div id="topbar__second-half">
                    <div id="topbar__img">
                        <AccountCircleIcon id="topbar__img__no-picture" fontSize={'large'}/>
                    </div>
                    <button id="topbar__name">Name Surname</button>
                </div>
            </div>
        );
    }
}

export default withRouter(TopBar);
