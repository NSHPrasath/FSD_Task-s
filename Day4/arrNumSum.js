(function () {
  // Sample number array
  let numberArray = [1, 2, 3, 4, 5];

  // Calculate the sum of all numbers in the array
  let sum = numberArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Print the result
  console.log(sum);
})();
