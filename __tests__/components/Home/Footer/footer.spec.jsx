import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../../../../components/home/footer/Footer';

describe('Footer', () => {
  it('renders a heading', () => {
    render(<Footer />);

    const heading = screen.getByRole('heading', {
      name: 'Impostor',
    });

    expect(heading).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
