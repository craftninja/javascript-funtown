// The previous chapter introduced the standard function `Math.min` that returns the smallest argument. We can do that ourselves now. Write a function `min` that takes two arguments and returns their minimum.

function min(arg1, arg2) {
  return arg1 < arg2 ? arg1 : arg2
}

console.log("Min 5, 3 (should be 3):", min(5,3));
console.log("Min 5, 42 (should be 5):", min(5,42));
console.log("Min 9, 9 (should be 9):", min(9,9));
