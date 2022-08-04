import React from 'react';
import PropTypes from 'prop-types';
import './rocket.css';

const Rocket = (props) => {
  const { description, image, name } = props;

  return (
    <div className="rocket_container">
      <div className="image_container">
        <img src={image} alt="rockect" />
      </div>
      <div className="info_container">
        <h3>{name}</h3>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;