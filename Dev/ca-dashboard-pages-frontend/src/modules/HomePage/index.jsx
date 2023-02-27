import React from 'react';
import './styles.scss';
import icon1 from '../../assets/images/HomePage/icon 30.png';
import icon2 from '../../assets/images/HomePage/Icon 14.png';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div
        className="box first-box bg-blue"
        onClick={() => navigate('post/create-a-post')}
      >
        <img src={icon1} height="100px" alt="pen-icon" />
        <div className="text">
          <h2>Post a Situation</h2>
          <span>
            Describe your situation, publish it & invite someone for advice
          </span>
        </div>
      </div>
      <div
        className="box second-box"
        onClick={() => navigate('post/pick-a-post')}
      >
        <img src={icon2} height="100px" alt="pen2-icon" />
        <div className="text">
          <h2>Pick a Situation</h2>
          <span>Read published situations, invite & start giving advice</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
