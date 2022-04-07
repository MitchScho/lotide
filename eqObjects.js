// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //use the Object.keys function on both objects and compare their lengths
  const objKey1 = Object.keys(object1).length;
  const objKey2 = Object.keys(object2).length;
  //If not equal, there's no point in going further: return false
  if  (objKey1 !== objKey2) {
    return false;
  }
  //loop through the keys returned by Object.keys for one of the objects
  for (const)
  return true;
};



const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed ✅ ✅: ${actual} === ${expected}`);
  } else {
    console.log(`💥💥Assertion Failed💥💥: ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false