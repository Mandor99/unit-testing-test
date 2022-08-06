import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

// 1. test if desc exist, if counter is right 
// 2. test increment
// 3. test decrement
describe('counter with 1 mount no change in mount', () => {

    beforeEach(() => {render(<Counter desc='my counter desc' initCount={0}/>)})

    test('test if comp in the dom', () => {
        const descCount = screen.getByText(/counter desc/i)
        expect(descCount).toBeInTheDocument()
    })

    test('test if comp in the dom with thee initial value 0', () => {
        const initCount = screen.getByText(/current count: 0/i)
        expect(initCount).toBeInTheDocument()
    })

    test('click increment BTN => increase +1 only without input value', () => {
        const incrementBtn = screen.getByRole('button', {name:'increment'})
        userEvent.click(incrementBtn)
        const newCount = screen.getByText(/current count: 1/i)
        expect(newCount).toBeInTheDocument()
    })

    test('click decrement BTN => decrement -1 without input value', () => {
        const decrementBtn = screen.getByRole('button', {name: 'decrement'})
        userEvent.click(decrementBtn)
        const newCount = screen.getByText(/current count: -1/i)
        expect(newCount).toBeInTheDocument()
    })
})

//4. test counter if 10 => 15 if + with mount 5
//5. test counter if 10 => -5 if - with mount 15
export function getElementsByAmount (name: string) {
    const countBtn = screen.getByRole('button', {name: `${name}`})
    const inputVal = screen.getByRole('spinbutton')
    userEvent.type(inputVal, '{selectall}5')
    // userEvent.click(countBtn)
    return {countBtn}
}
describe('test counter with amount more than 1', () => {

    beforeEach(() => render(<Counter desc={'my counter with amount'} initCount={10} />))

    test('counter with amount +5 on initCount 10', () => {
        const {countBtn} = getElementsByAmount('increment')
        userEvent.click(countBtn)
        expect(screen.getByText(/current count: 15/i)).toBeInTheDocument()
    })

    test('counter with amount -5 on initCount 10', () => {
        const {countBtn} = getElementsByAmount('decrement')
        userEvent.click(countBtn)
        expect(screen.getByText(/current count: 5/i)).toBeInTheDocument()
    })
})

