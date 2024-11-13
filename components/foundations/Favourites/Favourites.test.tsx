import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Favourites } from './Favourites';

describe('Favourites', () => {
  it('should match a snapshot', () => {
    const tree = renderer.create(<Favourites />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
