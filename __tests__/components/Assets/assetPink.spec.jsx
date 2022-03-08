import React from 'react'
import { render, screen } from '@testing-library/react'
import AssetPink from '../../../components/Assets/AssetPink'
import renderer from "react-test-renderer"

describe('AssetPink', () => {
    it('renders a image', () => {
    render(<AssetPink />)

    const image = screen.getByRole('img', {
        name: "Asset-Pink",
        })

    const incrediblesPosterImg = screen.getByAltText('Asset-Pink')

        expect(image).toBeInTheDocument()
        expect(incrediblesPosterImg).toBeInTheDocument()
    })

    it('matches the snapshot', () => {
    const tree = renderer.create(<AssetPink />).toJSON()

    expect(tree).toMatchSnapshot()
    })
})