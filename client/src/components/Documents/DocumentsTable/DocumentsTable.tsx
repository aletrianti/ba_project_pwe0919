import React from 'react';
import './DocumentsTable.scss';

import Table from '../../common/Table/Table';
import Actions from '../../common/Actions/Actions';

import { IDocumentsData } from '../../../store/interfaces/documents.interface';

interface DocumentsTableProps {
  data: IDocumentsData[];
}

class DocumentsTable extends React.Component<DocumentsTableProps> {
  render() {
    const columns = [
      { title: 'Filename', columnData: (data: any) => data.filename },
      { title: 'Created', columnData: (data: any) => data.created },
      { title: '', columnData: (data: any) => data.actions },
    ];

    return (
      <div id="documents__table">
        <Table data={this.props.data} columns={columns} />
      </div>
    );
  }
}

export default DocumentsTable;
