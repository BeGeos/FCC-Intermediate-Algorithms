/*
  Compare two arrays and return a new array with any items only found in one of the 
  two given arrays, but not both. In other words, return the symmetric difference of 
  the two arrays.
 */

function diffArray(arr1, arr2) {
    var newArr = [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    // Helper function 
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) == - 1)
    };
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);