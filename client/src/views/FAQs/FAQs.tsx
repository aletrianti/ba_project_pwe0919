import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';

class FAQs extends React.Component {
  render() {
    const pathname = window.location.pathname.split('/');
    const sectionName = pathname[1];

    const sections = [{ name: 'FAQs', pathname: 'faqs' }];

    // TODO: Replace this with categories from the DB
    const categories = [{ name: 'All' }, { name: 'Engineering' }, { name: 'Design' }];

    return (
      <div className="app__container">
        <Menu activeSection={'faqs'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'FAQs'} />

          <div className="app__content">
            <SectionBar sections={sections} activeSection={sectionName} />

            <Categories categories={categories} />
          </div>
        </div>
      </div>
    );
  }
}

export default FAQs;
