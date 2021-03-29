/*
 Create a function that sums two arguments together. If only one argument is provided, 
 then return a function that expects one argument and returns the sum.

 For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

 Calling this returned function with a single argument will then return the sum:
* var sumTwoAnd = addTogether(2);
* sumTwoAnd(3) returns 5.

 If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  // Check if arguments are not numbers
  if ([...arguments].some((obj) => typeof obj !== "number")) {
    return;
  }

  // In case there are more than 1 numbers
  if (arguments.length >= 2) {
    return [...arguments].reduce((sum, value) => sum + value);
  }

  let arg = [...arguments][0];

  // Return a function if arguments has only 1 number
  return function (num) {
    if (typeof num !== "number") {
      return;
    }
    return arg + num;
  };
}

addTogether(3);
