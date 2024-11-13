import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { CustomAlert } from './CustomAlert';

describe('CustomAlert', () => {
  it('should match a snapshot', () => {
    const tree = renderer
      .create(
        <CustomAlert
          title="Title"
          message="Message"
          visible={true}
          onClose={() => {}}
          buttonText="OK"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
