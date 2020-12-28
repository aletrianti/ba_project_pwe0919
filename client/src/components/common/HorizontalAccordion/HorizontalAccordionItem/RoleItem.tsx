import React from 'react';

import { IRole } from '../../../../store/interfaces/roles.interfaces';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Axios from 'axios';

interface RoleItemProps {
  content: IRole;
  isOpen: boolean;
  toggle: any;
}

class RoleItem extends React.Component<RoleItemProps> {
  render() {
    const { content, isOpen, toggle } = this.props;
    const { title, description, responsibilities } = content;

    const createRole = () => {
      const token = localStorage['user_token'];
      const role = 'CTO';

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const bodyParameters = {
        title: role,
      };

      Axios.post('http://localhost:4000/api/role/', bodyParameters, config).then(console.log).catch(console.log);
    };

    return (
      <>
        <div className={!isOpen ? 'accordion__item' : 'accordion__item item--open'} onClick={toggle}>
          <h3>{title}</h3>
          {!isOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </div>
        <div className={!isOpen ? 'accordion__item__info' : 'accordion__item__info item__info--open'}>
          <div className="info__description">
            <h4>Description</h4>
            <p>{description}</p>
          </div>
          <div className="info__responsibilities">
            <h4 onClick={createRole}>Responsibilities</h4>
            <ul>
              {responsibilities.map((responsibility, i) => {
                return <li key={i}>{responsibility.text}</li>;
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default RoleItem;
