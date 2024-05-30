(function () {
  // Sample number array
  let numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 0) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Filter the array to include only prime numbers
  let primeNumbers = numberArray.filter(isPrime);

  // Print the result
  console.log(primeNumbers);
})();
