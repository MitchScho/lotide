const eqArrays = require("./eqArrays");


const assertArraysEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅ ✅ Assertion Passed ✅ ✅: ${actual} === ${expected}`);
  } else {
    console.log(`💥💥Assertion Failed💥💥: ${actual} !== ${expected}`);
  }
};

//assertArraysEqual([1, 2, 3], [1, 2, 3]);
module.exports = assertArraysEqual;