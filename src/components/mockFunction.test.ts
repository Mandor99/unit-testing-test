import { randomValue } from './mockFunction';

describe('math random', () => {
    test('between min max', () => {
        expect(randomValue(3, 5)).toBeGreaterThanOrEqual(3)
    })
    test('test mock random math', () => {
        const r = jest.spyOn(Math, 'random')
        r.mockReturnValue(0)
        expect(randomValue(3,5)).toBe(3)
        expect(r).toHaveBeenCalledTimes(1)
    })
    test('test mock random math', () => {
        const r = jest.spyOn(Math, 'random')
        r.mockClear().mockReturnValue(.999) // mockClear() => to clear the times of called and return it to 0
        expect(randomValue(3,5)).toBe(5)
        expect(r).toHaveBeenCalledTimes(1)

    })
})
