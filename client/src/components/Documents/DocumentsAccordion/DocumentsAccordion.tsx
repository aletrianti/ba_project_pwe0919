import React from 'react';
import { IDocumentsContent } from '../../../store/interfaces/documents.interface';
import './DocumentsAccordion.scss';

import DocumentsAccordionItem from './DocumentsAccordionItem/DocumentsAccordionItem';

interface DocumentsAccordionProps {
  content: IDocumentsContent[];
}

class DocumentsAccordion extends React.Component<DocumentsAccordionProps> {
  render() {
    return (
      <div id="documents__accordion__container">
        {this.props.content.map((item, i) => {
          return <DocumentsAccordionItem item={item} itemId={i + 1} key={i} />;
        })}
      </div>
    );
  }
}

export default DocumentsAccordion;
