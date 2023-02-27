import React, { useState } from 'react';
import columns from '../../table-data-columns/CompletedTableColumns';
import Table from '../../../../components/Table';
import initialValue from './mockData';
import './styles.scss';

const Completed = ({ situations }) => {

  return (
    <div className="situation-completed-container">
      <Table columns={columns} data={situations} />
    </div>
  );
};

export default Completed;
