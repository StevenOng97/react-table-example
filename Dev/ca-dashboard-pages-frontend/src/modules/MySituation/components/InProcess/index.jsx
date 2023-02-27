import React, { useState } from 'react';
import columns from '../../table-data-columns/InProcessTableColumns';
import Table from '../../../../components/Table';
import initialValue from './mockData';
import './styles.scss';

const InProcess = () => {
  const [rowData, setRowData] = useState(initialValue);

  return (
    <div className="situation-in-process-container">
      <Table columns={columns} data={rowData} />
    </div>
  );
};

export default InProcess;
