import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../../../pages/index';

describe('Index', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Index />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
