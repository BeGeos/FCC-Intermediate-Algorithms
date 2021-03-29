/*
    Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than 
    or equal to num.
    
    The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the 
    sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci 
    sequence are 1, 1, 2, 3, 5 and 8.

    For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  if (isNaN(num)) {
    return;
  }

  // Find all Fibonacci's number up to num
  // returns an array
  function findSeries(limit) {
    let series = [1, 1];
    let i = 1;
    let sum = 0;
    while (true) {
      sum = series[i] + series[i - 1];
      if (sum > limit) {
        break;
      }
      series.push(sum);
      i++;
    }
    return series;
  }

  let sequence = findSeries(num);
  return sequence
    .filter((num) => num % 2 !== 0)
    .reduce((sum, value) => sum + value);
}
