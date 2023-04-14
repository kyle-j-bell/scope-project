/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of parameters
and returns a function.

The returned function will also accept any number of parameters and will
return a string including all of the parameters of smoothieMachine as well
as the returned function's parameters. Look at the examples for a guide of
how your return should be formatted!

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/
//Declares a function that takes any number of string arguments after calling it once.  Returns a "smoothie order" with the arguments as additional "ingredients" with each call.
//Rest parameter syntax is used to capture all potential ingredients in an array.  This array's elements are appended to the 'message' string representing the order.
//"and" is added to the order before the ingredients are after the first call.
function smoothieMachine() {
  let message = "I'm having a smoothie with ";
  let i = 0;

  return function smoothieMaker (...ingredients) {
    let nextIngredient = [...ingredients];
    if (nextIngredient.length === 1 && i === 0) {
      i++;
      return message += nextIngredient[0];
    }
    else if (i === 0) {
      i++;
      return message += nextIngredient.join(" and ");
    }
    return message += " and " + nextIngredient.join(" and ");
  }
}

  // Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  return null;
}
