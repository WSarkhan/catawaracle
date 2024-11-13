import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
  it('should match a snapshot', () => {
    const tree = renderer
      .create(<Button label="Title" onPress={() => {}} disabled={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
