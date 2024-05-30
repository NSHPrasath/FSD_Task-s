(() => {
  // Sample number array
  let numberArray = [1, 2, 3, 4, 5];

  // Arrow function to calculate the sum of all numbers in an array
  const sum = (arr) => arr.reduce((total, num) => total + num, 0);

  // Calculate the sum
  const totalSum = sum(numberArray);

  // Print the result
  console.log(totalSum);
})();
