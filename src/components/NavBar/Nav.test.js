import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Nav from './Nav';

describe('Jest test', () => {
  it('Match Snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
