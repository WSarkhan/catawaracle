import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Catawaracle } from './Catawaracle';

describe('Catawaracle', () => {
  it('should match a snapshot', () => {
    const tree = renderer.create(<Catawaracle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
