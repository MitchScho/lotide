const { assert } = require("chai");
const middle = require("../middle");

describe("#middle", () => {
  it("Returns [] if given an []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("Returns [])if given [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("Returns [3] if given [1, 2, 3, 4, 5] ", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("Returns [8,4] if given [1, 2, 8, 4, 5, 12] ", () => {
    assert.deepEqual(middle([1, 2, 8, 4, 5, 12]), [8, 4]);
  });
});
// // middle([1]);
// // middle([1, 2]);
// // middle([1, 2, 3, 4, 5]);
// // middle([1, 2, 8, 4, 5, 12]);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 8, 4, 5, 12]), [8, 4]);
