import React from 'react'
import { render, screen } from '@testing-library/react'
import AssetKuning from '../../../components/Assets/AssetKuning'
import renderer from "react-test-renderer"

describe('AssetKuning', () => {
    it('renders a image', () => {
    render(<AssetKuning />)

    const image = screen.getByRole('img', {
        name: "Asset-Kuning",
        })

    const incrediblesPosterImg = screen.getByAltText('Asset-Kuning')

        expect(image).toBeInTheDocument()
        expect(incrediblesPosterImg).toBeInTheDocument()
    })

    it('matches the snapshot', () => {
    const tree = renderer.create(<AssetKuning />).toJSON()

    expect(tree).toMatchSnapshot()
    })
})