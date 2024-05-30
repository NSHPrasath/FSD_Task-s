(function () {
  // Sample string array
  let stringArray = ["racecar", "hello", "level", "world", "madam", "openai"];

  // Function to check if a string is a palindrome
  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  // Filter the array to include only palindromes
  let palindromes = stringArray.filter(isPalindrome);

  // Print the result
  console.log(palindromes);
})();
