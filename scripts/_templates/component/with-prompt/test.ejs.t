---
to: ./components/<%=atomic%>s/<%=name%>/<%=name%>.test.tsx
---
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { <%=name%> } from './<%=name%>';

describe('<%=name%>', () => {
  it('should match a snapshot', () => {
    const tree = renderer.create(<<%=name%> />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});