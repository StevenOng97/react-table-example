import React from 'react';
import '../styles.scss';

const StatusButtonCell = ({ row: { index }, data }) => {
  const statuses = data.map((item) => item.status);

  return (
    <div>
      <button className="status-button">{statuses[index]}</button>
    </div>
  );
};

export default StatusButtonCell;
