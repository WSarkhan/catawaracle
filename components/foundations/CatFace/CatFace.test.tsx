import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { CatFace } from './CatFace';

describe('CatFace', () => {
  it('should match a snapshot', () => {
    const tree = renderer.create(<CatFace />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
