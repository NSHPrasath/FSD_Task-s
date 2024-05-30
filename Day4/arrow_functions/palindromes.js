(() => {
  // Sample string array
  let stringArray = ["racecar", "hello", "level", "world", "madam", "openai"];

  // Arrow function to check if a string is a palindrome
  const isPalindrome = (str) => str === str.split("").reverse().join("");

  // Filter the array to include only palindromes
  const palindromes = stringArray.filter(isPalindrome);

  // Print the result
  console.log(palindromes);
})();
