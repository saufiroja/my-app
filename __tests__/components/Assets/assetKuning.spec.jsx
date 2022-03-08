import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AssetKuning from '../../../components/Assets/AssetKuning';

describe('AssetKuning', () => {
  it('renders a image', () => {
    render(<AssetKuning />);

    const image = screen.getByRole('img', {
      name: 'Asset-Kuning',
    });

    const incrediblesPosterImg = screen.getByAltText('Asset-Kuning');

    expect(image).toBeInTheDocument();
    expect(incrediblesPosterImg).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<AssetKuning />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
