import React from 'react';
import './Documents.scss';

import Title from '../../common/Title/Title';
import DocumentsItem from './DocumentsItem/DocumentsItems';

class Documents extends React.Component {
  constructor(props: any) {
    super(props);
  }

  modalDescription: string = `
    Allow new employees to only see certain categories, so that they can focus on learning about their role.

    This is only for priotizing information. Once your employee is done with their onbaording process, they will be able to see all categories.
  `;

  // TODO!! Send dynamic data to DocumentsItem

  render() {
    return (
      <div className="admin-panel__documents">
        <Title title={'Assign document categories to specific roles'} description={this.modalDescription} />

        <div className="admin-panel__documents__content">
          <div className="admin-panel__documents__content__headers">
            <h3>Document categories</h3>
            <h3>Roles</h3>
          </div>
          <div className="admin-panel__documents__content__items">
            <DocumentsItem categoryName={'Category'} categoryId={1} numCategoryRoles={1} />
          </div>
        </div>
      </div>
    );
  }
}

export default Documents;
