function include(array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    };
  };
  return false;
};

var a = [1,2,3,4,5];

console.log("expected :", true);
console.log("actual:   ", include(a, 3));

console.log("expected :", false);
console.log("actual:   ", include(a, 7));

console.log("expected :", false);
console.log("actual:   ", include(a, "3"));

console.log("expected :", false);
console.log("actual:   ", include(a, { a: 1 }));
