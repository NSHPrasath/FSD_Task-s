(() => {
  // Sample string array
  let stringArray = ["hello world", "javascript is fun", "life and map"];

  // Function to convert a string to title caps
  const toTitleCaps = (str) =>
    str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  // Convert all strings in the array to title caps
  const titleCappedArray = stringArray.map(toTitleCaps);

  // Print the result
  console.log(titleCappedArray);
})();
