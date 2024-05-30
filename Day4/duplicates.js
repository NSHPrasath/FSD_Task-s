(function () {
  // Sample array with duplicates
  let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5, 6];

  // Function to remove duplicates from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  // Remove duplicates
  let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

  // Print the result
  console.log(arrayWithoutDuplicates);
})();
