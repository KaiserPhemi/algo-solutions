// module import
const numberSum= require('./twoNumberSum');
const assert = require('assert');

// test case
assert.deepStrictEqual(numberSum([4, 6], 10), [4, 6]);
assert.deepStrictEqual(numberSum([4, 6, 1], 5), [1, 4]);
assert.deepStrictEqual(numberSum([4, 6, 1, -3], 3), [-3, 6]);
assert.deepStrictEqual(numberSum([3, 5, -4, 8, 11, 1, -1, 6], 10), [-1, 11]);
assert.deepStrictEqual(numberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17), [8, 9]);
assert.deepStrictEqual(numberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18), [3, 15]);
assert.deepStrictEqual(numberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5), [-5, 0]);
assert.deepStrictEqual(numberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163), [-47, 210]);


