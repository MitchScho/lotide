//assertEqual Function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed ✅ ✅: ${actual} === ${expected}`);
  } else {
    console.log(`💥💥Assertion Failed💥💥: ${actual} !== ${expected}`);
  }
};

//eqArrays Function
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//eqObjects Function
const eqObjects = function (object1, object2) {

  //use the Object.keys function on both objects and compare their lengths
  const objKey1 = Object.keys(object1);
  const objKey2 = Object.keys(object2);
  console.log("Here", objKey1);
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





const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true)

const cd2 = { c: "1", d: ["2", 4] };
assertEqual(eqObjects(cd, cd2), false); // => false