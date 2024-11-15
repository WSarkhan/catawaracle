import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ImageCard } from './ImageCard';

describe('ImageCard', () => {
  it('should match a snapshot', () => {
    const tree = renderer
      .create(
        <ImageCard
          cat={{
            id: '1',
            url: 'https://example.com/cat.jpg',
            width: 100,
            height: 100,
          }}
          onUpvote={() => {}}
          onDownvote={() => {}}
          onToggleFavorite={() => {}}
          isFavorite={false}
          loading={false}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
