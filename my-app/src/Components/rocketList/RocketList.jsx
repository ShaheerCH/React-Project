import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../rocket/Rocket';
import fetchRocketsAPI from '../../api/spacexdata';

const RokectsList = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (!rocketsData.isDataStored) {
      dispatch(fetchRocketsAPI());
    }
  }, []);

  const rokectsList = rocketsData.data;
  let rockets = [];
  if (rokectsList) {
    rockets = rokectsList.map((item) => (
      <li key={item.id}>
        <Rocket
          description={item.description}
          image={item.image}
          name={item.rocket_name}
        />
      </li>
    ));
  }

  return (
    <ul>
      {rockets}
    </ul>
  );
};

export default RokectsList;