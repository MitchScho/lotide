const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed ✅ ✅: ${actual} === ${expected}`);
  } else {
    console.log(`💥💥Assertion Failed💥💥: ${actual} !== ${expected}`);
  }
};


//Function takes in an object and a value
const findKeyByValue = function(object, value) {
  const objKey = Object.keys(object);
  
  //It should scan the object and return the first key which contains the given value
  for (const obj of objKey) {
    if (object[obj] === value) {
      return obj;
    }
  }
  //If no key with that given value is found, then it should return undefined.
  return undefined;  
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);