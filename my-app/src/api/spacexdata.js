import axios from 'axios';

const rocketAPI = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketsAPI = async () => {
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
    obj.reserved = false;
    Rockets.push(obj);
  });
  return Rockets;
};

export default fetchRocketsAPI;
