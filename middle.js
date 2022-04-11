

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

module.exports = middle;
//Should return an array
//Should return only the middle element or elements
//If the array is an even number the two elements in the centre should be returned
//If the array is of an odd number the single middle element should be returned
