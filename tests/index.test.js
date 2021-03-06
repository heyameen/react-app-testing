const fizzBuzz = require('../fizzBuzz/index');

describe('fizzBuzz', () => {
    it('returns "FizBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })

    it('returns the given number for multiplies of neither 3 nor 5', () => {
        expect(fizzBuzz(1)).toBe('1')
        expect(fizzBuzz(22)).toBe('22')
    })
    
    it('returns "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
        expect(fizzBuzz(20)).toBe('Buzz')
    })
    
    it('returns "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz')
        expect(fizzBuzz(12)).toBe('Fizz')
    })

    

    
})