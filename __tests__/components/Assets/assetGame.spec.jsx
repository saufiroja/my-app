import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AssetGame from '../../../components/Assets/AssetGame';

describe('AssetGame', () => {
  it('renders a image', () => {
    render(<AssetGame />);

    const image = screen.getByRole('img', {
      name: 'Asset-Game',
    });

    const incrediblesPosterImg = screen.getByAltText('Asset-Game');

    expect(image).toBeInTheDocument();
    expect(incrediblesPosterImg).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<AssetGame />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
