import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from '../../../components/Hero/Hero'
import renderer from "react-test-renderer"

describe('Hero', () => {
    it('renders a heading', () => {
        render(<Hero />)

    const heading = screen.getByRole('heading', {
        name: "let's show your talent for game",
        })

        expect(heading).toBeInTheDocument()
    })

    it('matches the snapshot', () => {
    const tree = renderer.create(<Hero />).toJSON()

    expect(tree).toMatchSnapshot()
    })
}) 