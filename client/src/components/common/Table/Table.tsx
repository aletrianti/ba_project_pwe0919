import React from 'react';
import './Table.scss';

interface Column {
  title: string;
  columnData: any;
}

interface TableProps {
  data: any[];
  columns: Column[];
}

class Table extends React.Component<TableProps> {
  truncateData = (data: any | any[]) => {
    const limit: number = 25;

    if (!data) return '';

    let dataToTruncate = Array.isArray(data)
      ? [
          data.map(item => item.description + ', '), // Modify if it happens with more than just roles
        ]
      : data;

    if (dataToTruncate.length > limit) {
      dataToTruncate = dataToTruncate.substring(0, limit);
      return `${dataToTruncate}...`;
    } else {
      return dataToTruncate;
    }
  };

  render() {
    const { data, columns } = this.props;

    return (
      <div className="table__container">
        <table>
          <thead>
            <tr className="header__tr">
              {columns.map((column, i) => {
                return <th key={i}>{column.title}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  {columns.map((column, i) => {
                    return <td key={i}>{this.truncateData(column.columnData(item))}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
