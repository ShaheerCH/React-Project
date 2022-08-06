import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import RocketList from './RocketList'

it('Rockets Component snapshot test', () => {
  const rockets = TestRenderer
    .create(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    )
    .toJSON();
  expect(rockets).toMatchSnapshot();
});