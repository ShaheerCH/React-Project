import { fetchRocketsAPI } from '../../API/Rockets';

const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';
const BOOKING_ROCKET = 'space-travelers/rockets/BOOKING_ROCKET';
const CANCEL_ROCKET_BOOKING = 'space-travelers/rockets/ROCKET_BOOKING';

const initialState = {
  isDataStored: false,
};
export const getRockets = (data) => ({
  type: GET_ROCKETS,
  payload: data,
});

export const bookRocket = (id) => ({
  type: BOOKING_ROCKET,
  payload: id,
});

export const cancelRocketBooking = (id) => ({
  type: CANCEL_ROCKET_BOOKING,
  payload: id,
});

export const getRocketsDispatcher = () => async (dispatch) => {
  const rockets = await fetchRocketsAPI();
  dispatch(getRockets(rockets));
};
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return {
        ...state,
        isDataStored: true,
        data: action.payload,
      };

    case BOOKING_ROCKET:
      return {
        isDataStored: true,
        data: state.data.map((rocket) => {
          const res = (rocket.id === action.payload)
            ? { ...rocket, reserved: true } : { ...rocket };
          return res;
        }),
      };

    case CANCEL_ROCKET_BOOKING:
      return {
        isDataStored: true,
        data: state.data.map((rocket) => {
          const res = (rocket.id === action.payload)
            ? { ...rocket, reserved: false } : { ...rocket };
          return res;
        }),
      };

    default:
      return state;
  }
};
export default rocketsReducer;
