import React, { useState } from 'react';
import columns from '../../table-data-columns/MyAdviceCompletedTableColumns';
import Table from '../../../../components/Table';
import initialValue from './mockData';
import './styles.scss';

const MyAdviceCompleted = () => {
  const [rowData, setRowData] = useState(initialValue);

  return (
    <div className="situation-completed-container">
      <Table columns={columns} data={rowData} />
    </div>
  );
};

export default MyAdviceCompleted;
