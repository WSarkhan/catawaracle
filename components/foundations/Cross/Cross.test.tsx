import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Cross } from './Cross';

describe('Cross', () => {
  it('should match a snapshot', () => {
    const tree = renderer.create(<Cross />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
