import React from 'react';
import '../styles.scss';

const InviteActionCell = ({ row: { index }, data }) => {
  // modify later once integrate apis
  const situationId = data.map((item) => item.situationId)[index];

  let situationText = '';
  let className = 'btn invite-button';
  let disabled = null;
  const condition = true;

  if (condition) {
    situationText = 'Invited';
    className += ' btn-primary';
    disabled = true;
  } else {
    situationText = 'Invite';
    className += ' btn-outline-primary';
    disabled = false;
  }

  return (
    <div>
      <button disabled={disabled} className={className}>
        {situationText}
      </button>
    </div>
  );
};

export default InviteActionCell;
