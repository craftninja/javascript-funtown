function concat(original, newStuff) {
  var newArray = original.slice();
  if (Array.isArray(newStuff)) {
    newStuff.forEach(function(element) {
      newArray.push(element);
    });
  } else { newArray.push(newStuff)}
  return newArray;
};


var original = ['a','b','c'];
var new1 = 'd';
console.log("actual:   ", concat(original, new1));
console.log("expected: ", ['a','b','c','d']);

console.log(original); // unmodified
console.log(['a','b','c']);

var new2 = ['e'];
console.log("actual:   ", concat(original, new2));
console.log("expected: ", ['a','b','c','e']);

var new3 = [['f'], 'g'];
console.log("actual:   ", concat(original, new3));
console.log("expected: ", ['a','b','c',['f'],'g']);

var new4 = {thing: "awesome"}
console.log("actual:   ", concat(original, new4));
console.log("expected: ", [ 'a', 'b', 'c', { thing: 'awesome' } ]);
