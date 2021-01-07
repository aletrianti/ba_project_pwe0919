import React from 'react';

interface CategoryProps {
  name: string;
  isAll: boolean;
}

class Category extends React.Component<CategoryProps> {
  render() {
    const { name, isAll } = this.props;

    return (
      <>{isAll ? <button className="category category__all">{name}</button> : <button className="category">{name}</button>}</>
    );
  }
}

export default Category;
