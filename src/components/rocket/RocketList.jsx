import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { getRocketsDispatcher } from '../../redux/rockets/rockets';

const RokectsList = () => {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (!rocketsData.isDataStored) {
      dispatch(getRocketsDispatcher());
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
          id={item.id}
          reserved={item.reserved}
        />
      </li>
    ));
  }
  return (
    <ul className="Rockets">
      {rockets}
    </ul>
  );
};
export default RokectsList;
