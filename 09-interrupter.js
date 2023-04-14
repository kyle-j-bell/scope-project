/***********************************************************************
Write a function named interrupter that accepts a single parameter `interruptingWord`:
  `interrupter(interruptingWord)`
The interrupter function should return a function.
When the function returned by interrupter is called with a sentence,
the sentence will be returned with the original interruptingWord inserted
between each word in the sentence.

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/
//Declares a function that accepts a word string as an argument.  When invoked with a sentence string, the function inserts the word string between each word of the sentence.
function interrupter(interruptingWord) {
  return function interrupted(sentence) {
    let interruptedSentence = sentence.split(" ");
    return interruptedSentence.join(" " + interruptingWord + " ");
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = interrupter;
} catch (e) {
  return null;
}
