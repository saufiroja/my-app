import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from "react-test-renderer"
import AssetBatu from '../../../components/Assets/AssetBatu'

describe('AssetBatu', () => {
    it('renders a image', () => {
        render(<AssetBatu />)

    const image = screen.getByRole('img', {
        name: "Asset-Batu",
        })

    const incrediblesPosterImg = screen.getByAltText('Asset-Batu')

        expect(image).toBeInTheDocument()
        expect(incrediblesPosterImg).toBeInTheDocument()
    })

    it('matches the snapshot', () => {
    const tree = renderer.create(<AssetBatu />).toJSON()

    expect(tree).toMatchSnapshot()
    })
})