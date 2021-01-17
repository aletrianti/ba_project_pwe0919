import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import AddButton from '../../components/common/AddButton/AddButton';
import HorizontalAccordion from '../../components/common/HorizontalAccordion/HorizontalAccordion';
import { IQuestion } from '../../store/interfaces/questions.interfaces';
import { isCurrentUserAnAdmin } from '../../utils/localStorageActions';

class FAQs extends React.Component {
  sections = [{ name: 'FAQs', pathname: 'faqs' }];

  // TODO: Replace this with categories from the DB
  categories = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Engineering' },
    { id: 3, title: 'Design' },
  ];

  // TODO: Replace this with roles & responsibilities from the DB
  questions: IQuestion[] = [
    {
      question: 'Who can I ask for help?',
      answer:
        'In the dashboard, you can see a name under the section “Buddy”: this is the name of the person you had been assigned to. Your “buddy” will give you all the help you need to start at NewCompany.',
    },
    {
      question: 'Who can I ask for help?',
      answer:
        'In the dashboard, you can see a name under the section “Buddy”: this is the name of the person you had been assigned to. Your “buddy” will give you all the help you need to start at NewCompany.',
    },
  ];

  openAddFAQModal = (): void => {};

  render() {
    const pathname = window.location.pathname.split('/');
    const sectionName = pathname[1];

    return (
      <div className="app__container">
        <Menu activeSection={'faqs'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'FAQs'} />

          <div className="app__content">
            <SectionBar sections={this.sections} activeSection={sectionName} />

            <Categories categories={this.categories} />

            <AddButton name={'Add FAQ'} function={this.openAddFAQModal} />

            {sectionName === 'faqs' ? <HorizontalAccordion questions={this.questions} section={sectionName} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default FAQs;
