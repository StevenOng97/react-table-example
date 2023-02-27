import React from 'react';
import star from '../../../assets/images/Table/star.png';
import halfStar from '../../../assets/images/Table/half-star.png';

const RatingStarCell = ({ row: { index }, data }) => {
  // const rating = data.map((item) => item.rating)[index];

  // const naturalPart = rating.toString().split('.')[0];
  // const remainderPart = rating.toString().split('.')[1];

  // const stars = remainderPart
  //   ? parseInt(naturalPart) + 1
  //   : parseInt(naturalPart);

  // const renderStar = (index) =>
  //   index === stars - 1 && remainderPart ? halfStar : star;

  return (
    <div>
      {/* {[...new Array(stars)].map((_, index) => (
        <img src={renderStar(index)} alt="star" key={index} />
      ))} */}
    </div>
  );
};

export default RatingStarCell;
