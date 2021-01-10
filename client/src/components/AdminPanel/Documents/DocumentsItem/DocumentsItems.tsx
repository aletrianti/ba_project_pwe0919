import React from 'react';
import './DocumentsItems.scss';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

interface DocumentsItemProps {
  categoryName: string;
  categoryId: number;
  numCategoryRoles: number;
}

class DocumentsItem extends React.Component<DocumentsItemProps> {
  constructor(props: any) {
    super(props);
  }

  openModal = () => {};

  render() {
    return (
      <div className="documents__item__container">
        <div className="documents__item__first-half">
          <h4 className="documents__item__name">{this.props.categoryName}</h4>
          <ArrowRightAltIcon />
        </div>
        <div className="documents__item__second-half">
          <button onClick={this.openModal} className="documents__item__btn">
            Choose roles
          </button>
          <span className="documents__item__span">
            {this.props.numCategoryRoles} {this.props.numCategoryRoles === 1 ? 'role' : 'roles'} chosen
          </span>
        </div>
      </div>
    );
  }
}

export default DocumentsItem;
