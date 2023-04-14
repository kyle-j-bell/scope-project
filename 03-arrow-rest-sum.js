/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/
//Declares a function using arrow function syntax that accepts an indefinite number of parameters.
//Declares an initial sum of 0, uses Array.forEach to add all incoming parameters to the sum, and returns the total sum.
const arrowRestSum = (...otherNums) => {let sum = 0; otherNums.forEach(element => sum += element); return sum;};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = arrowRestSum;
} catch (e) {
  return null;
}
