import React from 'react';
import '../styles.scss';
import editIcon from '../../../assets/images/Table/edit.png';
import deleteIcon from '../../../assets/images/Table/delete.png';

const ActionsCell = ({ row: { index }, data, getDataFromActions }) => {
  const situationId = data.map((item) => item._id)[index];

  const actionCallback = (type) => {
    getDataFromActions({ type, situationId });
  };

  return (
    <div>
      <img
        src={editIcon}
        className="me-3 icon"
        alt="edit-icon"
        width="18px"
        height="18px"
        onClick={() => actionCallback('edit')}
      />
      <img
        src={deleteIcon}
        className="icon"
        alt="delete-icon"
        width="18px"
        height="18px"
        onClick={() => actionCallback('delete')}
      />
    </div>
  );
};

export default ActionsCell;
