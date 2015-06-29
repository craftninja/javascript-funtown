// Rotate an array by `n`. `n` can be smaller or greater than the array length.

// `[0,1,2,3,4,5]` with `n = 4` should return `[4,5,0,1,2,3]`
// `[0,1,2,3,4,5]` with `n = -1` should return `[5,0,1,2,3,4]`
// `[0,1,2,3,4,5]` with `n = 7` should return `[1,2,3,4,5,0]`

function rotateArrayByN(array, n) {
  if (n > 0) {
    for (var i = 0; i < n; i++) {
      array.push(array.shift());
    }
  } else {
    for (var i = 0; i > n; i--) {
      array.unshift(array.pop());
    }
  }
  return array;
}

console.log("should return `[4, 5, 0, 1, 2, 3]`");
console.log(rotateArrayByN([0,1,2,3,4,5], 4));

console.log("should return `[5, 0, 1, 2, 3, 4]`");
console.log(rotateArrayByN([0,1,2,3,4,5], -1));


console.log("should return `[1, 2, 3, 4, 5, 0]`");
console.log(rotateArrayByN([0,1,2,3,4,5], 7));
