/*
    A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
    For example, 2 is a prime number because it is only divisible by 1 and 2. 
    In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

    Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  // Tell if input number is prime
  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }

  // Create an array of primes up to num
  let primes = [];
  for (let k = 2; k <= num; k++) {
    if (isPrime(k)) {
      primes.push(k);
    }
  }

  return primes.reduce((sum, value) => sum + value);
}

sumPrimes(10);
