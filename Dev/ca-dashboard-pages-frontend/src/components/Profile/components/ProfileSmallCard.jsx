import React from 'react';

const ProfileSmallCard = ({ card }) => {
  return (
    <div className={`profile-card ${card.color}`}>
      <span>{card.title}</span>
      <h6>{card.content}</h6>
    </div>
  );
};

export default ProfileSmallCard;