const {assert} = require("chai");
const tail = require("../tail");


describe("#tail", () => { 
  it("Returns [] if given an []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("Returns [] if given an [5]", () => {
    assert.deepEqual(tail([5]), []);
  });
  it("Returns [5, 6, 7])if given [4, 5, 6, 7]", () => {
    assert.deepEqual(tail([4, 5, 6, 7]), [5, 6, 7]);
  });
  it("Returns [Lighthouse Labs] if given [Hello Lighthouse Labs] ", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse","Labs"]);
  });
  
});
