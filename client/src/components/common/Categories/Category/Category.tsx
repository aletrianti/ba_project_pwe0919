import React from 'react';

interface CategoryProps {
  id: number;
  name: string;
  isAll: boolean;
}

class Category extends React.Component<CategoryProps> {
  render() {
    const { id, name, isAll } = this.props;

    return (
      <>
        {isAll ? (
          <button className="category category__all" data-id={id}>
            {name}
          </button>
        ) : (
          <button className="category" data-id={id}>
            {name}
          </button>
        )}
      </>
    );
  }
}

export default Category;
