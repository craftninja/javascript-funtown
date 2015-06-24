// We've seen that the `%` (the remainder operator) can be used to test whether a number is even or odd by using `% 2` to check whether it's divisible by two. Here's another way to define whether a positive whole number is even or odd:

// Zero is even
// One is odd
// For any other number N, its evenness is the same as `N - 2`

// Define a recursive function `isEven` corresponding to this description. The function should accept a `number` parameter and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// function isEven(number) {
//   absNumber = Math.abs(number);
//   if (absNumber == 0) {
//     return true;
//   } else if (absNumber == 1) {
//     return false;
//   } else {
//     return isEven(absNumber - 2);
//   };
// };

// Same as above, just double terned.

function isEven(number) {
  absNumber = Math.abs(number);
  return absNumber == 0 ? true : absNumber == 1 ? false : isEven(absNumber - 2)
}

console.log("50 is even:", isEven(50));
console.log("75 is even:", isEven(75));
console.log("-1 is even:", isEven(-1));
