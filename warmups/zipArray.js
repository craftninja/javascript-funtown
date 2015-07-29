// Implement a function which takes two parameters, both of which are arrays, and zips them together. ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, you return [1,4,2,5,3,6].
//

function zip(array1, array2) {
  var maxLength = array1.length > array2.length ? array1.length : array2.length
  var newArray = [];
  for (var i = 0; i < maxLength; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  };
  return newArray;
};

console.log("expected:");
console.log([1,4,2,5,3,6]);
console.log("actual");
console.log(zip([1,2,3], [4,5,6]));
