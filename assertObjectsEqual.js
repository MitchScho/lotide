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

//eqObjects Function
const eqObjects = function (object1, object2) {

  //use the Object.keys function on both objects and compare their lengths
  const objKey1 = Object.keys(object1);
  const objKey2 = Object.keys(object2);

  //If not equal, there's no point in going further: return false
  if (objKey1.length !== objKey2.length) {
    return false;
  }

  //loop through the keys returned by Object.keys for one of the objects
  for (const key of objKey1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      const equalArrays = eqArrays(object1[key], object2[key]);
      if (!equalArrays) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  
  if (result === true) {
    console.log(`✅ ✅ Assertion Passed ✅ ✅: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💥💥Assertion Failed💥💥: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
assertObjectsEqual({ c: "1", d: ["2", 2] }, { d: ["2", 3], c: "2" } )
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" } )
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" })

module.exports = assertObjectsEqual;