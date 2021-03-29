/*
    Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
    as well as by all sequential numbers in the range between these parameters.

    The range will be an array of two numbers that will not necessarily be in numerical order.

    For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also 
    evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  // Sort the array
  let sorted = arr.sort((a, b) => a - b);
  let max = 1;

  // Worst case scenario, the common multiple is factorial
  for (let j = sorted[0]; j <= sorted[1]; j++) {
    max *= j;
  }

  // Helper function
  function isDivisible(num, start, end) {
    /* Divide the num by all the numbers in the array
         in reverse. Time might be a bit more efficient
         There is a higehr chance to fail for bigegr numbers
         this could optimised the algorithm
      */

    for (let i = start; i < end; i++) {
      if (num % i !== 0) {
        return false;
      }
    }
    return true;
  }

  let k = sorted[0];
  let multiple = sorted[1] * k;
  while (multiple < max) {
    multiple = sorted[1] * k;
    if (isDivisible(multiple, sorted[0], sorted[1])) {
      return multiple;
    }
    k++;
  }
  return max;
}

console.log(smallestCommons([2, 10]));

// Alternative way using Array.prototype.every instead of helper function
function smallestCommons(arr) {
  // Sort the array
  let sorted = arr.sort((a, b) => a - b);
  let max = 1;

  // Worst case scenario, the common multiple is factorial
  for (let j = sorted[0]; j <= sorted[1]; j++) {
    max *= j;
  }

  // Build the range array
  let range = Array(sorted[1] - sorted[0] + 1)
    .fill(sorted[0])
    .map((num, ind) => num + ind);

  let k = sorted[0];
  let multiple = sorted[1] * k;
  while (multiple < max) {
    multiple = sorted[1] * k;
    if (range.every((divisor) => multiple % divisor == 0)) {
      return multiple;
    }
    k++;
  }
  return max;
}

console.log(smallestCommons([2, 10]));

// Easier Soultiuon
function smallestCommon(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(min)
    .map((num, ind) => num + ind);

  const upperBound = range.reduce((prod, value) => prod * value);

  for (let multiple = max; multiple < upperBound; multiple += max) {
    if (range.every((num) => multiple % num == 0)) {
      return multiple;
    }
  }

  return upperBound;
}
