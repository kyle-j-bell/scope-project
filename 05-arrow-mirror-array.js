/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/
//Declares a function using arrow function syntax that accepts an array.
//Declares a "mirrored" array by using Array.slice and Array.reverse to copy and reverse the argument array without changing the array itself.
//Returns the argument array with the mirrored array concatenated.
const mirrorArray = (array) => {let mirroredArray = array.slice().reverse(); return array.concat(mirroredArray);};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mirrorArray;
} catch (e) {
  return null;
}
