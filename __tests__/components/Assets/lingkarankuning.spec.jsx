import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import LingkaranKuning from '../../../components/Assets/LingkaranKuning';

describe('LingkaranKuning', () => {
  it('renders a image', () => {
    render(<LingkaranKuning />);

    const image = screen.getByRole('img', {
      name: 'Lingkaran-Kuning',
    });

    const incrediblesPosterImg = screen.getByAltText('Lingkaran-Kuning');

    expect(image).toBeInTheDocument();
    expect(incrediblesPosterImg).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<LingkaranKuning />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
