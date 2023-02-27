import moment from 'moment';
import React from 'react';

const FormalDateCell = ({ row: { index }, data }) => {
  const date = data.map((item) => item.created)[index];
  const formalDate = moment(date).format('Do MMMM, h:mm a'); 

  return <span>{formalDate}</span>;
};

export default FormalDateCell;
