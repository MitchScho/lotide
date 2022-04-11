
//function receives two arrays
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
//console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]));
//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
//console.log(eqArrays([1, 2, 3], [3, 2, 3]));

module.exports = eqArrays;

