(function () {
  // Sample string array
  let stringArray = ["hello world", "javascript is fun", "lIfE and map"];

  // Function to convert a string to title caps
  function toTitleCaps(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  // Apply the toTitleCaps function to each element in the array
  let titleCappedArray = stringArray.map(toTitleCaps);

  // Print the result
  console.log(titleCappedArray);
})();
