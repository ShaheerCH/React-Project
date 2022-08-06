import http from './Base-API';

const getMissions = () => http.get('/missions');

const Data = {
  getMissions,
};

export default Data;
