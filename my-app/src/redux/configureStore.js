import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missions from './missions/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missions, rocketsReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
