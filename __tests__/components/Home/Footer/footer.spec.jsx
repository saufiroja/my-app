import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../../../components/home/footer/Footer'
import renderer from "react-test-renderer"

describe('Footer', () => {
    it('renders a heading', () => {
        render(<Footer />)

    const heading = screen.getByRole('heading', {
        name: "Impostor",
        })

        expect(heading).toBeInTheDocument()
    })

    it('matches the snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON()

    expect(tree).toMatchSnapshot()
    })
})