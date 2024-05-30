// // Print odd numbers in an array anonymous

(function () {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.forEach(function (number) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  });
})();

// // Print odd numbers in an array IIFE

(function () {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
})();
