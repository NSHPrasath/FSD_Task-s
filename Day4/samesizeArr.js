(function () {
  // Sample sorted arrays of the same size
  let array1 = [1, 3, 5];
  let array2 = [2, 4, 6];

  // Function to find the median of two sorted arrays of the same size
  function findMedianSortedArrays(arr1, arr2) {
    // Merge the two arrays
    let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    let midIndex = mergedArray.length / 2;

    // If the total length is even, calculate the average of the two middle elements
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    }
    // If the total length is odd, return the middle element
    return mergedArray[Math.floor(midIndex)];
  }

  // Calculate the median
  let median = findMedianSortedArrays(array1, array2);

  // Print the result
  console.log(median);
})();
