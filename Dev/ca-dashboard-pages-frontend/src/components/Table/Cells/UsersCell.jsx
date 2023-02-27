import React from 'react';
import '../styles.scss';

const UsersCell = ({ row: { index }, data }) => {
  const users = data.map((item) => item?.users);
  const usersAtIndex = users[index];
  const imageClassName =
    users[index]?.length === 1 ? 'me-2' : 'minus-margin-image';

  return (
    <div>
      <div>
        {usersAtIndex && usersAtIndex.map((user, index) => (
          <img
            src={user.avatar}
            className={`rounded-circle ${imageClassName}`}
            width="45px"
            height="45px"
            alt="user-avatar"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersCell;
