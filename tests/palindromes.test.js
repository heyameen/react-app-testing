const palindromes = require('../palindromes/palindromes');

describe('palindromes()', () => {
    it('correctly identifies one-word palindromes', () => {
        expect(palindromes('madam')).toEqual(['madam'])
    })
})