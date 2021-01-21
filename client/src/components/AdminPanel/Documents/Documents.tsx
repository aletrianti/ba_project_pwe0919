import React from 'react';
import './Documents.scss';

import Title from '../../common/Title/Title';
import DocumentsItem from './DocumentsItem/DocumentsItems';
import { getCategories } from '../../../utils/httpRequests';

interface DocumentsState {
  categories: any[];
}

class Documents extends React.Component<{}, DocumentsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  modalDescription: string = `
    Allow new employees to only see certain categories, so that they can focus on learning about their role.

    This is only for priotizing information. Once your employee is done with their onbaording process, they will be able to see all categories.
  `;

  getCategories = async () => {
    return await getCategories();
  };

  async componentDidMount() {
    const categoriesFromDB = await this.getCategories();

    const categories = categoriesFromDB.map(category => {
      return { name: category.title, id: category.id, numRoles: 0 }; // TODO: Add dynamic roles number
    });

    this.setState({ categories: categories });
  }

  render() {
    return (
      <div id="admin-panel__documents">
        <Title title={'Assign document categories to specific roles'} description={this.modalDescription} itemKey={0} />

        <div id="admin-panel__documents__content">
          <div id="admin-panel__documents__content__headers">
            <h3>Document categories</h3>
            <h3>Roles</h3>
          </div>
          <div id="admin-panel__documents__content__items">
            {this.state.categories.map((category, i) => {
              return (
                <DocumentsItem
                  categoryName={category.name}
                  categoryId={category.id}
                  numCategoryRoles={category.numRoles}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Documents;
