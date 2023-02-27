import React, { useState, useEffect } from 'react';
import columns from '../../table-data-columns/PublishedTableColumns';
import Table from '../../../../components/Table';
import initialValue from './mockData';
import './styles.scss';

const Published = ({ situations }) => {
  const [rowData, setRowData] = useState(situations);
  const [situation, setSituation] = useState(null);

  const getDataFromActions = (data) => {
    setSituation(data);
  };

  useEffect(() => {
    console.log('situationData modified', situation);
  }, [situation]);
  
  return (
    <div className="published-container">
      <Table
        columns={columns}
        data={rowData}
        getDataFromActions={getDataFromActions}
      />
    </div>
  );
};

export default Published;
