import React from 'react';
import './HorizontalAccordion.scss';

import HorizontalAccordionItem from './HorizontalAccordionItem/HorizontalAccordionItem';

import { IRole } from '../../../store/interfaces/roles.interfaces';
import { IQuestion } from '../../../store/interfaces/questions.interfaces';

interface HorizontalAccordionProps {
  roles?: IRole[];
  questions?: IQuestion[];
  section: string;
}

class HorizontalAccordion extends React.Component<HorizontalAccordionProps> {
  render() {
    const { section, roles, questions } = this.props;

    return (
      <div className="accordion__container">
        {section === 'roles-and-responsibilities' && roles
          ? roles.map((role, i) => {
              return (
                <HorizontalAccordionItem
                  section={section}
                  content={{
                    title: role.title,
                    description: role.description,
                    responsibilities: role.responsibilities,
                  }}
                  key={i}
                />
              );
            })
          : null}
        {section === 'faqs' && questions
          ? questions.map((question, i) => {
              return (
                <HorizontalAccordionItem
                  section={section}
                  content={{
                    question: question.question,
                    answer: question.answer,
                  }}
                  key={i}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default HorizontalAccordion;
