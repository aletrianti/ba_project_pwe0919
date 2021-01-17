import React from 'react';
import './Categories.scss';

import Category from './Category/Category';

import { ITableCategory } from '../../../store/interfaces/tables.interfaces';

interface CategoriesProps {
  categories: ITableCategory[];
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
            {categories.map((category, i) => {
              return <Category id={category.id} name={category.title} isAll={category.title === 'All'} key={i} />;
            })}
          </div>
        ) : null}
      </>
    );
  }
}

export default Categories;
