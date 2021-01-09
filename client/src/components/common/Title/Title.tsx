import React from 'react';
import './Title.scss';

import InfoIcon from '@material-ui/icons/Info';

interface TitleProps {
  title: string;
  description: string;
}

interface TitleState {
  isOpen: boolean;
}

class Title extends React.Component<TitleProps, TitleState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggleModal = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="title__container">
        <h2 className="title__header">{this.props.title}</h2>
        <span className="title__info-icon" onClick={this.toggleModal}>
          <InfoIcon />
        </span>

        {this.state.isOpen ? (
          <>
            <div id="arrow"></div>
            <div className="title__description">{this.props.description}</div>
          </>
        ) : null}
      </div>
    );
  }
}

export default Title;
