// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
//
// var list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
// The resulting objects form a chain, like this:
//
// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition, the original list is also still a valid three-element list.
//
// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of nth.

// Helper function version



// No helper function version
function arrayToList(array) {
  var list = null;
  var times = array.length;
  for (var i = 0; i < times; i++) {
    list = {
      value: array[array.length - i - 1],
      rest: list
    };
  };
  return list;
};

function listToArray(list) {
  array = [];
  while (list.rest != null) {
    array.push(list.value);
    list = list.rest;
  };
  array.push(list.value);
  return array;
};

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

console.log("Array to list [1,2,3]");
console.log(arrayToList([1,2,3]));

console.log("List to array (result should be same array as above)");
console.log(listToArray(list));
