import React from 'react'
import { render, screen } from '@testing-library/react'
import AssetUngu from '../../../components/Assets/AssetUngu'
import renderer from "react-test-renderer"

describe('AssetUngu', () => {
    it('renders a image', () => {
    render(<AssetUngu />)

    const image = screen.getByRole('img', {
        name: "Asset-Ungu",
        })

    const incrediblesPosterImg = screen.getByAltText('Asset-Ungu')

        expect(image).toBeInTheDocument()
        expect(incrediblesPosterImg).toBeInTheDocument()
    })

    it('matches the snapshot', () => {
    const tree = renderer.create(<AssetUngu />).toJSON()

    expect(tree).toMatchSnapshot()
    })
})