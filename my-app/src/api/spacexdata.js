import axios from 'axios';
import { storeRockets } from '../redux/rockets';

const rocketAPI = 'https://api.spacexdata.com/v3/rockets';

const fetchRocketsAPI = () => async (dispatch) => {
  const getData = await axios.get(rocketAPI);
  const res = getData.data;
  const Rockets = [];
  res.forEach((item) => {
    const obj = {};
    obj.id = item.id;
    obj.rocket_name = item.rocket_name;
    obj.description = item.description;
    const firstImage = item.flickr_images[0];
    obj.image = firstImage;
    Rockets.push(obj);
  });
  dispatch(storeRockets(Rockets));
};

export default fetchRocketsAPI;
