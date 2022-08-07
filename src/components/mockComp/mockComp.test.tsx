import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Comp2 from "./Comp2"
import MockComp from "./MockComp"


jest.mock('./Comp2.tsx')
jest.mocked(Comp2).mockImplementation(() => <div>xyz</div>)

describe('test comp with mocked comp', () => {  
    test('mock comp', () => {
        const mockPropFunc = jest.fn()    
        render(<MockComp propFunc={mockPropFunc}/>)
        const btnFunc = screen.getByText(/click prop func/i)
        expect(screen.getByText('xyz')).toBeInTheDocument()
        userEvent.click(btnFunc)
        expect(mockPropFunc).toHaveBeenCalledTimes(1)
    })
})