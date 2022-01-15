// My test function - Should be getting 1 failed, 1 passed - Only getting 1 failed - Rather 1 test in general

const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});