/***********************************************************************
Write a function reverseStr(str) that accepts a string and returns that string
reversed.

Write this function using a fat arrow function!

Examples:
let result1 = reverseStr("hello"); // returns "olleh"
let result2 = reverseStr("garden"); // returns "nedrag"
let result3 = reverseStr("potato"); // returns "otatop"


***********************************************************************/
//Declares a function using function arrow syntax that accepts a string.
//Returns the string reversed using .split to mutate the string into an array, followed by .reverse to reverse it, and .join to mutate it back into a string.
const reverseStr = string => {let reversedString = string.split("").reverse(); return reversedString.join("")};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverseStr;
  } catch (e) {
    return null;
  }
