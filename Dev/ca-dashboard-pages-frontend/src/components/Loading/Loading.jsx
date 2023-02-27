import React from 'react';
import './styles.scss';

const Loading = () => {
  return (
    <div className="spinner-border text-primary center" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
