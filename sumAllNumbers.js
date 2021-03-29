/*
  Given an array of two numbers. Return the sum of those two numbers plus 
  the sum of all the numbers between them. The lowest number will not always come first.
*/ 

function sumAll(arr) {
    // Sorting the Array
    let sorted = arr.sort((a, b) => a - b);
  
    let start = sorted[0];
    let end = sorted[1];
  
    // Creating the range array
    let fullRange = [];
    for (let i = start; i <= end; i++){
      fullRange.push(i)
    }
    
    return fullRange.reduce((sum, value) => sum + value)
  }
  
  sumAll([1, 4]);