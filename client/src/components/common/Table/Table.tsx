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
  truncateData = (data: string | string[]) => {
    const limit: number = 25;

    data = Array.isArray(data) ? data.toString() : data;

    if (data.length > limit) {
      data = data.substring(0, limit);
      return `${data}...`;
    } else {
      return data;
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
                    console.log(item);
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
