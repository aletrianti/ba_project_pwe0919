import React from 'react';

import { IQuestion } from '../../../../store/interfaces/questions.interfaces';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface QuestionItemProps {
  content: IQuestion;
  isOpen: boolean;
  toggle: any;
}

class QuestionItem extends React.Component<QuestionItemProps> {
  render() {
    const { content, isOpen, toggle } = this.props;
    const { question, answer } = content;

    return (
      <>
        <div className={!isOpen ? 'accordion__item' : 'accordion__item item--open'} onClick={toggle}>
          <h3>{question}</h3>
          {!isOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </div>
        <div className={!isOpen ? 'accordion__item__info' : 'accordion__item__info item__info--open'}>
          <div className="info__description">
            <p>{answer}</p>
          </div>
        </div>
      </>
    );
  }
}

export default QuestionItem;
