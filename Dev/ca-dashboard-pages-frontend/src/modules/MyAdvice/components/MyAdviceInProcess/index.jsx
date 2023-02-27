import React, { useState } from 'react';
import columns from '../../table-data-columns/MyAdviceInProcessTableColumns';
import Table from '../../../../components/Table';
import initialValue from './mockData';
import './styles.scss';

const MyAdviceInProcess = () => {
  const [rowData, setRowData] = useState(initialValue);

  return (
    <div className="situation-in-process-container">
      <Table columns={columns} data={rowData} />
    </div>
  );
};

export default MyAdviceInProcess;
