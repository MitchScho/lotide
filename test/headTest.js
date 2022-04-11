const { assert } = require("chai");
const head = require("../head");



describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("returns undefined for an []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns 3 for a [3]", () => {
    assert.strictEqual(head([3]), 3);
  });
  
});
