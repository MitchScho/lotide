const assertEqual = require("../assertEqual");
const tail = require("../tail");

// Test Case: Check the returned array
const result = tail(["Hello", "Lighthouse", "Labs"]);
//const result = tail([]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
//assertEqual(tail([4, 5, 6, 7]), [5, 6, 7]);
//assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
//assertEqual(tail([2]), 5);
//assertEqual(tail([]), undefined);