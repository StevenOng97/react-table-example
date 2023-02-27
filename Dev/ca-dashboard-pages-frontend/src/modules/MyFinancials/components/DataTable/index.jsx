import React from 'react';
import '../../styles.scss';

const DataTable = ({ users }) => {
  return (
    <div className="data-container mt-3">
      <div className="header-container d-flex justify-content-between">
        <h5>Name</h5>
        <h5>Amount</h5>
      </div>
      <div className="content-wrapper d-flex flex-column justify-content-between">
        {users.map((user, i) => (
          <div className="item d-flex align-items-center justify-content-between py-3" key={i}>
            <img src={user.avatar} alt="avatar"  />
            <span>
              ${user.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
