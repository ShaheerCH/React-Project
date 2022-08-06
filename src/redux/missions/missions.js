import Data from '../../API/API-Data';

const LOAD_MISSIONS = 'spacehub/missions/LOAD_MISSIONS';
const CHANGE_STATUS = 'spacehub/missions/CHANGE_STATUS';

const changeStatus = (id) => ({ type: CHANGE_STATUS, payload: id });

export default function missions(state = [], action = {}) {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
    case CHANGE_STATUS:
      return [...state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      })];
    default:
      return state;
  }
}

const fetchMissions = async (dispatch, getState) => {
  const currentMissions = getState().missions;

  if (currentMissions.length === 0) {
    const { data } = await Data.getMissions();
    const missions = data.map((mission) => (
      {
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }
    ));
    dispatch({ type: LOAD_MISSIONS, payload: missions });
  }
};

export { fetchMissions, changeStatus };
