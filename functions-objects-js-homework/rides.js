// ## Rides
// 1. Write a function that takes a ride object and a child object as arguments (see example objects below).
// 2. Determine if the child is tall enough for the ride (the function should return true or false)
//
// #### Example Objects:
//
// ```
var child1 = {
  height: 3,
  name: "Julian",
  age: 3
};

var child2 = {
  height: 4,
  name: "Cero",
  age: 4
};

var ride1 = {
  minHeight: 3,
  maxHeight: 7
};

var ride2 = {
  minHeight: 4,
  maxHeight: 7
};
// ```

function tallEnough(child, ride) {
  return child.height >= ride.minHeight && child.height <= ride.maxHeight;
};

console.log(tallEnough(child1, ride1));
console.log(tallEnough(child1, ride2));
console.log(tallEnough(child2, ride1));
console.log(tallEnough(child2, ride2));
