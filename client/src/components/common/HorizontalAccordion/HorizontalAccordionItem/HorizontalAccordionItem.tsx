import React from 'react';
import RoleItem from './RoleItem';
import QuestionItem from './QuestionItem';

interface HorizontalAccordionItemProps {
  content: any;
  section: string;
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
    const { section, content } = this.props;

    const toggleInfo = (): void => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    return (
      <div className="accordion__item__container">
        {section === 'roles-and-responsibilities' ? (
          <RoleItem content={content} isOpen={this.state.isOpen} toggle={toggleInfo} />
        ) : null}
        {section === 'faqs' ? <QuestionItem content={content} isOpen={this.state.isOpen} toggle={toggleInfo} /> : null}
      </div>
    );
  }
}

export default HorizontalAccordionItem;
