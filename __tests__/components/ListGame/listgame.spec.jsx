import React from 'react'
import { render, screen } from '@testing-library/react'
import ListGame from '../../../components/ListGame/ListGame'
import renderer from "react-test-renderer"

describe('ListGame', () => {
    it('renders a heading', () => {
        render(<ListGame />)

    const heading = screen.getByRole('heading', {
        name: "List Game",
        })

        expect(heading).toBeInTheDocument()
    })

    it('matches the snapshot', () => {
    const tree = renderer.create(<ListGame />).toJSON()

    expect(tree).toMatchSnapshot()
    })
})