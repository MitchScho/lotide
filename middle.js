//function receives two arrays
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

//assertArraysEqual([1, 2, 3], [1, 2, 3]);

const middle = function (array) {
  
  const middleIndex = Math.floor(array.length / 2);
  
  // if array is less then 3 return empty array
  if (array.length < 3) {
    return [ ];
  }
  
  // if array is not divisable by two return one elements of array
  if (array.length % 2 === 1) {
    return [ array[middleIndex] ];
  }
  
  //if array is  divisable by two return two element of array
  if (array.length % 2 === 0) {
    const middleLeft = array[middleIndex - 1];
    const middleRight = array[middleIndex]
    return [ middleLeft, middleRight ];
  }
  
};


//Should return an array
//Should return only the middle element or elements
//If the array is an even number the two elements in the centre should be returned
//If the array is of an odd number the single middle element should be returned
// middle([1]);
// middle([1, 2]);
// middle([1, 2, 3, 4, 5]);
// middle([1, 2, 8, 4, 5, 12]);
assertArraysEqual(middle([1]), [ ]);
assertArraysEqual(middle([1, 2]), [ ]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [ 3]);
assertArraysEqual(middle([1, 2, 8, 4, 5, 12]), [ 8, 4]);