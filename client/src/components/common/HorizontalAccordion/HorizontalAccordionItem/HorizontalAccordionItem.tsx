import React from 'react';
import { IResponsibility } from '../../../../store/interfaces/roles.interfaces';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface HorizontalAccordionItemProps {
  title: string;
  description: string;
  responsibilities: IResponsibility[];
  itemKey: number;
}

interface HorizontalAccordionItemState {
  isOpen: boolean;
}

class HorizontalAccordionItem extends React.Component<HorizontalAccordionItemProps, HorizontalAccordionItemState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { title, description, responsibilities, itemKey } = this.props;

    const toggleInfo = (): void => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    return (
      <div className="accordion__item__container">
        <div className={!this.state.isOpen ? 'accordion__item' : 'accordion__item item--open'} onClick={toggleInfo}>
          <h3>{title}</h3>
          {!this.state.isOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </div>
        <div className={!this.state.isOpen ? 'accordion__item__info' : 'accordion__item__info item__info--open'}>
          <div className="info__description">
            <h4>Description</h4>
            <p>{description}</p>
          </div>
          <div className="info__responsibilities">
            <h4>Responsibilities</h4>
            <ul>
              {responsibilities.map((responsibility, i) => {
                return <li key={i}>{responsibility.text}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalAccordionItem;
