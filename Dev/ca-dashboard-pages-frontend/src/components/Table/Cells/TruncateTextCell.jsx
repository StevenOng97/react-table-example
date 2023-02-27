import React from 'react';

const TruncateTextCell = ({ row: { index }, data }) => {
  const texts = data.map((item) => item.question)[index];

  return (
    <div className="w-100">
      <span className="truncated-text">{texts}</span>
    </div>
  );
};

export default TruncateTextCell;
