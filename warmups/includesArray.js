// Implement a function which determines whether or not something is in an array. The function should be defined with two parameters, one of which is an array, the other which is either a string or integer. ie: Arguments [1,2,3], and 3, would return true. Arguments [1,2,3], 4, would return false.
//

function includes (array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    };
  };
  return false;
};

console.log("expected: true");
console.log("actual:", includes([1,2,3], 3));
console.log("expected: false");
console.log("actual:", includes([1,2,3], 4));
