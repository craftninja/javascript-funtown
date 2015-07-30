// Create a code example (different from the ones you have seen so far) that illustrates what a closure is. You may use comments to explain how the example illustrates the concept.

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
var add1 = makeAdder(1)
var addism = makeAdder("ism")

console.log(add5(2));  // 7
console.log(add10(2)); // 12
console.log(add1(2)); // 3
console.log(addism(2)); // 3
