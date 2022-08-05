import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocketBooking } from '../../redux/rockets/rockets';
import './rocket.css';

const Rocket = ({

  description, image, name, id, reserved,

}) => {
  const dispatch = useDispatch();
  const bookingRocket = (e) => {
    const { id } = e.target;
    dispatch(bookRocket(+id));
  };

  const cancelBookingRocket = (e) => {
    const { id } = e.target;
    dispatch(cancelRocketBooking(+id));
  };

  return (
    <div className="rocket_container">
      <div className="image_container">
        <img src={image} alt="rockect" />
      </div>
      <div className="info_container">
        <h3>{name}</h3>
        <p>
          { reserved && (<span className="reserved_tag">Reserved</span>)}
          {description}
        </p>
        { !reserved && (<button id={id} type="button" onClick={bookingRocket}>Reserve Rocket</button>)}
        { reserved && (<button id={id} type="button" className="cancel_reserv_btn" onClick={cancelBookingRocket}>Cancel Reserve Rocket</button>)}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;