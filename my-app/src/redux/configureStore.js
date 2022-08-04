import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missions from './missions/missions';

const rootReducer = combineReducers({
  missions,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
