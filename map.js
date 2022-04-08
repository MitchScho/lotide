const eqArrays = function (arrOne, arrTwo) {
  //Compare the two arrays
  //return false if arrays don't match
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  //Return true if arrays match
  return true;
};

const assertArraysEqual = function (actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅ ✅ Assertion Passed ✅ ✅: ${actual} === ${expected}`);
  } else {
    console.log(`💥💥Assertion Failed💥💥: ${actual} !== ${expected}`);
  }
};

//Map function will take two arguments// An aaray to map and a call back function

const map = function (array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const numbers = [1, 2, 3, 4,];
const numResults = map(numbers, number => number * 2);
const numControl = [2, 4, 6, 8, 10];

const words = ["ground", "control", "to", "major", "tom"];
const wordResults = map(words, word => word[0]);
const wordControl = ["g", "c", "t","m","t"]

const emptyArray = [];

assertArraysEqual(numResults, numControl);
assertArraysEqual(wordResults, wordControl);
assertArraysEqual(emptyArray, wordControl);



//const results1 = map(words, word => word[0]);

//const numbers1 = [1, 2, 3, 4, 5, 6, 7];
