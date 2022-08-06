import React from 'react';
import { useSelector } from 'react-redux';

export default function ReservedRockets() {
  const rockets = useSelector((state) => state.rocketsReducer.data);
  const reservedRockets = rockets ? rockets.filter((rocket) => rocket.reserved === true) : [];

  return (
    <section className="rockets-section">
      <h2>My Rockets</h2>
      <ul className="reserve">
        {reservedRockets.map((rocket) => (
          <li className="reserve-list" key={rocket.id}>
            {rocket.rocket_name}
          </li>
        ))}
      </ul>
    </section>
  );
}
