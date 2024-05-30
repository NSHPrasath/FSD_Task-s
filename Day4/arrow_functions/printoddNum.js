(() => {
  // Sample array
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Function to filter odd numbers
  const getOddNumbers = (arr) => arr.filter((num) => num % 2 !== 0);

  // Get odd numbers
  let oddNumbers = getOddNumbers(array);

  // Print the result
  console.log(oddNumbers);
})();
