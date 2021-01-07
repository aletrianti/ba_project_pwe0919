import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import DocumentsAccordion from '../../components/Documents/DocumentsAccordion/DocumentsAccordion';
import Actions from '../../components/common/Actions/Actions';

class Documents extends React.Component {
  sections = [{ name: 'Files', pathname: 'documents' }];

  // TODO: Replace this with categories from the DB
  categories = [{ name: 'All' }, { name: 'Engineering' }, { name: 'Design' }];

  // TODO: Replace this with documents' data from the DB
  data = [
    {
      filename: 'PDF',
      created: '10-03-19',
      actions: (
        <Actions
          actions={[
            { name: 'Edit', function: () => {} },
            { name: 'Delete', function: () => {} },
          ]}
        />
      ),
    },
    {
      filename: 'PNG',
      created: '09-06-20',
      actions: (
        <Actions
          actions={[
            { name: 'Edit', function: () => {} },
            { name: 'Delete', function: () => {} },
          ]}
        />
      ),
    },
  ];

  content = [
    {
      category: 'All',
      data: this.data,
    },
  ];

  render() {
    const pathname = window.location.pathname.split('/');
    const sectionName = pathname[1];

    return (
      <div className="app__container">
        <Menu activeSection={'documents'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'Documents'} />

          <div className="app__content">
            <SectionBar sections={this.sections} activeSection={sectionName} />

            <Categories categories={this.categories} />

            <div id="documents__content">
              <DocumentsAccordion content={this.content} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Documents;
