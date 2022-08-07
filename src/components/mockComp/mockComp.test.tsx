import { render,screen } from "@testing-library/react"
import Comp2 from "./Comp2"
import MockComp from "./MockComp"


jest.mock('./Comp2.tsx')
jest.mocked(Comp2).mockImplementation(() => <div>xyz</div>)

describe('test comp with mocked comp', () => {      
    test('mock comp', () => {
        render(<MockComp propFunc={jest.fn()}/>)
        expect(screen.getByText('xyz')).toBeInTheDocument()
    })
})