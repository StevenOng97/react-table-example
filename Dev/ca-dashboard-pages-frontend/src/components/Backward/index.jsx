import React from 'react';
import backIcon from '../../assets/images/Common/back-icon.png';

const Backward = ({ children, className }) => {
  return (
    <div className={`back-wrapper d-flex align-items-center ${className}`}>
      <div className="icon-wrapper d-flex align-items-center">
        <img
          src={backIcon}
          alt="back-icon"
          className="me-2"
          width="7px"
          height="12px"
        />
        <h6>Back</h6>
      </div>
      {children}
    </div>
  );
};

export default Backward;
