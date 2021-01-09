import React from 'react';
import './Title.scss';

import InfoIcon from '@material-ui/icons/Info';

interface TitleProps {
  title: string;
  description: string;
  itemKey: number;
}

interface TitleState {
  isOpen: boolean;
  divWidth?: number;
}

class Title extends React.Component<TitleProps, TitleState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      divWidth: undefined,
    };
  }

  toggleModal = (): void => {
    this.setState({
      isOpen: !this.state.isOpen,
      divWidth: document.getElementById(`title__header__${this.props.itemKey}`)?.offsetWidth,
    });
  };

  render() {
    return (
      <div className="title__container">
        <h2 id={`title__header__${this.props.itemKey}`} className="title__header">
          {this.props.title}
        </h2>
        <span className="title__info-icon" onClick={this.toggleModal}>
          <InfoIcon />
        </span>

        {this.state.isOpen ? (
          <>
            <div id="arrow" style={{ left: `calc(${this.state.divWidth}px + 42px)` }}></div>
            <div className="title__description" style={{ left: `calc(${this.state.divWidth}px + 50px)` }}>
              {this.props.description}
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

export default Title;
