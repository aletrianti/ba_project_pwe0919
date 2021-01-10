import React from 'react';
import { Link } from 'react-router-dom';
import './SectionBar.scss';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

interface SectionBarProps extends RouteComponentProps {
  sections: {
    name: string;
    pathname: string;
  }[];
  activeSection: string;
  isAdminPanel?: boolean;
}

interface SectionBarState {
  barHeight?: string;
  barContainerHeight?: string;
  barContainerMaxHeight?: string;
}

class SectionBar extends React.Component<SectionBarProps, SectionBarState> {
  constructor(props: any) {
    super(props);

    this.state = {
      barHeight: undefined,
      barContainerHeight: undefined,
      barContainerMaxHeight: undefined,
    };
  }

  Bar = sections =>
    sections.map((section, i) => {
      return (
        <div
          className={
            this.props.activeSection === section.pathname ? 'section-bar__link section-bar__link--active' : 'section-bar__link'
          }
          key={i}
        >
          {(!this.props.isAdminPanel && section.name === 'Tasks') || section.name === 'Buddy' ? (
            <span className="section__link">{section.name}</span>
          ) : (
            <Link to={section.pathname} className="section__link">
              {section.name}
            </Link>
          )}
        </div>
      );
    });

  Arrow = ({ text, className }) => {
    return <>{this.props.sections.length > 3 ? <div className={className}>{text}</div> : null}</>;
  };

  ArrowLeft = this.Arrow({ text: <ArrowBackIosOutlinedIcon />, className: 'arrow-prev' });
  ArrowRight = this.Arrow({ text: <ArrowForwardIosOutlinedIcon />, className: 'arrow-next' });

  setBarStyles = (): void => {
    this.setState({
      barHeight: this.props.sections.length > 3 ? '41px' : '37px',
    });
  };

  setBarContainerStyles = (): void => {
    this.setState({
      barContainerHeight: this.props.sections.length > 3 ? '41px' : '37px',
      barContainerMaxHeight: this.props.sections.length > 3 ? '41px' : '37px',
    });
  };

  componentDidMount() {
    this.setBarStyles();
    this.setBarContainerStyles();
  }

  render() {
    const data = this.Bar(this.props.sections);

    return (
      <div id="section-bar" style={{ height: `${this.state.barHeight}` }}>
        <div
          id="section-bar__container"
          style={{ height: `${this.state.barContainerHeight}`, maxHeight: `${this.state.barContainerMaxHeight}` }}
        >
          <ScrollMenu alignCenter={false} data={data} arrowLeft={this.ArrowLeft} arrowRight={this.ArrowRight} />
        </div>

        <div id="section-bar__main-bar"></div>
      </div>
    );
  }
}

export default withRouter(SectionBar);
