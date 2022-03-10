import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ShapeKuning from '../../../components/Assets/ShapeKuning';

describe('ShapeKuning', () => {
  it('renders a image', () => {
    render(<ShapeKuning />);

    const image = screen.getByRole('img', {
      name: 'Shape-Kuning',
    });

    const incrediblesPosterImg = screen.getByAltText('Shape-Kuning');

    expect(image).toBeInTheDocument();
    expect(incrediblesPosterImg).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<ShapeKuning />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
