/*
 Write a function that takes two or more arrays and returns a new array of unique values in the 
 order of the original provided arrays.

 In other words, all values present from all arrays should be included in their original order, 
 but with no duplicates in the final array.
 
 The unique numbers should be sorted by their original order, but the final array should not be 
 sorted in numerical order.
*/

function uniteUnique(arr) {
  let allArr = [];

  // Merge all the input arrays
  for (let i = 0; i < arguments.length; i++) {
    allArr = allArr.concat(arguments[i]);
  }

  let output = [];
  for (let j = 0; j < allArr.length; j++) {
    if (output.indexOf(allArr[j]) == -1) {
      output.push(allArr[j]);
    }
  }

  return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
