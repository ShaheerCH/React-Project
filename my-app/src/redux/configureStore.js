import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets';

const reducer = combineReducers({
  rocketsReducer,
});

/* eslint-disable no-underscore-dangle */

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
