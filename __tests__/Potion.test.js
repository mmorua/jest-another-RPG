// My test function - Should be getting 1 failed, 1 passed - Only getting 1 failed - Rather 1 test in general

const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length)toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});