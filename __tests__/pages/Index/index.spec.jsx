import React from "react"
import Index from "../../../pages/index"
import renderer from "react-test-renderer"

describe('Index', () => {
    it('matches the snapshot', () => {
    const tree = renderer.create(<Index />).toJSON()

    expect(tree).toMatchSnapshot()
})

})
