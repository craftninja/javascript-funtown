// Implement a function which determines if an element appears more than once in an array.

function duplicates (array, element) {
  elementCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      elementCount ++;
    };
  };
  return elementCount >= 2;
};


console.log("expected");
console.log(true);
console.log("actual");
console.log(duplicates([1,2,3,3,], 3));

console.log("expected");
console.log(false);
console.log("actual");
console.log(duplicates([1,2,3,3,], 1));
