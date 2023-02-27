import React from 'react';
import moment from 'moment';

const InFormalDateCell = ({ row: { index }, data }) => {
  const date = data.map((item) => item.updated)[index];
  const informalDate = moment(date, 'YYYYMMDD').fromNow();
  console.log(informalDate)
  const text = date?.invalid ? 'Expired' : informalDate;

  return (
    <span className={date?.invalid ? 'text-danger' : ''}>{text}</span>
  );
};

export default InFormalDateCell;
