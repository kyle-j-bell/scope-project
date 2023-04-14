/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/
//Declares a function that accepts an array as an argument.  Returns a function that accepts a second array.
//When invoked, the inner function checks for common elements between both arrays using Array.filter and Array.includes, and returns a new array of these common elements.
function plannedIntersect(firstArr) {
  return function intersectCheck (secondArr) {
    let filteredArray = firstArr.filter(element => secondArr.includes(element) === true);
    return filteredArray;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
try {
  module.exports = plannedIntersect;
} catch (e) {
  return null;
}
