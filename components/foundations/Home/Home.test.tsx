import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Home } from './Home';

describe('Home', () => {
  it('should match a snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
