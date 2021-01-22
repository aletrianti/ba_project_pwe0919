import React from 'react';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { ITableDocumentsContent } from '../../../../store/interfaces/tables.interfaces';
import DocumentsTable from '../../DocumentsTable/DocumentsTable';
import AddButton from '../../../common/AddButton/AddButton';

interface DocumentsAccordionItemState {
  isOpen: boolean;
  divHeight?: number;
}

interface DocumentsAccordionItemProps {
  item: ITableDocumentsContent;
  itemId: number;
}

class DocumentsAccordionItem extends React.Component<DocumentsAccordionItemProps, DocumentsAccordionItemState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpen: false,
      divHeight: undefined,
    };
  }

  toggleInfo = (): void => {
    this.setState({
      isOpen: !this.state.isOpen,
      divHeight: document.getElementById(`name__task__${this.props.itemId}`)?.offsetHeight,
    });
  };

  render() {
    return (
      <div className="documents__accordion__item">
        <div className="item__category" id={`name__task__${this.props.itemId}`}>
          <div className="item__category__name">
            <h3>{this.props.item.category.title}</h3>
            <AddButton name={'Add a file'} function={() => {}} />
          </div>
          <div className="item__category__actions">
            <div className="task__arrow" onClick={this.toggleInfo}>
              {!this.state.isOpen ? <ExpandMore /> : <ExpandLess />}
            </div>
          </div>
        </div>
        {this.state.isOpen ? <DocumentsTable data={this.props.item.data} /> : null}
      </div>
    );
  }
}

export default DocumentsAccordionItem;
