import React from 'react';
import './Categories.scss';

import Category from './Category/Category';
import AddCategory from './AddCategory/AddCategory';

interface ICategories {
  name: string;
}

interface CategoriesProps {
  categories: ICategories[];
}

class Categories extends React.Component<CategoriesProps> {
  render() {
    const { categories } = this.props;

    const pathname = window.location.pathname.split('/');
    const section = pathname[2];
    const isInAchievements = section === 'achievements';

    return (
      <>
        {!isInAchievements ? (
          <div className="categories__container">
            <AddCategory />
            {categories.map((category, i) => {
              return <Category name={category.name} isAll={category.name === 'All'} key={i} />;
            })}
          </div>
        ) : null}
      </>
    );
  }
}

export default Categories;
