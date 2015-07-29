// Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible (numerator, denominator) {
  return numerator % denominator === 0;
};

console.log("expected: true");
console.log("actual:  ", isDivisible(9,3));
console.log("expected: false");
console.log("actual:  ", isDivisible(7,3));
