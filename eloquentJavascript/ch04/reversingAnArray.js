// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

function reverseArray(array) {
  newArray = [];
  array.forEach(function(element) {
    newArray.unshift(element);
  });
  return newArray;
}

function reverseArrayInPlace(array) {
  var end;
  for (var i = 0; i < array.length/2; i++) {
    end = array[i];
    array[i] = array[array.length-i-1];
    array[array.length-i-1] = end;
  }
  return array;
}

console.log("Reverse Array [0,1,2,3,4,5]");
console.log(reverseArray([0,1,2,3,4,5]));

console.log("Reverse Array In Place [0,1,2,3,4,5]");
console.log(reverseArrayInPlace([0,1,2,3,4,5]));
