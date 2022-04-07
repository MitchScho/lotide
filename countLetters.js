const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ Assertion Passed ✅ ✅: ${actual} === ${expected}`);
  } else {
    console.log(`💥💥Assertion Failed💥💥: ${actual} !== ${expected}`);
  }
};
//Function takes a sentence as a string
const countLetters = function(sentence) {
  const results = { };
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
//Output a count of each letter in that sentence
};

countLetters("qwertyqwertgfdsa");