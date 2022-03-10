import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AssetUngu from '../../../components/Assets/AssetUngu';

describe('AssetUngu', () => {
  it('renders a image', () => {
    render(<AssetUngu />);

    const image = screen.getByRole('img', {
      name: 'Asset-Ungu',
    });

    const incrediblesPosterImg = screen.getByAltText('Asset-Ungu');

    expect(image).toBeInTheDocument();
    expect(incrediblesPosterImg).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<AssetUngu />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
