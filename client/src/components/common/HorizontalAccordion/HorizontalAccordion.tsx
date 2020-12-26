import React from 'react';
import './HorizontalAccordion.scss';

import HorizontalAccordionItem from './HorizontalAccordionItem/HorizontalAccordionItem';

import { IRole } from '../../../store/interfaces/roles.interfaces';

interface HorizontalAccordionProps {
  roles: IRole[];
}

class HorizontalAccordion extends React.Component<HorizontalAccordionProps> {
  render() {
    const { roles } = this.props;

    return (
      <div className="accordion__container">
        {roles.map((role, i) => {
          return (
            <HorizontalAccordionItem
              title={role.title}
              description={role.description}
              responsibilities={role.responsibilities}
              itemKey={i}
              key={i}
            />
          );
        })}
      </div>
    );
  }
}

export default HorizontalAccordion;
