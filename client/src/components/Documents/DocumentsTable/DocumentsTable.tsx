import React from 'react';
import './DocumentsTable.scss';

import Table from '../../common/Table/Table';

import { ITableDocuments } from '../../../store/interfaces/tables.interfaces';
import Actions from '../../common/Actions/Actions';

interface DocumentsTableProps {
  data: ITableDocuments[];
}

class DocumentsTable extends React.Component<DocumentsTableProps> {
  deleteDelete = (id: number, e: MouseEvent) => {
    e.preventDefault();
  };

  actions = (id: number) => <Actions actions={[{ name: 'Delete', function: (e: MouseEvent) => this.deleteDelete(id, e) }]} />;

  columns = [
    { title: 'Filename', columnData: (data: any) => data.filename },
    { title: 'Created', columnData: (data: any) => data.created },
    { title: '', columnData: (data: any) => this.actions(data.id) },
  ];

  render() {
    return (
      <div id="documents__table">
        <Table data={this.props.data} columns={this.columns} />
      </div>
    );
  }
}

export default DocumentsTable;
