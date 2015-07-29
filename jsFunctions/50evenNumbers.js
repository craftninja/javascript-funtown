// Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number.

function evenNumbers (int) {
  var evens = [];
  for (var i = 0; i < int; i+=2) {
    evens.push(i);
  };
  return evens.join('\n');
};

console.log('expected: even numbers from 0 to 20 in rows');
console.log('actual:');
console.log(evenNumbers(21));
