import React from 'react';

interface CategoryProps {
  name: string;
  isAll: boolean;
}

class Category extends React.Component<CategoryProps> {
  render() {
    const { name, isAll } = this.props;

    return <>{isAll ? <div className="category category__all">{name}</div> : <div className="category">{name}</div>}</>;
  }
}

export default Category;
