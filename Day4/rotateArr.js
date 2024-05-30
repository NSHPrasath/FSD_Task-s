(function () {
  // Sample array and rotation count
  let array = [1, 2, 3, 4, 5, 6, 7];
  let k = 3; // Number of times to rotate the array

  // Function to rotate an array by k times
  function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; // To handle cases where k is larger than the array length
    return arr.slice(-k).concat(arr.slice(0, -k));
  }

  // Rotate the array
  let rotatedArray = rotateArray(array, k);

  // Print the result
  console.log(rotatedArray);
})();
