import React from 'react';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { IDocumentsContent } from '../../../../store/interfaces/documents.interface';
import DocumentsTable from '../../DocumentsTable/DocumentsTable';
import Actions from '../../../common/Actions/Actions';

interface DocumentsAccordionItemState {
  isOpen: boolean;
  divHeight?: number;
}

interface DocumentsAccordionItemProps {
  item: IDocumentsContent;
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

  render() {
    const toggleInfo = (): void => {
      this.setState({
        isOpen: !this.state.isOpen,
        divHeight: document.getElementById(`name__task__${this.props.itemId}`)?.offsetHeight,
      });
    };

    return (
      <div className="documents__accordion__item">
        <div className="item__category" id={`name__task__${this.props.itemId}`}>
          <h3>{this.props.item.category}</h3>
          <div className="item__category__actions">
            <Actions
              actions={[
                { name: 'Edit', function: () => {} },
                { name: 'Delete', function: () => {} },
              ]}
            />
            <div className="task__arrow" onClick={toggleInfo}>
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
