import React, { useMemo } from 'react';
import './styles.scss';
import { useTable } from 'react-table';

const Table = ({ columns, data, getDataFromActions }) => {
  const columnsTable = useMemo(() => columns, []);
  const dataTable = useMemo(() => data, [data]);

  // dynamic Later
  const initialState = { hiddenColumns: ['_id'] };

  const tableInstance = useTable({
    columns: columnsTable,
    data: dataTable,
    initialState,
    getDataFromActions
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="table-responsive">
      <table {...getTableProps()} className="custom-table table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
