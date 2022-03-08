import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../../../components/About/About'
import renderer from "react-test-renderer"

describe('About', () => {
    it('renders a heading', () => {
        render(<About />)

    const heading = screen.getByRole('heading', {
        name: "What's on the impostor website",
        name: "ABOUT US",
        name: "FREE ONLINE GAMES",
        name: "HOW TO PLAY",
        })

        expect(heading).toBeInTheDocument()
    })

    it('matches the snapshot', () => {
    const tree = renderer.create(<About />).toJSON()

    expect(tree).toMatchSnapshot()
    })
})