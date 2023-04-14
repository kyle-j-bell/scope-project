/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/
//Declares a function that accepts a string.
function sandwichMaker(){
  let sandwichOrder = "One sandwich with tomato";
  //Adds the string to a running sandwich order, then returns the current status of the order.
  return function (filling) {
    sandwichOrder += " and " + filling;
    return sandwichOrder;
  };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = sandwichMaker;
} catch (e) {
  return null;
}
