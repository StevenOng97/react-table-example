import React from 'react';
import '../styles.scss';

const CurrencyCell = ({ row: { index }, data }) => {
  const currency = data.map((item) => item.price)[index];

  return (
    <span>${currency}</span>
  );
};

export default CurrencyCell;
