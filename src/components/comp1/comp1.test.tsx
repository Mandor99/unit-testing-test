import { render, screen } from "@testing-library/react"
import Comp1 from './Comp1'
 
test('test comp1', () => {
    render(<Comp1 />)
    const txt = screen.getByText(/hello world/i)
    expect(txt).toBeInTheDocument()
})