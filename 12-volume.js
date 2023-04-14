/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.

Example 1:
let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

Example 3:
let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

***********************************************************************/
//Declares a function that accepts an initial 'height' argument and returns a function.
//This inner function can be invoked twice with a single number argument.  In this example, the width is passed first, and the length is passed second.
//Returns the product of all three number arguments, or the volume of the rectangle.
//Subsequent function calls will always return the original volume.
function recVolume(height) {
  let c = 0;
  let volume = height;
  return function recWidthLength(value) {
    if (c < 2) {
      c++;
      volume *= value
    }
    if (c === 2) {
      return volume;
    }
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = recVolume;
} catch (e) {
  return null;
}
