
// Function removes the first item of an array and returns the tail
//function recieves an array parameter
const tail = function (array) {
  // If array length is greater then 1 (array.slice )removes the first
  //item and stores the remaining array values as a new array in newArray var.
  let newArray = [];
  if (array.length > 1) {
    newArray = array.slice(1);
  }
  return newArray;
};

module.exports = tail;
