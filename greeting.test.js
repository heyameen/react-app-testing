const greeting = guest => `Hello, ${guest}!`;

describe('greeting()', () => { // 1
  it('says hello', () => { // 2
    expect(greeting('Jest')).toBe('Hello, Jest!'); // 3
  });
});