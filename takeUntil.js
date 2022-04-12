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

//Function will take 2 parameters, an array and a call back function
const takeUntil = function (array, callback) {

  //function return a slice of the array with elements taken from beginning
  const newArray = [];
  for (const element of array) {

    //callback should only be provided one value: The item in the array
    if (!callback(element)) {

      //it should keep going until the callback returns a truthy value
      newArray.push(element);
    } else {
      break;
    }
  }
  return newArray;
};

const data1 = [1, 2, 5, 7, 2, 4, -3, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const numbers = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const numResults = takeUntil(numbers, number => number < 1);
const numControl = [1, 2, 5, 7, 2,];

const words = ["ground", "control", "is", "to", "major", ", ", "tom"];
const wordResults = takeUntil(words, word => word === ", ");
const wordControl = ["ground", "control", "is", "to", "major"];

const emptyArray = [];

assertArraysEqual(numResults, numControl);
assertArraysEqual(wordResults, wordControl);
assertArraysEqual(emptyArray, emptyArray);

module.exports = takeUntil;