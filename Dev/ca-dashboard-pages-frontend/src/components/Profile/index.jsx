import React from 'react';
import Card from '../Card';
import './styles.scss';
import star from '../../assets/images/Table/star.png';
import halfStar from '../../assets/images/Table/half-star.png';
import ProfileSmallCard from './components/ProfileSmallCard';

const Profile = () => {
  const cards = [
    { title: 'Industry', content: 'Lorem Ipsum', color: 'purple' },
    { title: 'Domain', content: 'Lorem Ipsum', color: 'yellow' },
    { title: 'Function', content: 'Lorem Ipsum', color: 'orange' },
    { title: 'Career Stage', content: 'Lorem Ipsum', color: 'green' },
    { title: 'Organization SIZE', content: 'Lorem Ipsum', color: 'red' },
    { title: 'Country', content: 'Lorem Ipsum', color: 'blue' },
  ];

  const renderStars = (rating) => {
    const naturalPart = rating.toString().split('.')[0];
    const remainderPart = rating.toString().split('.')[1];

    const stars = remainderPart
      ? parseInt(naturalPart) + 1
      : parseInt(naturalPart);

    const renderStar = (index) =>
      index === stars - 1 && remainderPart ? halfStar : star;

    return [...new Array(stars)].map((_, index) => (
      <img src={renderStar(index)} alt="star" key={index} />
    ));
  };

  return (
    <div className="profile-wrapper">
      <Card className=" big-card">
        <div className="header-wrapper d-flex">
          <div className="avatar-wrapper"></div>
          <div></div>
          <div className="background-container">
            <div className="box orange"></div>
            <div className="box yellow"></div>
          </div>
        </div>
        <div className="feedback-wrapper">
          <div className="situations">
            <div className="posted d-flex">
              <div className="amount">
                <span>Posted Situations</span>
                <h6>100</h6>
              </div>
              <div className="rating">
                <span className="d-block">Rating</span>
                {renderStars(5)}
              </div>
            </div>
            <div className="advised d-flex">
              <div className="amount">
                <span>Advised Situations</span>
                <h6>100</h6>
              </div>
              <div className="rating">
                <span className="d-block">Rating</span>
                {renderStars(4.5)}
              </div>
            </div>
          </div>
          <div className="performances">
            <span>Performance Record</span>
            <div className="d-flex mt-2">
              <h6>Helpful: 200</h6>
            </div>
            <div className="d-flex mt-2">
              <h6>Partially Helpful: 100</h6>
            </div>
            <div className="d-flex mt-2">
              <h6>Unhelpful: 30</h6>
            </div>
          </div>
        </div>
        <div className="profile-card-wrapper">
          <h5 className="mb-3">Profile</h5>
          <div className="cards">
            {cards.map((card, index) => (
              <ProfileSmallCard card={card} key={index} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
