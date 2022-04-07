

const eqArrays = function(arrOne, arrTwo) {
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

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅ ✅ Assertion Passed ✅ ✅: ${actual} === ${expected}`);
  } else {
    console.log(`💥💥Assertion Failed💥💥: ${actual} !== ${expected}`);
  }
};

//function should take in a source array and a itemsToRemove array
const without = function (source, itemsToRemove) {
  
  let newArray = [];
  //check elements of source array
  for (const element of source) {
    let save = true;
    //check items to be removed against elements of source array
    for (const item of itemsToRemove) {
      //compare if items to remove match elements of source array
      if (item === element) {
        save = false;
        
      }
    }
    if (save === true) {
      newArray.push(element);
    }
  }
  return newArray;
};
//return a new array with only those elements from source that are not present in the itemsToRemove array

//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

//const words = [ ];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, []);
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);